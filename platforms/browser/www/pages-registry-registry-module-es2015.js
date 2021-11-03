(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registry-registry-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registry/registry.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registry/registry.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div class=\"ion-text-center\">\n        <img src=\"../../../assets/workerLogo.png\" class=\"onboarding-image\"/>\n        <br><br>\n        <span class=\"primary_title\">Complete su información</span>        \n    </div>\n    <br>\n    <form #form=\"ngForm\" (ngSubmit)=\"register(form)\">\n        <div *ngIf=\"user\">\n            <ion-avatar class=\"image-center\">\n                <!-- <img src=\"\"> -->\n                <img [src]=\"user.imagen\">\n            </ion-avatar>\n            <br>\n        </div>\n\n        <ion-list class=\"ion-no-margin ion-no-padding\" class=\"animate__animated animate__fadeIn\">\n            <ion-item>\n                <ion-input [(ngModel)]=\"fullName\" name=\"fullName\" type=\"latin-name\" inputmode=\"latin-name\" placeholder=\"Nombre Completo\" maxlength=\"60\"></ion-input>\n            </ion-item>            \n            <ion-item>\n                <ion-input [(ngModel)]=\"email\" name=\"email\" type=\"email\" inputmode=\"email\" placeholder=\"Correo Electrónico\" maxlength=\"150\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input ngModel name=\"telephoneNumber\" type=\"text\" inputmode=\"tel\" placeholder=\"Número de Teléfono\" maxlength=\"50\"></ion-input>\n                <ion-input ngModel name=\"zipCode\" type=\"text\" inputmode=\"tel\" placeholder=\"Zip Code\" maxlength=\"10\"></ion-input>\n            </ion-item>\n            <!-- <br>\n            <ion-radio-group name=\"levelExperience\" [(ngModel)]=\"experience\">\n                <ion-list-header>\n                    <ion-label>Nivel de Experiencia:</ion-label>\n                </ion-list-header>\n                <ion-item>\n                    <ion-label>Media (0 a 5 años)</ion-label>\n                    <ion-radio slot=\"start\" value=\"N\"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Avanzada (5 a 10 años)</ion-label>\n                    <ion-radio slot=\"start\" value=\"B\"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Experto (10 años en adelante)</ion-label>\n                    <ion-radio slot=\"start\" value=\"A\"></ion-radio>\n                </ion-item>\n            </ion-radio-group> -->\n            <br>\n            <ion-item *ngIf=\"!user\">\n                <ion-input ngModel name=\"workerPassword\" type=\"password\" inputmode=\"latin-name\" placeholder=\"Contraseña\"></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"!user\">\n                <ion-input ngModel name=\"workerPassword2\" type=\"password\" inputmode=\"latin-name\" placeholder=\"Confirmar Contraseña\"></ion-input>\n            </ion-item>\n        </ion-list>\n\n        <input [(ngModel)]=\"experience\" type=\"hidden\" name=\"levelExperience\" id=\"levelExperience\">\n        <input [(ngModel)]=\"status\" type=\"hidden\" name=\"status\" id=\"status\">\n        <input [(ngModel)]=\"imgProfile\" type=\"hidden\" name=\"profileImage\" id=\"profileImage\">\n\n        <div class=\"ion-padding\">\n            <ion-button expand=\"block\" type=\"submit\" class=\"primary-btn\">Crear Registro</ion-button>\n        </div>\n    </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/models/worker.ts":
/*!**********************************!*\
  !*** ./src/app/models/worker.ts ***!
  \**********************************/
/*! exports provided: Worker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Worker", function() { return Worker; });
class Worker {
    constructor(id, fullName, birthDate, gender, nationalityId, idType, idNumber, address, email, telephoneNumber, itinNumber, hasVehicle, profileImage, latitude, longitude, zipCode, englishLevel, likes, reviews, status, workerPassword, type, externalId, changePassword, firstLogin) {
        this.id = id;
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.gender = gender;
        this.nationalityId = nationalityId;
        this.idType = idType;
        this.idNumber = idNumber;
        this.address = address;
        this.email = email;
        this.telephoneNumber = telephoneNumber;
        this.itinNumber = itinNumber;
        this.hasVehicle = hasVehicle;
        this.profileImage = profileImage;
        this.latitude = latitude;
        this.longitude = longitude;
        this.zipCode = zipCode;
        this.englishLevel = englishLevel;
        this.likes = likes;
        this.reviews = reviews;
        this.status = status;
        this.workerPassword = workerPassword;
        this.type = type;
        this.externalId = externalId;
        this.changePassword = changePassword;
        this.firstLogin = firstLogin;
    }
}


/***/ }),

/***/ "./src/app/pages/registry/registry-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/registry/registry-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegistryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryPageRoutingModule", function() { return RegistryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registry.page */ "./src/app/pages/registry/registry.page.ts");




const routes = [
    {
        path: '',
        component: _registry_page__WEBPACK_IMPORTED_MODULE_3__["RegistryPage"]
    }
];
let RegistryPageRoutingModule = class RegistryPageRoutingModule {
};
RegistryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/registry/registry.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/registry/registry.module.ts ***!
  \***************************************************/
/*! exports provided: RegistryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryPageModule", function() { return RegistryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registry_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registry-routing.module */ "./src/app/pages/registry/registry-routing.module.ts");
/* harmony import */ var _registry_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registry.page */ "./src/app/pages/registry/registry.page.ts");








let RegistryPageModule = class RegistryPageModule {
};
RegistryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _registry_routing_module__WEBPACK_IMPORTED_MODULE_6__["RegistryPageRoutingModule"]
        ],
        declarations: [_registry_page__WEBPACK_IMPORTED_MODULE_7__["RegistryPage"]],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]]
    })
], RegistryPageModule);



/***/ }),

/***/ "./src/app/pages/registry/registry.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/registry/registry.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image-center {\n  margin: 0 auto;\n  min-width: 70px;\n  min-height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWx2YXJhZG8vZGVzYXJyb2xsby9lbmlhY2d0L2lvbmljL3hKb2JzL3hKb2JzV29ya2VyL3NyYy9hcHAvcGFnZXMvcmVnaXN0cnkvcmVnaXN0cnkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3RyeS9yZWdpc3RyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3RyeS9yZWdpc3RyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtY2VudGVyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtaW4td2lkdGg6IDcwcHg7XG4gICAgbWluLWhlaWdodDogNzBweDtcbn0iLCIuaW1hZ2UtY2VudGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1pbi13aWR0aDogNzBweDtcbiAgbWluLWhlaWdodDogNzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/registry/registry.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/registry/registry.page.ts ***!
  \*************************************************/
/*! exports provided: RegistryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryPage", function() { return RegistryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _models_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/worker */ "./src/app/models/worker.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");









let RegistryPage = class RegistryPage {
    constructor(authService, alertController, router, api, ionicStorage, geolocation) {
        this.authService = authService;
        this.alertController = alertController;
        this.router = router;
        this.api = api;
        this.ionicStorage = ionicStorage;
        this.geolocation = geolocation;
        this.GOOGLE = 'G';
        this.FACEBOOK = 'F';
        this.EMAIL = 'N';
        this.experience = 'N';
        this.status = true;
        this.workerType = "N";
        this.imgProfile = "";
        this.externalId = "";
        this.automaticClose = false;
        if (authService.usuario.email) {
            this.user = authService.usuario;
            this.fullName = this.user.nombre;
            this.email = this.user.email;
            this.workerType = ((this.user.provider === 'google') ? this.GOOGLE : this.FACEBOOK);
            this.imgProfile = this.user.imagen;
            this.externalId = this.user.uid;
        }
        this.obtieneCoordenadas();
    }
    obtieneCoordenadas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.latitude = yield this.ionicStorage.get("lastLatitude");
            this.longitude = yield this.ionicStorage.get("lastLongitude");
            if (this.latitude == null || this.longitude == null) {
                this.geolocation.getCurrentPosition().then((res) => {
                    this.latitude = res.coords.latitude.toString();
                    this.longitude = res.coords.longitude.toString();
                    this.ionicStorage.set('lastLatitude', this.latitude);
                    this.ionicStorage.set('lastLongitude', this.latitude);
                });
            }
        });
    }
    ngOnInit() { }
    register(form) {
        //console.log(form.value);
        if (!this.fullName || this.fullName == '') {
            this.presentAlert('No ha ingresado su nombre.', false);
        }
        else if (form.value.telephoneNumber == '') {
            this.presentAlert('No ha ingresado el número de teléfono.', false);
        }
        else if (!this.email || this.email == '') {
            this.presentAlert('No ha ingresado un email válido.', false);
        }
        else if (form.value.zipCode == '') {
            this.presentAlert('No ha ingresado un zip code válido.', false);
        }
        else if (this.experience === null || this.experience === '') {
            this.presentAlert('No ha seleccionado el nivel de inglés.', false);
        }
        else if (form.value.workerPassword === null || form.value.workerPassword === '') {
            this.presentAlert('No ha ingresado una contraseña.', false);
        }
        else if (form.value.workerPassword2 === null || form.value.workerPassword2 === '') {
            this.presentAlert('No ha confirmado la contraseña.', false);
        }
        else if (form.value.workerPassword !== form.value.workerPassword2) {
            this.presentAlert('La contraseña ingresada no coincide.', false);
        }
        else {
            if (this.workerType === this.EMAIL)
                this.status = false;
            let worker = new _models_worker__WEBPACK_IMPORTED_MODULE_6__["Worker"](0, //id
            this.fullName, //fullName
            new Date(), //birthDate
            'M', //gender
            1, //nationalityId
            1, //idType
            '', //idNumber
            '', //address
            this.email, //email
            form.value.telephoneNumber, //telephoneNumber
            '', //itinNumber
            false, //hasVehicle
            this.imgProfile, //profileImage
            this.latitude, //latitude
            this.longitude, //longitude
            form.value.zipCode, //zipCode
            this.experience, //englishLevel
            '', //likes
            0, //reviews
            this.status, //status
            ((this.workerType === this.EMAIL) ? form.value.workerPassword : ''), //workerPassword
            this.workerType, //type
            this.externalId, //externalId
            false, //changePassword
            (this.workerType === this.EMAIL) //firstLogin
            );
            this.api.postEvent(worker, 'backend-services/workers')
                .subscribe((result) => {
                console.log('registry', result);
                if (this.workerType === this.EMAIL) {
                    this.presentAlert(`Usuario registrado exitosamente. Un correo con instrucciones le será enviado a su cuenta ${this.email}`, false);
                    this.api.cleanStorage();
                    this.ionicStorage.clear();
                    this.ionicStorage.set('welcomepage', true);
                    this.router.navigate(['/login']);
                }
                else {
                    //this.presentAlert( 'Worker registrado exitosamente.', true );
                    let auth = {
                        'entity': 'W',
                        'type': this.workerType,
                        'username': this.externalId
                    };
                    this.api.postEvent(auth, 'auth')
                        .subscribe(login => {
                        // console.log('login', login);              
                        this.api.saveStorage('token', login['token']);
                        this.api.saveStorage('userId', login['clientId']);
                        this.api.getEvent(`workers/${login['clientId']}`, login['token']).subscribe((usr) => {
                            this.api.saveStorage('workerObject', JSON.stringify(usr));
                            this.router.navigate(['/categories']);
                        }, (err) => {
                            console.log('Error obteniendo información del usuario');
                        });
                    }, error => {
                        console.log('error en login', error);
                    });
                }
            }, (err) => {
                console.log('Error registrando worker', err);
                this.presentAlert('Error registrando worker.', false);
            });
        }
    }
    presentAlert(message, back) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Registro Nuevo',
                subHeader: 'Jobs Exchange',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
            if (back)
                this.router.navigate(['/home']);
        });
    }
};
RegistryPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] }
];
RegistryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registry',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registry.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registry/registry.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registry.page.scss */ "./src/app/pages/registry/registry.page.scss")).default]
    })
], RegistryPage);



/***/ })

}]);
//# sourceMappingURL=pages-registry-registry-module-es2015.js.map