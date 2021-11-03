function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-mail-forgot-mail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-mail/forgot-mail.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-mail/forgot-mail.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesForgotMailForgotMailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"background-image ion-padding\" no-scroll>\n    <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"to-top\">\n            <ion-col>\n                <h2 class=\"ion-text-center\">\n                    <strong>Reset Password</strong>\n                </h2>\n            </ion-col>\n\n            <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n\n                <form class=\"ion-padding\" #myForm=\"ngForm\" (ngSubmit)=\"signInWithEmail(myForm)\">\n                    <ion-item class=\"first-input\">\n                        <ion-input ngModel name=\"password\" type=\"password\" placeholder=\"password\"></ion-input>\n                    </ion-item>\n                    <ion-item class=\"second-input\">\n                        <ion-input ngModel name=\"confirmation\" type=\"password\" placeholder=\"confirmation\"></ion-input>\n                    </ion-item>\n                    <div>\n                        <ion-button size-xs=\"8\" color=\"primary\" type=\"submit\" expand=\"block\">\n                            Change Password\n                        </ion-button>\n                    </div>\n                </form>\n            </ion-col>\n\n        </ion-row>\n    </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/forgot-mail/forgot-mail-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/forgot-mail/forgot-mail-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ForgotMailPageRoutingModule */

  /***/
  function srcAppPagesForgotMailForgotMailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotMailPageRoutingModule", function () {
      return ForgotMailPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _forgot_mail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgot-mail.page */
    "./src/app/pages/forgot-mail/forgot-mail.page.ts");

    var routes = [{
      path: '',
      component: _forgot_mail_page__WEBPACK_IMPORTED_MODULE_3__["ForgotMailPage"]
    }];

    var ForgotMailPageRoutingModule = function ForgotMailPageRoutingModule() {
      _classCallCheck(this, ForgotMailPageRoutingModule);
    };

    ForgotMailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgotMailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/forgot-mail/forgot-mail.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/forgot-mail/forgot-mail.module.ts ***!
    \*********************************************************/

  /*! exports provided: ForgotMailPageModule */

  /***/
  function srcAppPagesForgotMailForgotMailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotMailPageModule", function () {
      return ForgotMailPageModule;
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


    var _forgot_mail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgot-mail-routing.module */
    "./src/app/pages/forgot-mail/forgot-mail-routing.module.ts");
    /* harmony import */


    var _forgot_mail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot-mail.page */
    "./src/app/pages/forgot-mail/forgot-mail.page.ts");

    var ForgotMailPageModule = function ForgotMailPageModule() {
      _classCallCheck(this, ForgotMailPageModule);
    };

    ForgotMailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_mail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotMailPageRoutingModule"]],
      declarations: [_forgot_mail_page__WEBPACK_IMPORTED_MODULE_6__["ForgotMailPage"]]
    })], ForgotMailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/forgot-mail/forgot-mail.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/forgot-mail/forgot-mail.page.ts ***!
    \*******************************************************/

  /*! exports provided: ForgotMailPage */

  /***/
  function srcAppPagesForgotMailForgotMailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotMailPage", function () {
      return ForgotMailPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var ForgotMailPage = /*#__PURE__*/function () {
      function ForgotMailPage(router, apiService, alertController, ionicStorage) {
        _classCallCheck(this, ForgotMailPage);

        this.router = router;
        this.apiService = apiService;
        this.alertController = alertController;
        this.ionicStorage = ionicStorage;
        this.start();
      }

      _createClass(ForgotMailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "start",
        value: function start() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var stringObj;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.ionicStorage.get("workerObject");

                  case 2:
                    stringObj = _context.sent;
                    this.worker = JSON.parse(stringObj);
                    this.workerId = this.worker.id;

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Password Change',
                      subHeader: 'Jobs Exchange',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "signInWithEmail",
        value: function signInWithEmail(form) {
          var _this = this;

          if (form.value.password === '') {
            this.presentAlert("Debe ingresar contrase\xF1a nueva.");
          } else if (form.value.confirmation === '') {
            this.presentAlert("Debe ingresar confirmacion de contrase\xF1a.");
          } else if (form.value.password !== form.value.confirmation) {
            this.presentAlert("Las contrase\xF1as deben coincidir.");
          } else {
            console.log('WorkerID ' + this.worker + ' workerId ' + this.workerId);
            var passReset = {
              'password': form.value.password,
              'workerId': this.worker.id
            };
            console.log('passReset', passReset);
            this.apiService.postEvent(passReset, 'changePassword').subscribe(function (response) {
              if (response.isValid) {
                _this.presentAlert('Password Changed.');

                _this.router.navigate(['/home']);
              } else {
                _this.presentAlert(response.errorMessage);
              }
            }, function (error) {
              console.log('error en login', error);
            });
          }
        }
      }]);

      return ForgotMailPage;
    }();

    ForgotMailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }];
    };

    ForgotMailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-mail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forgot-mail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-mail/forgot-mail.page.html"))["default"]
    })], ForgotMailPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-forgot-mail-forgot-mail-module-es5.js.map