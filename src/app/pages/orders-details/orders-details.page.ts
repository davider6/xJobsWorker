import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkOrderHistoryDTO } from 'src/app/models/dto/WorkOrderHistoryDTO';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Platform, AlertController, NavController, LoadingController, IonSlides, ModalController, ToastController } from '@ionic/angular';
import { ImageSliderComponent } from "../../components/image-slider/image-slider.component";
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File, FileEntry } from "@ionic-native/file/ngx";
import { Storage } from "@ionic/storage";

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
import { ImagePreviewPage } from '../modals/image-preview/image-preview.page';
import { RequestFields } from 'src/app/models/bo/request-fields';
import { ApiService } from 'src/app/services/api.service';

@Component({
  providers: [ImageSliderComponent],
  selector: 'app-orders-details',
  templateUrl: './orders-details.page.html',
  styleUrls: ['./orders-details.page.scss'],
})
export class OrdersDetailsPage implements OnInit {
  loadingSpin=null;
  orderDetails: WorkOrderHistoryDTO;
  segment = 0;
  rating: number = 0;
  closing: boolean = false;
  ubicacion: boolean = false;
  // loading: any;
  user: string = "";
  nextStep: string;
  isTemp: string = "false";
  token: string;
  workerId: string;
  sliderOpts = {
    zoom: false,
    slidesPerview: 1.5,
    centeredSlides: true,
    spaceBetween: 20,
  };

  // MAPA
  map: GoogleMap;
  homeOwnerMark: Marker;

  homeOwnerPics: string[] = []

  //Control de botones de accion
  finalize: boolean = false;
  accept: boolean = false;
  reject: boolean = false;
  proposeDate: boolean = false;
  startOrder: boolean = false;
  endDate: boolean = true;

  description: string = '';
  duration: string = '';


  @ViewChild("slides", { static: true }) slider: IonSlides;

  constructor(
    private modalController: ModalController,
    private apiService: ApiService,
    private file: File,
    private router: Router,
    private plt: Platform,
    private alertController: AlertController,
    private nav: NavController,
    private loadingController: LoadingController,
    private imageSlider: ImageSliderComponent,
    private actRoute: ActivatedRoute,
    private storage: Storage,
    private photoViewer: PhotoViewer,
    private alertCtrl: AlertController,
    private toastController: ToastController
  ) {
    
    if (this.router.getCurrentNavigation().extras.state) {
      this.orderDetails = this.router.getCurrentNavigation().extras.state.order;
      this.token = this.router.getCurrentNavigation().extras.state.token;
      this.workerId = this.router.getCurrentNavigation().extras.state.workerId;
      if (this.orderDetails.status==='NEW') {
        this.proposeDate = true;
        this.accept = true;
        this.reject = true;
        this.finalize = false;
        this.startOrder = false;
        this.endDate = false;
      } else if (this.orderDetails.status==='ACCEPTED') {
        this.proposeDate = false;
        this.accept = false;
        this.reject = false;
        this.finalize = false;
        this.startOrder = true;
        this.endDate = false;
      } else if (this.orderDetails.status==='PUBLIC') {
        this.proposeDate = true;
        this.accept = true;
        this.reject = false;
        this.finalize = false;
        this.startOrder = false;
        this.endDate = false;
      } else if (this.orderDetails.status==='CHANGE_DATE') {
        this.proposeDate = false;
        this.accept = false;
        this.reject = false;
        this.finalize = false;
        this.startOrder = false;
        this.endDate = false;
      } else if (this.orderDetails.status==='IN_PROGRESS') {
        this.proposeDate = false;
        this.accept = false;
        this.reject = false;
        this.finalize = true;
        this.startOrder = false;
        this.endDate = false;
        if(this.orderDetails.startTime) {
          const startTimeTmp = new Date(this.orderDetails.startTime).getTime();
          const currDate = new Date().getTime();
          const diffMs = currDate - startTimeTmp;
          let diffHrs = Math.ceil(diffMs/1000/60/60);
          this.duration = ' ' + diffHrs + ' hrs';
        } else {
          this.duration = ' 0 hrs';
        }
      }

      if (this.orderDetails.tempOrderId) {
        this.isTemp = "true";
      }
      if (this.orderDetails.latitude && this.orderDetails.longitude) {
        this.ubicacion = true;
      }

       this.loadHomeOwnerImages();
    }
    
  }

  // async presentLoading() {
  //   this.loading = await this.loadingController.create({
  //     message: "Please wait...",
  //   });
  //   await this.loading.present();

  //   const { role, data } = await this.loading.onDidDismiss();
  //   console.log("Loading dismissed!");
  // }

  async ngOnInit() {
    await this.plt.ready();
    await this.createMap();
    await this.goToMyLocation();
    // await this.homeOwnerMark.showInfoWindow();
  }

  async segmentChanged() {
    this.slider.lockSwipes(false);
    await this.slider.slideTo(this.segment);
    this.slider.lockSwipes(true);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  onChangeRating(index: number) {
    this.rating = index;
    console.log("rating: " + this.rating);
  }

  createNewOrder() {
    this.nav.navigateForward("/new-order");
  }

  setCloseOrder() {
    this.closing = true;
  }

  closeOrder() {

    if (this.description == "") {
      this.presentAlert("No ha ingresado comentario.", false);
    } else {
      const dateFormatted  = this.formatDate(new Date());
      const reqField: RequestFields[] = [
        { fieldName: "workOrderId", fieldValue: this.orderDetails.orderId + "" },
        { fieldName: "workerId", fieldValue: this.workerId },
        { fieldName: "status", fieldValue: 'FINISHED' },
        { fieldName: "isPublicOrder", fieldValue: false+"" },
        { fieldName: "publicOrderId", fieldValue: this.orderDetails.publicWorksId+"" },
        { fieldName: "date", fieldValue: dateFormatted+"" },
        { fieldName: "time", fieldValue: dateFormatted+"" },
        { fieldName: "observation", fieldValue: this.description+"" },
      ];
     this.executeClose(reqField);
    }
  }

  async executeClose(reqField) {
    this.loadingSpin = await this.loadingController.create({
     message: "Validando el usuario...",
   });
   await this.loadingSpin.present();
  
  //  console.log('reqField',reqField);
  
   let mensaje = "";
   this.loadingSpin.dismiss();
   this.apiService
     .putItemsByMethod(
       "woAssigned",
       "acceptOrRejectOrders",
       reqField,
       this.token
     )
     .toPromise()
     .then( async (result) => {
       console.log('result',result);
       if (result === -1) {
        mensaje = "Error al finalizar registro de orden.";
       } else if (result === 1) {
        mensaje = "Orden finalizada con exito.";
       }
  
       if(this.loadingSpin != null){
        this.loadingSpin.dismiss();
        }
  
  
       console.log(mensaje);
  
       const alert = await this.alertCtrl.create({
        header: "Job Exchange",
        subHeader: "Solicitud de cambio de fecha enviado",
        message: 'Orden finalizada con exito',
        buttons: [
          {
            text: "OK",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              console.log("Confirm OK");
            },
          },
        ],
      });
      this.cargarImagenes();
      await alert.present();
      this.router.navigate(['/home']);
  
     })
     .catch((e) => {
       console.log("error,", e);
       if(this.loadingSpin != null){
        this.loadingSpin.dismiss();
        }
    });
  
     
  }

  verUbicacion(){
    const url = 'https://www.google.com/maps/dir/' + this.orderDetails.latitude + ',' + this.orderDetails.longitude + '/';
    // console.log('Abriendo Mapa URL ' + url);
    window.open(url, '_system');
  }

  async presentAlert(message: any, back: boolean) {
    const alert = await this.alertController.create({
      header: "Cierre de Orden",
      subHeader: "Job Exchange",
      message,
      buttons: ["OK"],
    });

    await alert.present();

    if (back) {
      this.nav.navigateForward("/home");
    }
  }

  createMap() {
    this.map = GoogleMaps.create("map_canvas", {
      camera: {
        zoom: 13,
        tilt: 0,
      },
    });

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe(
        //     (data) => {
        //         console.log(data);
        //         alert("Click MAP");
        //     }
        // );
      });
  }

  goToMyLocation() {

    this.map.getMyLocation().then((location: MyLocation) => {

        let workerMark: Marker = this.map.addMarkerSync({
          title: "¡Tu estás aquí!",
          position: location.latLng,
          animation: GoogleMapsAnimation.DROP
          //icon: "assets/location/casa.png",
        });

    })
    .catch(error => {
      console.error(JSON.stringify(error));
    })

    this.homeOwnerMark = this.map.addMarkerSync({
      title: "Dirección: "+ this.orderDetails.address + ", Códidgo Zip: "+ this.orderDetails.zipCode,
      position: { lat: this.orderDetails.latitude, lng: this.orderDetails.longitude },
      animation: GoogleMapsAnimation.DROP,
      icon: "assets/location/casa.png",
    });

    this.homeOwnerMark.showInfoWindow();

    // Move the map camera to the location with animation
    this.map.moveCamera({
      target: { lat: this.orderDetails.latitude, lng: this.orderDetails.longitude },
      zoom: 13,
      tilt: 0
    });

  }

  imagePreview(img){
    this.photoViewer.show(img);
  }

  cargarImagenes() {
    try{
      this.imageSlider.prepareFilesToUpload(
        this.orderDetails.orderId,
        true,
        false,
        this.token
      );
    } catch (e) {
      console.log('Error al cargar imagenes');
    }
  }

  async updateStateOfOrder(workOrderId: number, status: string, orderStatus: string) {
    const isPublic = orderStatus=='PUBLIC';
    const reqField: RequestFields[] = [
      { fieldName: "workOrderId", fieldValue: workOrderId + "" },
      { fieldName: "workerId", fieldValue: this.workerId },
      { fieldName: "status", fieldValue: status },
      { fieldName: "isPublicOrder", fieldValue: isPublic+"" },
      { fieldName: "publicOrderId", fieldValue: this.orderDetails.publicWorksId+"" },
    ];
    console.log('Request ' + JSON.stringify(reqField));
    let alertMessage = "¿Está seguro de querer ";

    if (status === "ACCEPTED") {
      alertMessage = alertMessage + "aceptar";
    }else{
      alertMessage = alertMessage + "rechazar";
    }
      
    alertMessage = alertMessage + " estar orden de trabajo?";

    const alert = await this.alertCtrl.create({
      header: "Job Exchange",
      subHeader: "Revisión de Orden de Trabajo",
      message: alertMessage,

      buttons: [
        {
          text: "No",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Si",
          handler: () => {
            this.processOrder(reqField);
          },
        },
      ],
    });

    await alert.present();
  }

  async processOrder(reqField) {
    this.loadingSpin = await this.loadingController.create({
     message: "Validando el usuario...",
   });
   await this.loadingSpin.present();

  //  console.log('reqField',reqField);

   let mensaje = "";
   this.apiService
     .putItemsByMethod(
       "woAssigned",
       "acceptOrRejectOrders",
       reqField,
       this.token
     )
     .toPromise()
     .then( async (result) => {
       console.log('result',result);
       if (result === -1) {
        mensaje = "Alguien más acepto esta orden con anterioridad.";
       } else if (result === 1) {
        mensaje = "Orden actualizada exitosamente.";
       }

       if(this.loadingSpin != null){
        this.loadingSpin.dismiss();
        }


       console.log(mensaje);

      const alert = await this.alertCtrl.create({
        header: "Job Exchange",
        subHeader: "Detalle de Orden de Trabajo",
        message: mensaje,
        buttons: [
          {
            text: "OK",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              console.log("Confirm OK");
            },
          },
        ],
      });
  
      await alert.present();
      this.router.navigate(['/home']);

     })
     .catch((e) => {
       console.log("error,", e);
       if(this.loadingSpin != null){
        this.loadingSpin.dismiss();
        }
    });

     
 }

 proposeNewDate(){
   const order: any = this.orderDetails;
   const navigationExtras: NavigationExtras = {
    state: {
      status,
      order,
      token: this.token,
      workerId: this.workerId
    },
  };
  this.router.navigate(["new-date"], navigationExtras);
 }

 processStartOrder() {
  const dateFormatted  = this.formatDate(new Date());
  console.log('fecha formateada ', dateFormatted);
  const reqField: RequestFields[] = [
    { fieldName: "workOrderId", fieldValue: this.orderDetails.orderId + "" },
    { fieldName: "workerId", fieldValue: this.workerId },
    { fieldName: "status", fieldValue: 'IN_PROGRESS' },
    { fieldName: "isPublicOrder", fieldValue: false+"" },
    { fieldName: "publicOrderId", fieldValue: this.orderDetails.publicWorksId+"" },
    { fieldName: "date", fieldValue: dateFormatted+"" },
    { fieldName: "time", fieldValue: dateFormatted+"" },
    { fieldName: "observation", fieldValue: 'IN_PROGRESS'+"" },
  ];
  this.orderStartAsync(reqField);
 }

  async orderStartAsync(reqField) {
    this.loadingSpin = await this.loadingController.create({
     message: "Validando el usuario...",
   });
   await this.loadingSpin.present();
  
  //  console.log('reqField',reqField);
  
   let mensaje = "";
   this.apiService
     .putItemsByMethod(
       "woAssigned",
       "acceptOrRejectOrders",
       reqField,
       this.token
     )
     .toPromise()
     .then( async (result) => {
       console.log('result',result);
       if (result === -1) {
        mensaje = "Error al iniciar registro de orden.";
       } else if (result === 1) {
        mensaje = "Inicio de orden registrado.";
       }
  
       if(this.loadingSpin != null){
        this.loadingSpin.dismiss();
        }
  
  
       console.log(mensaje);
  
       const alert = await this.alertCtrl.create({
        header: "Job Exchange",
        subHeader: "Inicio de orden",
        message: 'Inicio de orden registrado',
        buttons: [
          {
            text: "OK",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              console.log("Confirm OK");
            },
          },
        ],
      });
    
      await alert.present();
      this.router.navigate(['/home']);
  
     })
     .catch((e) => {
       console.log("error,", e);
       if(this.loadingSpin != null){
        this.loadingSpin.dismiss();
        }
    });
  
     
  }

 formatDate(date) {
  var d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();
  let hours = d.getHours().toString();
  let minute = d.getMinutes().toString();
  let seconds = d.getSeconds().toString();
  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  if (hours.length < 2) {
    hours = '0' + hours;
  }
  if (minute.length < 2) {
    minute = '0' + minute;
  }
  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }
  return year+"-"+month+"-"+day+" "+hours+":"+minute+":"+seconds;
}

  loadHomeOwnerImages(){
    const reqField: RequestFields[] = [
      { fieldName: "isClose", fieldValue: 'false' },
      // { fieldName: "isTemp", fieldValue: this.isTemp },
      { fieldName: "isTemp", fieldValue: 'false' },
      { fieldName: "orderId", fieldValue: this.orderDetails.orderId.toString() },
    ];

    this.apiService
        .getItemsByMethodWithoutContext("urlFilesByOrderId", "", reqField, this.token)
        .subscribe(
          (resp) => {
            // console.log('resp',resp);
            this.homeOwnerPics = resp as string[];
          },
          (error2) => {
            console.error(JSON.stringify(error2));
          }
        );
  }

}
