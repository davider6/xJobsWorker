(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-worker-edit-worker-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-worker/edit-worker.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-worker/edit-worker.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button (click)=\"returnHome()\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Actualización de Datos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div *ngIf=\"isLoaded\">\n        <ion-list class=\"ion-no-margin ion-no-padding\" class=\"animate__animated animate__fadeIn\">\n            <ion-item class=\"ion-text-center\">\n                <span class=\"primary_title\">\n                    Datos Generales\n                </span>\n            </ion-item>\n            <ion-item>\n                <ion-input [(ngModel)]=\"workerObje.fullName\" name=\"fullName\" type=\"latin-name\" inputmode=\"latin-name\" placeholder=\"Nombre Completo\" maxlength=\"60\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input [(ngModel)]=\"workerObje.email\" name=\"email\" type=\"email\" inputmode=\"email\" placeholder=\"Correo Electrónico\" maxlength=\"150\"></ion-input>\n            </ion-item>\n            <ion-item>                \n                <ion-input [(ngModel)]=\"workerObje.telephoneNumber\" name=\"workerObje.telephoneNumber\" type=\"text\" inputmode=\"tel\" placeholder=\"Número de Teléfono\" maxlength=\"50\"></ion-input>\n                <ion-input [(ngModel)]=\"workerObje.zipCode\" name=\"zipCode\" type=\"text\" inputmode=\"tel\" placeholder=\"Zip Code\" maxlength=\"10\"></ion-input>\n            </ion-item>\n            <br>\n            <ion-radio-group name=\"levelExperience\" [(ngModel)]=\"workerObje.englishLevel\">\n                <ion-list-header>\n                    <ion-label>Nivel de Experiencia:</ion-label>\n                </ion-list-header>\n                <ion-item>\n                    <ion-label>Media (0 a 5 años)</ion-label>\n                    <ion-radio slot=\"start\" value=\"N\"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Avanzada (5 a 10 años)</ion-label>\n                    <ion-radio slot=\"start\" value=\"B\"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Experto (10 años en adelante)</ion-label>\n                    <ion-radio slot=\"start\" value=\"A\"></ion-radio>\n                </ion-item>\n            </ion-radio-group>\n            <br>\n            <div class=\"ion-padding\">\n                <ion-button expand=\"block \" (click)=\"register()\" class=\"primary-btn\">Actualizar Datos Generales</ion-button>\n            </div>\n        </ion-list>\n\n        <ion-list>\n            <ion-item class=\"ion-text-center\">\n                <span class=\"primary_title\">\n                    Ocupaciones Asignadas\n                </span>\n            </ion-item>\n            <ion-item *ngFor=\"let wo of workerOccupations\">\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"wo.categoryImageOccupation\">\n                </ion-avatar>\n                <ion-label>\n                    <h2>{{wo.nameOccupation}}</h2>\n                    <h3>Rate: ${{wo.hourlyRate}}</h3>\n                </ion-label>\n                <ion-button class=\"secondary-btn\" fill=\"outline\" slot=\"end\" (click)=\"deleteOccupation(wo)\">Eliminar</ion-button>\n            </ion-item>\n        </ion-list>\n\n        <ion-list>\n            <ion-item color=\"primary\">\n                <ion-label >\n                    Asignar Nuevas Ocupaciones\n                </ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Categoria</ion-label>\n                <ion-select interface=\"action-sheet\" multiple=\"false\" (ionChange)=\"categoryChange()\" [(ngModel)]=\"selCategoryId\">\n                    <ion-select-option *ngFor=\"let category of categories\" value=\"{{ category.id }}\">{{ category.name }}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Sub Categoria</ion-label>\n                <ion-select interface=\"action-sheet\" multiple=\"false\" [(ngModel)]=\"selOccupationsId\">\n                    <ion-select-option *ngFor=\"let catOc of categoryOccupations\" value=\"{{ catOc.occupationId }}\">{{ catOc.occName }}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Tarifa por Hora</ion-label>\n                <ion-input class=\"ion-text-left\" [(ngModel)]=\"selRate\" name=\"rate\" placeholder=\"Tarifa por Hora\" inputmode=\"number\" type=\"number\"></ion-input>\n                <ion-button class=\"primary-btn\" slot=\"end\" (click)=\"saveOccupation()\">Agregar</ion-button>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/edit-worker/edit-worker.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-worker/edit-worker.module.ts ***!
  \*********************************************************/
/*! exports provided: EditWorkerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWorkerPageModule", function() { return EditWorkerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_worker_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-worker.page */ "./src/app/pages/edit-worker/edit-worker.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const routes = [
    {
        path: '',
        component: _edit_worker_page__WEBPACK_IMPORTED_MODULE_5__["EditWorkerPage"]
    }
];
let EditWorkerPageModule = class EditWorkerPageModule {
};
EditWorkerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ],
        declarations: [_edit_worker_page__WEBPACK_IMPORTED_MODULE_5__["EditWorkerPage"]]
    })
], EditWorkerPageModule);



/***/ }),

/***/ "./src/app/pages/edit-worker/edit-worker.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-worker/edit-worker.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtd29ya2VyL2VkaXQtd29ya2VyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/edit-worker/edit-worker.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/edit-worker/edit-worker.page.ts ***!
  \*******************************************************/
/*! exports provided: EditWorkerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWorkerPage", function() { return EditWorkerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");






let EditWorkerPage = class EditWorkerPage {
    constructor(alertController, router, ionicStorage, api) {
        this.alertController = alertController;
        this.router = router;
        this.ionicStorage = ionicStorage;
        this.api = api;
        this.isLoaded = false;
        this.categoryOccupations = [];
        this.clean();
        if (this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras
            && this.router.getCurrentNavigation().extras.state) {
            this.token = this.router.getCurrentNavigation().extras.state.token;
            this.workerObje = this.router.getCurrentNavigation().extras.state.worker;
            if (this.workerObje && this.workerObje.id) {
                this.api.getWorkerOcuppationsByWorkerId(this.workerObje.id, this.token)
                    .subscribe((resp) => {
                    this.workerOccupations = resp;
                    this.api
                        .getItemsByMethodCache('categories', null, this.token)
                        .subscribe((respCat) => {
                        this.categories = respCat;
                        this.categoryOccupations = [];
                        this.isLoaded = true;
                    }, (error2) => {
                        console.error(JSON.stringify(error2));
                    });
                });
            }
            else {
                this.router.navigate(['/home']);
            }
        }
        else {
            this.router.navigate(['/home']);
        }
    }
    ngOnInit() {
    }
    register() {
        if (!this.workerObje.fullName || this.workerObje.fullName == '') {
            this.presentAlert('No ha ingresado su nombre.', false);
            return;
        }
        else if (!this.workerObje.telephoneNumber || this.workerObje.telephoneNumber == '') {
            this.presentAlert('No ha ingresado el número de teléfono.', false);
            return;
        }
        else if (!this.workerObje.email || this.workerObje.email == '') {
            this.presentAlert('No ha ingresado un email válido.', false);
            return;
        }
        else if (!this.workerObje.zipCode || this.workerObje.zipCode == '') {
            this.presentAlert('No ha ingresado un zip code válido.', false);
            return;
        }
        else if (this.workerObje.englishLevel === null || this.workerObje.englishLevel === '') {
            this.presentAlert('No ha seleccionado el nivel de inglés.', false);
            return;
        }
        else {
            this.api.updateEntity('workers', this.workerObje.id, this.workerObje, this.token).subscribe(respv2 => {
                this.ionicStorage.set("workerObject", JSON.stringify(this.workerObje));
                this.presentAlert('Datos actualizados con exito.', true);
            }, error2 => {
                this.presentAlert('Ocurrio un error al actualizar datos.', false);
                console.error(JSON.stringify(error2));
            });
        }
    }
    saveOccupation() {
        if (!this.selCategoryId || this.selCategoryId == '') {
            this.presentAlert('Debe seleccionar categoria.', false);
            return;
        }
        else if (!this.selOccupationsId || this.selOccupationsId == '') {
            this.presentAlert('Debe seleccionar sub categoria.', false);
            return;
        }
        else if (!this.selRate || this.selRate < 1) {
            this.presentAlert('Debe ingresar tarifa valida.', false);
            return;
        }
        let found = false;
        if (this.workerOccupations && this.workerOccupations.length > 0) {
            for (const currentOc of this.workerOccupations) {
                if (currentOc.occupationId == Number(this.selOccupationsId)) {
                    found = true;
                }
            }
        }
        if (found) {
            this.presentAlert('Sub categoria ya asignada.', false);
            return;
        }
        let bodyParam = {
            "hourlyRate": this.selRate,
            "id": {
                "occupationId": this.selOccupationsId,
                "workerId": this.workerObje.id
            },
            "occupationId": this.selOccupationsId,
            "rate": 5,
            "status": true,
            "workerId": this.workerObje.id
        };
        this.api.postEventWithToken(bodyParam, `backend-services/workerOcuppations`, this.token).subscribe(respSave => {
            this.clean();
            this.presentAlert('Se ha asociado la ocupacion.', false);
            this.api.getWorkerOcuppationsByWorkerId(this.workerObje.id, this.token)
                .subscribe((resp) => {
                this.workerOccupations = resp;
            });
        }, (err) => {
            console.log('error en alta de ocupaciones', err);
        });
    }
    deleteOccupation(wo) {
        this.api.changeWorkerOccupationStatus(wo.workerId, wo.occupationId, false, wo.hourlyRate, this.token).subscribe((respUpd) => {
            this.presentAlert('Ocupacion eliminada.', false);
            this.api.getWorkerOcuppationsByWorkerId(this.workerObje.id, this.token)
                .subscribe((resp) => {
                this.workerOccupations = resp;
            });
        }, error2 => {
            this.presentAlert('Ocurrio un error al eliminar ocupacion.', false);
            console.error(JSON.stringify(error2));
        });
    }
    categoryChange() {
        this.loadOccupations(this.selCategoryId);
    }
    loadOccupations(categoryId) {
        this.selOccupationsId = null;
        this.categoryOccupations = [];
        const reqField = [
            { fieldName: 'categoryId', fieldValue: categoryId },
        ];
        this.api
            .getItemsByMethodCache('categoryOccupationsByCategoryId', reqField, this.token).subscribe((data) => {
            this.categoryOccupations = data;
        });
    }
    clean() {
        this.categoryOccupations = [];
        this.selCategoryId = null;
        this.selOccupationsId = null;
        this.selRate = null;
    }
    returnHome() {
        this.clean();
        this.router.navigate(['/home']);
    }
    presentAlert(messageStr, back) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Actualizacion de Datos',
                subHeader: 'Jobs Exchange',
                message: messageStr,
                buttons: ['OK']
            });
            yield alert.present();
            if (back) {
                this.router.navigate(['/home']);
            }
        });
    }
};
EditWorkerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
EditWorkerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-worker',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-worker.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-worker/edit-worker.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-worker.page.scss */ "./src/app/pages/edit-worker/edit-worker.page.scss")).default]
    })
], EditWorkerPage);



/***/ })

}]);
//# sourceMappingURL=pages-edit-worker-edit-worker-module-es2015.js.map