function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-worker-edit-worker-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-worker/edit-worker.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-worker/edit-worker.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEditWorkerEditWorkerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button (click)=\"returnHome()\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Actualización de Datos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div *ngIf=\"isLoaded\">\n        <ion-list class=\"ion-no-margin ion-no-padding\" class=\"animate__animated animate__fadeIn\">\n            <ion-item class=\"ion-text-center\">\n                <span class=\"primary_title\">\n                    Datos Generales\n                </span>\n            </ion-item>\n            <ion-item>\n                <ion-input [(ngModel)]=\"workerObje.fullName\" name=\"fullName\" type=\"latin-name\" inputmode=\"latin-name\" placeholder=\"Nombre Completo\" maxlength=\"60\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input [(ngModel)]=\"workerObje.email\" name=\"email\" type=\"email\" inputmode=\"email\" placeholder=\"Correo Electrónico\" maxlength=\"150\"></ion-input>\n            </ion-item>\n            <ion-item>                \n                <ion-input [(ngModel)]=\"workerObje.telephoneNumber\" name=\"workerObje.telephoneNumber\" type=\"text\" inputmode=\"tel\" placeholder=\"Número de Teléfono\" maxlength=\"50\"></ion-input>\n                <ion-input [(ngModel)]=\"workerObje.zipCode\" name=\"zipCode\" type=\"text\" inputmode=\"tel\" placeholder=\"Zip Code\" maxlength=\"10\"></ion-input>\n            </ion-item>\n            <br>\n            <ion-radio-group name=\"levelExperience\" [(ngModel)]=\"workerObje.englishLevel\">\n                <ion-list-header>\n                    <ion-label>Nivel de Experiencia:</ion-label>\n                </ion-list-header>\n                <ion-item>\n                    <ion-label>Media (0 a 5 años)</ion-label>\n                    <ion-radio slot=\"start\" value=\"N\"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Avanzada (5 a 10 años)</ion-label>\n                    <ion-radio slot=\"start\" value=\"B\"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Experto (10 años en adelante)</ion-label>\n                    <ion-radio slot=\"start\" value=\"A\"></ion-radio>\n                </ion-item>\n            </ion-radio-group>\n            <br>\n            <div class=\"ion-padding\">\n                <ion-button expand=\"block \" (click)=\"register()\" class=\"primary-btn\">Actualizar Datos Generales</ion-button>\n            </div>\n        </ion-list>\n\n        <ion-list>\n            <ion-item class=\"ion-text-center\">\n                <span class=\"primary_title\">\n                    Ocupaciones Asignadas\n                </span>\n            </ion-item>\n            <ion-item *ngFor=\"let wo of workerOccupations\">\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"wo.categoryImageOccupation\">\n                </ion-avatar>\n                <ion-label>\n                    <h2>{{wo.nameOccupation}}</h2>\n                    <h3>Rate: ${{wo.hourlyRate}}</h3>\n                </ion-label>\n                <ion-button class=\"secondary-btn\" fill=\"outline\" slot=\"end\" (click)=\"deleteOccupation(wo)\">Eliminar</ion-button>\n            </ion-item>\n        </ion-list>\n\n        <ion-list>\n            <ion-item color=\"primary\">\n                <ion-label >\n                    Asignar Nuevas Ocupaciones\n                </ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Categoria</ion-label>\n                <ion-select interface=\"action-sheet\" multiple=\"false\" (ionChange)=\"categoryChange()\" [(ngModel)]=\"selCategoryId\">\n                    <ion-select-option *ngFor=\"let category of categories\" value=\"{{ category.id }}\">{{ category.name }}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Sub Categoria</ion-label>\n                <ion-select interface=\"action-sheet\" multiple=\"false\" [(ngModel)]=\"selOccupationsId\">\n                    <ion-select-option *ngFor=\"let catOc of categoryOccupations\" value=\"{{ catOc.occupationId }}\">{{ catOc.occName }}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Tarifa por Hora</ion-label>\n                <ion-input class=\"ion-text-left\" [(ngModel)]=\"selRate\" name=\"rate\" placeholder=\"Tarifa por Hora\" inputmode=\"number\" type=\"number\"></ion-input>\n                <ion-button class=\"primary-btn\" slot=\"end\" (click)=\"saveOccupation()\">Agregar</ion-button>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/edit-worker/edit-worker.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/edit-worker/edit-worker.module.ts ***!
    \*********************************************************/

  /*! exports provided: EditWorkerPageModule */

  /***/
  function srcAppPagesEditWorkerEditWorkerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditWorkerPageModule", function () {
      return EditWorkerPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _edit_worker_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-worker.page */
    "./src/app/pages/edit-worker/edit-worker.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _edit_worker_page__WEBPACK_IMPORTED_MODULE_5__["EditWorkerPage"]
    }];

    var EditWorkerPageModule = function EditWorkerPageModule() {
      _classCallCheck(this, EditWorkerPageModule);
    };

    EditWorkerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
      declarations: [_edit_worker_page__WEBPACK_IMPORTED_MODULE_5__["EditWorkerPage"]]
    })], EditWorkerPageModule);
    /***/
  },

  /***/
  "./src/app/pages/edit-worker/edit-worker.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/edit-worker/edit-worker.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEditWorkerEditWorkerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtd29ya2VyL2VkaXQtd29ya2VyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/edit-worker/edit-worker.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/edit-worker/edit-worker.page.ts ***!
    \*******************************************************/

  /*! exports provided: EditWorkerPage */

  /***/
  function srcAppPagesEditWorkerEditWorkerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditWorkerPage", function () {
      return EditWorkerPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");

    var EditWorkerPage = /*#__PURE__*/function () {
      function EditWorkerPage(alertController, router, ionicStorage, api) {
        var _this = this;

        _classCallCheck(this, EditWorkerPage);

        this.alertController = alertController;
        this.router = router;
        this.ionicStorage = ionicStorage;
        this.api = api;
        this.isLoaded = false;
        this.categoryOccupations = [];
        this.clean();

        if (this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras && this.router.getCurrentNavigation().extras.state) {
          this.token = this.router.getCurrentNavigation().extras.state.token;
          this.workerObje = this.router.getCurrentNavigation().extras.state.worker;

          if (this.workerObje && this.workerObje.id) {
            this.api.getWorkerOcuppationsByWorkerId(this.workerObje.id, this.token).subscribe(function (resp) {
              _this.workerOccupations = resp;

              _this.api.getItemsByMethodCache('categories', null, _this.token).subscribe(function (respCat) {
                _this.categories = respCat;
                _this.categoryOccupations = [];
                _this.isLoaded = true;
              }, function (error2) {
                console.error(JSON.stringify(error2));
              });
            });
          } else {
            this.router.navigate(['/home']);
          }
        } else {
          this.router.navigate(['/home']);
        }
      }

      _createClass(EditWorkerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          var _this2 = this;

          if (!this.workerObje.fullName || this.workerObje.fullName == '') {
            this.presentAlert('No ha ingresado su nombre.', false);
            return;
          } else if (!this.workerObje.telephoneNumber || this.workerObje.telephoneNumber == '') {
            this.presentAlert('No ha ingresado el número de teléfono.', false);
            return;
          } else if (!this.workerObje.email || this.workerObje.email == '') {
            this.presentAlert('No ha ingresado un email válido.', false);
            return;
          } else if (!this.workerObje.zipCode || this.workerObje.zipCode == '') {
            this.presentAlert('No ha ingresado un zip code válido.', false);
            return;
          } else if (this.workerObje.englishLevel === null || this.workerObje.englishLevel === '') {
            this.presentAlert('No ha seleccionado el nivel de inglés.', false);
            return;
          } else {
            this.api.updateEntity('workers', this.workerObje.id, this.workerObje, this.token).subscribe(function (respv2) {
              _this2.ionicStorage.set("workerObject", JSON.stringify(_this2.workerObje));

              _this2.presentAlert('Datos actualizados con exito.', true);
            }, function (error2) {
              _this2.presentAlert('Ocurrio un error al actualizar datos.', false);

              console.error(JSON.stringify(error2));
            });
          }
        }
      }, {
        key: "saveOccupation",
        value: function saveOccupation() {
          var _this3 = this;

          if (!this.selCategoryId || this.selCategoryId == '') {
            this.presentAlert('Debe seleccionar categoria.', false);
            return;
          } else if (!this.selOccupationsId || this.selOccupationsId == '') {
            this.presentAlert('Debe seleccionar sub categoria.', false);
            return;
          } else if (!this.selRate || this.selRate < 1) {
            this.presentAlert('Debe ingresar tarifa valida.', false);
            return;
          }

          var found = false;

          if (this.workerOccupations && this.workerOccupations.length > 0) {
            var _iterator = _createForOfIteratorHelper(this.workerOccupations),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var currentOc = _step.value;

                if (currentOc.occupationId == Number(this.selOccupationsId)) {
                  found = true;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          if (found) {
            this.presentAlert('Sub categoria ya asignada.', false);
            return;
          }

          var bodyParam = {
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
          this.api.postEventWithToken(bodyParam, "backend-services/workerOcuppations", this.token).subscribe(function (respSave) {
            _this3.clean();

            _this3.presentAlert('Se ha asociado la ocupacion.', false);

            _this3.api.getWorkerOcuppationsByWorkerId(_this3.workerObje.id, _this3.token).subscribe(function (resp) {
              _this3.workerOccupations = resp;
            });
          }, function (err) {
            console.log('error en alta de ocupaciones', err);
          });
        }
      }, {
        key: "deleteOccupation",
        value: function deleteOccupation(wo) {
          var _this4 = this;

          this.api.changeWorkerOccupationStatus(wo.workerId, wo.occupationId, false, wo.hourlyRate, this.token).subscribe(function (respUpd) {
            _this4.presentAlert('Ocupacion eliminada.', false);

            _this4.api.getWorkerOcuppationsByWorkerId(_this4.workerObje.id, _this4.token).subscribe(function (resp) {
              _this4.workerOccupations = resp;
            });
          }, function (error2) {
            _this4.presentAlert('Ocurrio un error al eliminar ocupacion.', false);

            console.error(JSON.stringify(error2));
          });
        }
      }, {
        key: "categoryChange",
        value: function categoryChange() {
          this.loadOccupations(this.selCategoryId);
        }
      }, {
        key: "loadOccupations",
        value: function loadOccupations(categoryId) {
          var _this5 = this;

          this.selOccupationsId = null;
          this.categoryOccupations = [];
          var reqField = [{
            fieldName: 'categoryId',
            fieldValue: categoryId
          }];
          this.api.getItemsByMethodCache('categoryOccupationsByCategoryId', reqField, this.token).subscribe(function (data) {
            _this5.categoryOccupations = data;
          });
        }
      }, {
        key: "clean",
        value: function clean() {
          this.categoryOccupations = [];
          this.selCategoryId = null;
          this.selOccupationsId = null;
          this.selRate = null;
        }
      }, {
        key: "returnHome",
        value: function returnHome() {
          this.clean();
          this.router.navigate(['/home']);
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(messageStr, back) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Actualizacion de Datos',
                      subHeader: 'Jobs Exchange',
                      message: messageStr,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                    if (back) {
                      this.router.navigate(['/home']);
                    }

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return EditWorkerPage;
    }();

    EditWorkerPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }];
    };

    EditWorkerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-worker',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-worker.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-worker/edit-worker.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-worker.page.scss */
      "./src/app/pages/edit-worker/edit-worker.page.scss"))["default"]]
    })], EditWorkerPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-edit-worker-edit-worker-module-es5.js.map