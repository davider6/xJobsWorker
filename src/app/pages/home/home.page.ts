import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService, Credenciales } from 'src/app/services/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage';
import { Worker } from "../../models/worker";
import { MenuController } from '@ionic/angular';
import { RequestFields } from 'src/app/models/bo/request-fields';
import { Chart } from "chart.js";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  @ViewChild("topChart",{static: false}) tchart: ElementRef;

  worker: Worker;
  token: string;

  workerId: string;
  orders: any[] = [];
  tableStyle = "material";

  top: Chart;
  topData: any = {};
  chartOptions: any = {};
  loaded = false;

  constructor( private authService: AuthService,
               private router: Router,
               private afAuth: AngularFireAuth,
               private apiService: ApiService,
               private ionicStorage: Storage,
               private menu: MenuController ) {}
  
  loadScreenData(){
    this.addDataChart();      
    this.loadDataGrid();
  }
  updateData(event) {
  this.loaded = false;
  this.loadScreenData();
  event.target.complete();
}

  async start() {
     // console.log('session',sessionStorage.getItem("userId"));
     this.token = await this.ionicStorage.get("token");
     this.workerId = await this.ionicStorage.get("userId");
    //  this.worker = await this.ionicStorage.get("workerObject");

     this.ionicStorage.get('workerObject').then( (value) => {
      //  console.log('workerObject', value);
       this.worker = JSON.parse(value);
     });

     // this.ionicStorage.get('userId').then( (value) => {
     //   console.log('userId',value);
     //   this.workerId = value;
     // });

     // this.ionicStorage.get('auth-token').then( (value) => {
     //   console.log('auth-token',value);
     //   this.token = value;
     // });
  }

  signOut(){
    this.menu.enable(false, 'end');
    this.menu.close('end');
    this.afAuth.auth.signOut()
    .then( resp => {
      // console.log('succefully signout', resp);
      this.apiService.cleanStorage();
      this.ionicStorage.clear();
      this.ionicStorage.set('welcomepage', true);
      this.router.navigate(['/login']);
    })
    .catch( err => {
      console.log('error signing out', err);
    });
  }

  editWorker(){
    this.menu.enable(false, 'end');
    this.menu.close('end');
    const navigationExtras: NavigationExtras = {
      state: {
        worker: this.worker,
        token: this.token
      },
    };
    this.router.navigate(['edit-worker'], navigationExtras);
  }

  openInfoProfile() {
    // console.log('hola openInfoProfile()');
    this.menu.enable(true, 'end');
    this.menu.open('end');
    // console.log('it´s opened');
  }

  loadDataGrid() {
    const reqField: RequestFields[] = [
      { fieldName: "workerId", fieldValue: this.workerId },
    ];
    
    
    this.apiService
      .getItemsByMethod("workOrders", "getOrdersByWorkerId", reqField, this.token)
      .subscribe((resp) => {
        // console.log('getOrdersByWorkerId',resp);
        this.orders = resp as any[];
        // console.log(this.orders);
      });
  }

  setColor(status): string {
    if (status === "Accepted") {
      return "warning";
    } else if (status === "New") {
      return "danger";
    } else if (status === "Expired") {
      return "secondary";
    } else if (status === "Rejected") {
      return "medium";
    }
  }

  selectOrder(status: string) {
    // console.log("status selected: " + status);
    this.router.navigateByUrl("order-history/" + this.workerId + "/inProgress");
  }

  goBack() {
    this.router.navigateByUrl("home");
  }

  ngAfterViewInit() {
    this.createTopChart();
  }

  ionViewWillEnter() {
    this.start().then(()=>{
      this.loadScreenData();      
    })
    
  }

  goGoGo(status) {
    //console.log("goGoGo(" + status + ")");
    //console.log(this.token);
    
    const navigationExtras: NavigationExtras = {
      state: {
        status,
        workerId:this.workerId,
        token: this.token
      },
    };
    //console.log('deberia de navegar');
    
    this.router.navigate(["orders-list"], navigationExtras);
    //this.router.navigateByUrl("order-history/" + this.workerId + "/inProgress");
  }

  createTopChart() {
    // console.log('createTopChart()');
    let $this = this;

    this.top = new Chart(this.tchart.nativeElement, {
      type: "bar",
      data: {},
      options: {
        onClick: function (event, array) {
          if (array[0]) {
            $this.goGoGo(array[0]._model.label);
          }
        },
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "",
          fontSize: 20,
        },
        animation: {
          animateRotate: true,
          animateScale: true,
          onComplete: function () {
            var chartInstance = this.chart,
              ctx = chartInstance.ctx;

            ctx.font = Chart.helpers.fontString(
              Chart.defaults.global.defaultFontSize,
              Chart.defaults.global.defaultFontStyle,
              Chart.defaults.global.defaultFontFamily
            );
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";

            this.data.datasets.forEach(function (dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function (bar, index) {
                var data = dataset.data[index];
                ctx.fillText(data, bar._model.x, bar._model.y - 5);
              });
            });
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                precision:0
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  addDataChart() {
    let data: any[] = [];

    const reqField: RequestFields[] = [
      { fieldName: "workerId", fieldValue: this.workerId },
    ];

    this.apiService
      .getItemsByMethod("workOrders", "getTotalOrdersByWorkerId", reqField, this.token)
      .subscribe((resp) => {

        // console.log('getTotalOrdersByWorkerId',resp);

        data = resp as any[];

        let labels: string[] = [];
        let values: number[] = [];

        data.forEach(function (item: any) {
          labels.push(item["status"]);
          values.push(item["total"]);
        });

        let dataChart: any = {
          datasets: [
            {
              data: values,
              backgroundColor: [
                "rgba(245, 171, 53, 0.5)",
                "rgba(44, 130, 201, 0.5)",
                "rgba(240, 52, 52, 0.5)",
                "rgba(42, 187, 155, 0.5)",
                "rgba(63, 191, 127, 0.5)",
              ],
              borderColor: [
                "rgba(245, 171, 53, 0.8)",
                "rgba(44, 130, 201, 0.8)",
                "rgba(240, 52, 52, 0.8)",
                "rgba(42, 187, 155, 0.8)",
                "rgba(63, 191, 127, 0.8)",
              ],
            },
          ],
          borderAlign: "center",
          boderWidth: 2,
          labels: labels,
        };

        this.top.data = dataChart;

        this.top.update();
      });
  }

  async openDetails(order) {
    if (order["tempOrderId"]) {
      order["orderId"] = order["tempOrderId"];
    }
    // console.log("Que es value", JSON.stringify(order));
    const navigationExtras: NavigationExtras = {
      state: {
        order,
      },
    };
    // this.router.navigate(["order-details"], navigationExtras);
  }

}
