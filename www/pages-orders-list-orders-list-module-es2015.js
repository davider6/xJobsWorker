(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orders-list-orders-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders-list/orders-list.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders-list/orders-list.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            Listado de Ordenes ({{status}})\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">    \n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"updateData($event)\" >\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\" >\n        </ion-refresher-content>\n    </ion-refresher>\n    <div *ngIf=\"!loaded\">\n        <ion-list>\n            <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8]\">\n                <ion-thumbnail slot=\"start\">\n                    <ion-skeleton-text animated></ion-skeleton-text>\n                </ion-thumbnail>\n                <ion-label>\n                    <h3>\n                        <ion-skeleton-text animated style=\"width: 50%;\"></ion-skeleton-text>\n                    </h3>\n                    <p>\n                        <ion-skeleton-text animated style=\"width: 80%;\"></ion-skeleton-text>\n                    </p>\n                    <p>\n                        <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n                    </p>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n    </div>\n    <ion-list style=\"background-color: #F59D8A !important;\">\n        <ion-card *ngFor=\"let ord of orders\" class=\"ion-no-padding\" (click)=\"openDetails(ord)\">\n            <ion-item style=\"background-color: #F5F5F5 !important;\">\n                <ion-avatar slot=\"start\">\n                    <img *ngIf=\" ord.profileImage && ord.profileImage !== '' \" [src]=\"ord.profileImage\" />\n                    <img *ngIf=\" !ord.profileImage ||ord.profileImage === '' \" src=\"../../../assets/profiles/profile.jpg\" />\n                </ion-avatar>\n                <ion-label style=\"color: #515D73 !important\">\n                    <h2><span style=\"color: #253659 !important; font-weight: bold;\">{{ord.occupationName}}</span></h2>\n                    <p>{{ord.clientName}}</p>                    \n                    </ion-label>\n            </ion-item>\n            <ion-card-content>\n                {{ord.description.substr(0,150)}}                \n            </ion-card-content>\n            <img src=\"https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=640x350&maptype=roadmap&markers=color:red%7C{{ord.latitude}},{{ord.longitude}}&key=AIzaSyDfI8fbeuGwtgTJxEMABzDwHZ8GTH11Tiw\" />\n            <ion-card-header>\n                <ion-card-subtitle>{{ord.address}}</ion-card-subtitle>\n                <p>{{ ord.workDate | date: 'medium' }}</p>\n            </ion-card-header>                                  \n        </ion-card>\n        <!-- <ion-item-sliding *ngFor=\"let ord of orders\">\n            <ion-item class=\".ion-justify-content-start\" lines=\"none\" (click)=\"openDetails(ord)\">\n                <ion-avatar>\n                    <img src=\"{{ord.occupationImage}}\" class=\".ion-align-self-center\" />\n                    <ion-grid>\n                        <ion-row class=\"ion-text-center\">\n                            <ion-col>\n                                <ion-text color=\"dark\">\n                                    <b><font size=\"3\">{{ord.occupationName}}</font></b>\n                                </ion-text>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-avatar>\n                <ion-label>\n                    <ion-text color=\"dark\">\n                        <b><font size=\"1\">Nombre del solicitante</font></b>\n                    </ion-text>\n                    <ion-text color=\"dark\">\n                        <p>{{ ord.clientName}}</p>\n                    </ion-text>\n\n                    <ion-text color=\"dark\">\n                        <b><font size=\"1\">Descripción</font></b>\n                    </ion-text>\n                    <ion-text color=\"dark\">\n                        <p>{{ord.description.substr(0,100)}}</p>\n                    </ion-text>\n\n                    <ion-text color=\"dark\">\n                        <b><font size=\"1\">Dirección</font></b>\n                    </ion-text>\n                    <ion-text color=\"dark\">\n                        <p>{{ord.address}}</p>\n                    </ion-text>\n\n                    <ion-text color=\"dark\">\n                        <b><font size=\"1\">Fecha de la orden</font></b>\n                    </ion-text>\n                    <ion-text color=\"dark\">\n                        <p>{{ ord.workDate | date: 'medium' }}</p>\n                    </ion-text>\n                </ion-label>\n            </ion-item>\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"dark\" (click)=\"updateStateOfOrder(ord.orderId,'ACCEPTED')\">\n                    <ion-icon  slot=\"top\" name=\"thumbs-up\"></ion-icon>\n                    Aceptar\n                </ion-item-option>\n                <ion-item-option color=\"xjobs\" (click)=\"updateStateOfOrder(ord.orderId,'REJECTED')\">\n                    <ion-icon  slot=\"top\" name=\"thumbs-down\"></ion-icon>\n                    Rechazar\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding> -->\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/orders-list/orders-list-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/orders-list/orders-list-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OrdersListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersListPageRoutingModule", function() { return OrdersListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orders_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders-list.page */ "./src/app/pages/orders-list/orders-list.page.ts");




const routes = [
    {
        path: '',
        component: _orders_list_page__WEBPACK_IMPORTED_MODULE_3__["OrdersListPage"]
    }
];
let OrdersListPageRoutingModule = class OrdersListPageRoutingModule {
};
OrdersListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/orders-list/orders-list.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/orders-list/orders-list.module.ts ***!
  \*********************************************************/
/*! exports provided: OrdersListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersListPageModule", function() { return OrdersListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _orders_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-list-routing.module */ "./src/app/pages/orders-list/orders-list-routing.module.ts");
/* harmony import */ var _orders_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders-list.page */ "./src/app/pages/orders-list/orders-list.page.ts");







let OrdersListPageModule = class OrdersListPageModule {
};
OrdersListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orders_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersListPageRoutingModule"]
        ],
        declarations: [_orders_list_page__WEBPACK_IMPORTED_MODULE_6__["OrdersListPage"]]
    })
], OrdersListPageModule);



/***/ }),

/***/ "./src/app/pages/orders-list/orders-list.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/orders-list/orders-list.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon {\n  display: inline-block;\n  font-size: 12px;\n  vertical-align: middle;\n}\n\n.text {\n  font-size: 12px;\n  display: inline-block;\n  vertical-align: middle;\n  color: darkblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWx2YXJhZG8vZGVzYXJyb2xsby9lbmlhY2d0L2lvbmljL3hKb2JzL3hKb2JzV29ya2VyL3NyYy9hcHAvcGFnZXMvb3JkZXJzLWxpc3Qvb3JkZXJzLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vcmRlcnMtbGlzdC9vcmRlcnMtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDdEJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXJzLWxpc3Qvb3JkZXJzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWF2YXRhciB7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgdG9wOiAzJTtcbi8vICAgcmlnaHQ6IDMlO1xuLy8gICB3aWR0aDogNzBweDtcbi8vICAgaGVpZ2h0OiA3MHB4O1xuLy8gICAvLyBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4vLyAgIC8vIG1hcmdpbi10b3A6IC0zNXB4O1xuLy8gICBib3JkZXI6IHNvbGlkIDJweCAjRDk1QTJCO1xuLy8gfVxuXG4vLyBwIHtcbi8vICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuLy8gICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuLy8gICBmb250LXNpemU6IDEwcHg7XG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4vLyB9XG4vLyBpb24taXRlbSB7XG4vLyAgIC0tYm9yZGVyLXJhZGl1czogMWVtO1xuLy8gICAtLWJvcmRlci13aWR0aDogMC4xZW0gIWltcG9ydGFudDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG4vLyB9XG5cbi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiBkYXJrYmx1ZTtcbn1cbiIsIi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiBkYXJrYmx1ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/orders-list/orders-list.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/orders-list/orders-list.page.ts ***!
  \*******************************************************/
/*! exports provided: OrdersListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersListPage", function() { return OrdersListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let OrdersListPage = class OrdersListPage {
    constructor(apiService, router, alertCtrl, toastController, loadingController) {
        this.apiService = apiService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.loadingSpin = null;
        this.orders = [];
        this.loaded = false;
        this.urlStr = "/in-progress2/requested2";
        this.token = "";
        this.status = "";
        this.workerId = "";
        if (this.router.getCurrentNavigation().extras.state) {
            this.status = this.router.getCurrentNavigation().extras.state.status;
            this.token = this.router.getCurrentNavigation().extras.state.token;
            this.workerId = this.router.getCurrentNavigation().extras.state.workerId;
        }
        else {
            console.log("no trae nada", this.router.getCurrentNavigation().extras);
        }
    }
    ionViewWillEnter() {
        this.apiService
            .getItemsByMethod("occupations", "", null, this.token)
            .subscribe((resp) => {
            this.occupationsList = resp;
            //console.log("si esta el token", this.token);
            this.loadOrders();
        }, (error2) => {
            console.error(JSON.stringify(error2));
        });
    }
    ngOnInit() { }
    sortFunction(a, b) {
        var dateA = new Date(a.workDate).getTime();
        var dateB = new Date(b.workDate).getTime();
        return dateB > dateA ? 1 : -1;
    }
    ;
    loadOrders() {
        const reqField = [
            { fieldName: "workerId", fieldValue: this.workerId },
            { fieldName: "status", fieldValue: this.status },
        ];
        this.apiService
            .getItemsByMethod("workOrders", "getOrdersByWorkerIdAndStatus", reqField, this.token)
            .toPromise()
            .then((resp) => {
            // console.log("loadOrders()",resp);
            resp.sort(this.sortFunction);
            this.orders = resp;
            this.orders.forEach((wo) => {
                const occupationSelected = this.occupationsList.filter((occupation) => occupation.id === wo.occupationId);
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
            if (this.loadingSpin != null) {
                this.loadingSpin.dismiss();
            }
        }, (error2) => {
            console.error(JSON.stringify(error2));
        });
    }
    updateData(event) {
        this.loaded = false;
        this.loadOrders();
        event.target.complete();
    }
    openDetails(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const navigationExtras = {
                state: {
                    status,
                    order,
                    token: this.token,
                    workerId: this.workerId
                },
            };
            this.router.navigate(["orders-details"], navigationExtras);
        });
    }
    remainingTime(orderTIme) {
        const currentTime = new Date();
        const newDate = new Date(orderTIme);
        let diff = (newDate.getTime() - currentTime.getTime()) / 1000;
        diff /= 60;
        return 120 - Math.abs(Math.round(diff));
    }
    goLocation(longitude, latitude) {
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
            });
            toast.present();
        });
    }
};
OrdersListPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
OrdersListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-orders-list",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orders-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders-list/orders-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orders-list.page.scss */ "./src/app/pages/orders-list/orders-list.page.scss")).default]
    })
], OrdersListPage);



/***/ })

}]);
//# sourceMappingURL=pages-orders-list-orders-list-module-es2015.js.map