(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <ion-app>\n        <ion-content fullscreen class=\"background-image ion-padding\" no-scroll>\n            <ion-card style=\"background-color: #FFE7E7 !important;\">\n            <img src=\"../../../assets/welcome/fullwidth-image1.png\" class=\"onboarding-image\"/>\n                <ion-slides (ionSlideDidChange)=\"slideChanged()\" [options]=\"{lockSwipeToPrev: true}\" #welcomeSlider style=\"margin-top: -30px;\" >\n                    <ion-slide style=\"margin-top: -20px;\" >\n                        <div class=\"slide\">\n                            <ion-card class=\"welcome_card\">\n                                <ion-card-header class=\"ion-no-padding\">\n                                    <ion-card-title>\n                                        <h1>\n                                            <span style=\"color: #282289; font-weight: bold;\">Bienvenido</span></h1>\n                                    </ion-card-title>\n                                </ion-card-header>\n                                <ion-card-content class=\"ion-no-padding\">\n                                    <p style=\"font-size: 18px; color: #242E4F;\">\n                                        X-Jobs Exchange App es una forma práctica de darle a conocer a las personas tus habilidades.</p>\n                                </ion-card-content>\n                            </ion-card>\n                            <p class=\"to_bottom\">\n                                <ion-button size-xs=\"8\" class=\"secondary-btn\" fill=\"outline\" type=\"submit\" expand=\"block\" (click)=\"next()\">\n                                    Siguiente\n                                </ion-button>\n                                <ion-button size-xs=\"8\" class=\"tertiary-btn\" type=\"submit\" expand=\"block\" (click)=\"accept()\">\n                                    Omitir\n                                </ion-button>                                \n                            </p>\n                        </div>\n                    </ion-slide>\n\n                    <ion-slide style=\"margin-top: -20px;\">\n                        <ion-card class=\"welcome_card\">\n                            <ion-card-header class=\"ion-no-padding\">\n                                <ion-card-title>\n                                    <h1>\n                                        <span style=\"color: #282289; font-weight: bold;\">Localización</span></h1>\n                                </ion-card-title>\n                            </ion-card-header>\n                            <ion-card-content class=\"ion-no-padding\">\n                                <p style=\"font-size: 18px; color: #242E4F;\">Nos gustaría ayudar a que nuestros clientes te encuentren más fácilmente, por lo tanto estaremos solicitando acceso a tu ubicación.</p>\n                            </ion-card-content>\n                        </ion-card>\n                        <p class=\"to_bottom\">\n                            <ion-button size-xs=\"8\" class=\"secondary-btn\" fill=\"outline\" type=\"submit\" expand=\"block\" (click)=\"next()\">\n                                Siguiente\n                            </ion-button>\n                            <ion-button size-xs=\"8\" class=\"tertiary-btn\" type=\"submit\" expand=\"block\" (click)=\"previous()\">\n                                Anterior\n                            </ion-button>                                \n                        </p>\n                    </ion-slide>\n\n                    <ion-slide style=\"margin-top: -20px;\">\n                        <ion-card class=\"welcome_card\">\n                            <ion-card-header class=\"ion-no-padding\">\n                                <ion-card-title>\n                                    <h1>\n                                        <span style=\"color: #282289; font-weight: bold;\">Camara</span></h1>\n                                </ion-card-title>\n                            </ion-card-header>\n                            <ion-card-content class=\"ion-no-padding\">\n                                <p style=\"font-size: 18px; color: #242E4F;\">Puedes compartir fotografías directamente desde la cámara de tu celular para poder respaldar tu excelente trabajo.</p>\n                            </ion-card-content>\n                        </ion-card>\n                        <p class=\"to_bottom\">\n                            <ion-button size-xs=\"8\" class=\"secondary-btn\" fill=\"outline\" type=\"submit\" expand=\"block\" (click)=\"next()\">\n                                Siguiente\n                            </ion-button>\n                            <ion-button size-xs=\"8\" class=\"tertiary-btn\" type=\"submit\" expand=\"block\" (click)=\"previous()\">\n                                Anterior\n                            </ion-button>                                \n                        </p>\n                    </ion-slide>\n\n                    <ion-slide style=\"margin-top: -20px;\">\n                        <ion-card class=\"welcome_card\">\n                            <ion-card-header class=\"ion-no-padding\">\n                                <ion-card-title>\n                                    <h1>\n                                        <span style=\"color: #282289; font-weight: bold;\">Galería</span></h1>\n                                </ion-card-title>\n                            </ion-card-header>\n                            <ion-card-content class=\"ion-no-padding\">\n                                <p style=\"font-size: 18px; color: #242E4F;\">O bien sube fotografías directamente desde tu galería para brindar mayor detalle de tu trabajo realizado.</p>\n                            </ion-card-content>\n                        </ion-card>\n                        <p class=\"to_bottom\">\n                            <ion-button size-xs=\"8\" class=\"secondary-btn\" fill=\"outline\" type=\"submit\" expand=\"block\" (click)=\"next()\">\n                                Siguiente\n                            </ion-button>\n                            <ion-button size-xs=\"8\" class=\"tertiary-btn\" type=\"submit\" expand=\"block\" (click)=\"previous()\">\n                                Anterior\n                            </ion-button>                                \n                        </p>\n                    </ion-slide>\n\n                    <ion-slide style=\"margin-top: -20px;\">                    \n                        <ion-card class=\"welcome_card\">\n                                <ion-card-header class=\"ion-no-padding\">\n                                    <ion-card-title>\n                                        <h1>\n                                            <span style=\"color: #282289; font-weight: bold;\">Gracias por usar XJobs</span></h1>\n                                    </ion-card-title>\n                                </ion-card-header>\n                                <ion-card-content class=\"ion-no-padding\">\n                                    <p style=\"font-size: 18px; color: #242E4F;\">\n                                        Registrate y configura tu perfil para acceder a miles de oportunidades de trabajo.</p>\n                                </ion-card-content>\n                            </ion-card>\n                        <p class=\"to_bottom\">\n                            <ion-button size-xs=\"8\" class=\"secondary-btn\" fill=\"outline\" type=\"submit\" expand=\"block\" (click)=\"accept()\">\n                                Iniciar\n                            </ion-button>\n                            <ion-button size-xs=\"8\" class=\"tertiary-btn\" type=\"submit\" expand=\"block\" (click)=\"previous()\">\n                                Anterior\n                            </ion-button>                                \n                        </p>\n                    </ion-slide>\n\n                </ion-slides>\n            </ion-card>\n        </ion-content>\n    </ion-app>\n\n    <style>\n        ion-slides {\n            height: 100%;\n        }\n        \n        .swiper-slide {\n            display: block;\n        }\n        \n        .swiper-slide h2 {\n            margin-top: 2.8rem;\n        }\n        \n        .swiper-slide img {\n            max-height: 50%;\n            max-width: 80%;\n            margin: 60px 0 40px;\n            pointer-events: none;\n        }\n        \n        b {\n            font-weight: 500;\n        }\n        \n        p {\n            padding: 0 40px;\n            font-size: 14px;\n            line-height: 1.5;\n            color: var(--ion-color-step-600, #60646b);\n        }\n        \n        p b {\n            color: var(--ion-text-color, #000000);\n        }\n    </style>\n</body>");

/***/ }),

/***/ "./src/app/pages/welcome/welcome.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/welcome/welcome.page.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_5__["WelcomePage"]
    }
];
let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes)
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_5__["WelcomePage"]],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-image {\n  --background: none;\n  background: url('bg-1.jpg') no-repeat fixed center;\n  background-size: cover;\n}\n\np {\n  color: black;\n}\n\nion-card {\n  color: black;\n  background-color: white;\n  box-shadow: none !important;\n}\n\n.welcome_card {\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0px 0px 0px !important;\n  height: 85vw;\n}\n\n.to_bottom {\n  position: absolute;\n  width: 100%;\n  bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWx2YXJhZG8vZGVzYXJyb2xsby9lbmlhY2d0L2lvbmljL3hKb2JzL3hKb2JzV29ya2VyL3NyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvd2VsY29tZS9iZy0xLmpwZycpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG5wIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzpub25lICFpbXBvcnRhbnQ7XG59XG5cbi53ZWxjb21lX2NhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDg1dnc7XG59XG5cbi50b19ib3R0b217XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMTBweDtcbn0iLCIuYmFja2dyb3VuZC1pbWFnZSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3dlbGNvbWUvYmctMS5qcGdcIikgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxucCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWNhcmQge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi53ZWxjb21lX2NhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA4NXZ3O1xufVxuXG4udG9fYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.ts ***!
  \***********************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");







let WelcomePage = class WelcomePage {
    constructor(router, geolocation, ionicStorage, alertController, platform, androidPermissions) {
        this.router = router;
        this.geolocation = geolocation;
        this.ionicStorage = ionicStorage;
        this.alertController = alertController;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.step = 0;
        this.ionicStorage.remove("lastLatitude");
        this.ionicStorage.remove("lastLongitude");
    }
    ngOnInit() {
    }
    location() {
        this.geolocation.getCurrentPosition().then((res) => {
            console.log('getCurrentPosition', res);
            this.latitude = res.coords.latitude;
            this.longitude = res.coords.longitude;
            console.log(this.latitude + "," + this.longitude);
            this.ionicStorage.set('lastLatitude', this.latitude.toString());
            this.ionicStorage.set('lastLongitude', this.longitude.toString());
        });
    }
    camera() {
        if (this.platform.is('cordova')) {
            this.platform.ready().then(() => {
                this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(result => console.log('Has permission?', result.hasPermission), err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA));
                this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);
            });
        }
    }
    storage() {
        // this.imagePicker
        // .hasReadPermission()
        // .then((hasReadPermission) => {
        //   if (!hasReadPermission) {
        //     this.imagePicker
        //       .requestReadPermission()
        //       .then((result) => {
        //       })
        //       .catch((error) => {
        //         this.presentAlert("error al solicitar permisos: "+ error);
        //       });
        //   }
        // })
        // .catch((error) => this.presentAlert("error al consultar permisos: " +  error));
    }
    accept() {
        this.ionicStorage.set('welcomepage', true);
        this.router.navigate(['/login']);
    }
    presentAlert(messageAn) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Job Exchange",
                subHeader: "Search Engine",
                message: messageAn,
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    slideChanged() {
        // this.slider.lockSwipeToPrev(true).then((res2) => {
        //   this.slider.getActiveIndex().then((res) => {
        //     if (res === 2) {
        //       this.location();
        //     } else if (res === 3) {
        //       this.camera();
        //     } else if (res === 4) {
        //       this.storage();
        //     }
        //   });
        // });
    }
    next() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.step = this.step + 1;
            console.log('moviendose hacia: ' + this.step);
            if (this.step === 2) {
                yield this.location();
            }
            else if (this.step === 3) {
                yield this.camera();
            }
            else if (this.step === 4) {
                yield this.storage();
            }
            this.slider.lockSwipes(false);
            yield this.slider.slideTo(this.step);
            this.slider.lockSwipes(true);
        });
    }
    previous() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.step = this.step - 1;
            console.log('moviendose hacia: ' + this.step);
            this.slider.lockSwipes(false);
            yield this.slider.slideTo(this.step);
            this.slider.lockSwipes(true);
        });
    }
};
WelcomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('welcomeSlider', { static: true })
], WelcomePage.prototype, "slider", void 0);
WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./welcome.page.scss */ "./src/app/pages/welcome/welcome.page.scss")).default]
    })
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module-es2015.js.map