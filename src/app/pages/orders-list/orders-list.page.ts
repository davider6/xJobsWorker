import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { WorkOrderHistoryDTO } from "src/app/models/dto/WorkOrderHistoryDTO";
import { Occupations } from "src/app/models/bo/Occupations";
import { ApiService } from "src/app/services/api.service";
import { RequestFields } from "src/app/models/bo/request-fields";
import {
  AlertController,
  ToastController,
  LoadingController,
} from "@ionic/angular";

@Component({
  selector: "app-orders-list",
  templateUrl: "./orders-list.page.html",
  styleUrls: ["./orders-list.page.scss"],
})
export class OrdersListPage implements OnInit {
  loadingSpin=null;
  orders: WorkOrderHistoryDTO[] = [];
  occupationsList: Occupations[];
  loaded = false;
  urlStr = "/in-progress2/requested2";
  token: string = "";
  status: string = "";
  workerId: string = "";

  constructor(
    private apiService: ApiService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastController: ToastController,
    public loadingController: LoadingController
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.status = this.router.getCurrentNavigation().extras.state.status;
      this.token = this.router.getCurrentNavigation().extras.state.token;
      this.workerId = this.router.getCurrentNavigation().extras.state.workerId;

      
    } else {
      console.log("no trae nada", this.router.getCurrentNavigation().extras);
    }
  }

  ionViewWillEnter() {
    this.apiService
        .getItemsByMethod("occupations", "", null, this.token)
        .subscribe(
          (resp) => {
            this.occupationsList = resp as Occupations[];
            //console.log("si esta el token", this.token);

            this.loadOrders();
          },
          (error2) => {
            console.error(JSON.stringify(error2));
          }
        );
  }

  ngOnInit() {}

  sortFunction(a,b){  
    var dateA = new Date(a.workDate).getTime();
    var dateB = new Date(b.workDate).getTime();
    return dateB > dateA ? 1 : -1;  
  };

  loadOrders() {
    const reqField: RequestFields[] = [
      { fieldName: "workerId", fieldValue: this.workerId },
      { fieldName: "status", fieldValue: this.status },
    ];
    this.apiService
      .getItemsByMethod(
        "workOrders",
        "getOrdersByWorkerIdAndStatus",
        reqField,
        this.token
      )
      .toPromise()
      .then(
        (resp: WorkOrderHistoryDTO[]) => {
          // console.log("loadOrders()",resp);

          resp.sort(this.sortFunction);​

          this.orders = resp;
          this.orders.forEach((wo) => {
            const occupationSelected = this.occupationsList.filter(
              (occupation) => occupation.id === wo.occupationId
            );
            wo.occupation = occupationSelected[0]["name"];
            wo.occupationAvatar = occupationSelected[0]["categoryImage"];

            if (wo.status === "NEW") {
              wo.statusColor = "success";
              wo.status = "NEW";
            }
            wo.expiresIn = this.remainingTime(wo.workDate);
          });
          this.loaded = true;
          // console.log(this.orders);
          if(this.loadingSpin != null){
            this.loadingSpin.dismiss();
          }
        },
        (error2) => {
          console.error(JSON.stringify(error2));
        }
      );
  }

  updateData(event) {
    this.loaded = false;
    this.loadOrders();
    event.target.complete();
  }

  async openDetails(order) {
    const navigationExtras: NavigationExtras = {
      state: {
        status,
        order,
        token: this.token,
        workerId: this.workerId
      },
    };
    this.router.navigate(["orders-details"], navigationExtras);
  }

  remainingTime(orderTIme: Date) {
    const currentTime = new Date();
    const newDate = new Date(orderTIme);
    let diff = (newDate.getTime() - currentTime.getTime()) / 1000;

    diff /= 60;

    return 120 - Math.abs(Math.round(diff));
  }

  goLocation(longitude: number, latitude: number){
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }
}
