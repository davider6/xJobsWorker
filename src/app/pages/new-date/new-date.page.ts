import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Platform, AlertController, NavController, LoadingController } from '@ionic/angular';
import { WorkOrderHistoryDTO } from '../../models/dto/WorkOrderHistoryDTO';
import { DatePipe } from '@angular/common';
import { RequestFields } from '../../models/bo/request-fields';

@Component({
  selector: 'app-new-date',
  templateUrl: './new-date.page.html',
  styleUrls: ['./new-date.page.scss'],
})
export class NewDatePage implements OnInit {
  
  loadingSpin=null;
  orderDetails: WorkOrderHistoryDTO;
  token: string;
  workerId: string;
  isTemp: string = "false";
  ubicacion: boolean = false;
  proposedDate: string;
  proposedTime: string;
  description: string;
  minDate: string;
  maxDate: string;
  isLoaded = false;
  isPublicOrder = false;

  constructor(private apiService: ApiService,
    private router: Router,
    private plt: Platform,
    private alertController: AlertController,
    private nav: NavController,
    private loadingController: LoadingController,
    private alertCtrl: AlertController,
    private datePipe: DatePipe
    ) { 
      this.isLoaded = true;
      this.reset();
      if (this.router.getCurrentNavigation().extras.state) {
        this.orderDetails = this.router.getCurrentNavigation().extras.state.order;
        this.token = this.router.getCurrentNavigation().extras.state.token;
        this.workerId = this.router.getCurrentNavigation().extras.state.workerId;
        if(this.orderDetails.publicWorksId && this.orderDetails.publicWorksId > 0){
          this.isPublicOrder = true;
        }
        if (this.orderDetails.tempOrderId) {
          this.isTemp = "true";
        }
        if (this.orderDetails.latitude && this.orderDetails.longitude) {
          this.ubicacion = true;
        }
      }
    }

  ngOnInit() {
  }

  reset() {
    let tmpDate = new Date();
    tmpDate = new Date(tmpDate.getTime() + (1000 * 60 * 60 * 24));
    this.minDate = this.datePipe.transform(tmpDate, "yyyy-MM-dd");
    tmpDate = new Date(tmpDate.getTime() + (60 * (1000 * 60 * 60 * 24)));
    this.maxDate = this.datePipe.transform(tmpDate, "yyyy-MM-dd");
    this.isLoaded = true;
  }

  proposeNewDate() {
    if (!this.proposedDate) {
      this.presentAlert("No ha ingresado fecha.", false);
    } else if (!this.proposedTime) {
      this.presentAlert("No ha ingresado horario.", false);
    } else if (!this.description) {
      this.presentAlert("No ha ingresado comentario.", false);
    } else {
      
      console.log('proposedDate '+ this.proposedDate + ' proposedTime ' + this.proposedTime.substr(11,5));
      this.orderStartAsync();
    }
  }
 
  async orderStartAsync(){
    const dateFormatted  = this.formatDate(this.proposedDate);
    const reqField: RequestFields[] = [
      { fieldName: "workOrderId", fieldValue: this.orderDetails.orderId + "" },
      { fieldName: "workerId", fieldValue: this.workerId },
      { fieldName: "status", fieldValue: 'CHANGE_DATE' },
      { fieldName: "isPublicOrder", fieldValue: this.isPublicOrder+"" },
      { fieldName: "publicOrderId", fieldValue: this.orderDetails.publicWorksId+"" },
      { fieldName: "date", fieldValue: dateFormatted+"" },
      { fieldName: "time", fieldValue: dateFormatted+"" },
      { fieldName: "observation", fieldValue: this.description+"" },
    ];
    console.log('Request ' + JSON.stringify(reqField));
    this.processOrder(reqField);
   
  }

  async presentAlert(message: any, back: boolean) {
    const alert = await this.alertController.create({
      header: "Job Exchange",
      subHeader: "Solicitud de cambio de fecha enviado",
      message,
      buttons: ["OK"],
    });

    await alert.present();

    if (back) {
      this.nav.navigateForward("/home");
    }
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
      subHeader: "Solicitud de cambio de fecha enviado",
      message: 'cambio de fecha de orden registrado',
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

}
