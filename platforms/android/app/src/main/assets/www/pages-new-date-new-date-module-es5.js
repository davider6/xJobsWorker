function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-date-new-date-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-date/new-date.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-date/new-date.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNewDateNewDatePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-buttons slot=\"start\">\n                <ion-back-button defaultHref=\"/\"></ion-back-button>\n            </ion-buttons>\n        </ion-buttons>\n        <ion-title>Solicitud Cambio de Fecha</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-item class=\".ion-justify-content-start\" lines=\"none\">\n                    <ion-avatar>\n                        <img src=\"{{orderDetails.occupationImage}}\" class=\".ion-align-self-center\" />\n                        <ion-grid>\n                            <ion-row class=\"ion-text-center\">\n                                <ion-col>\n                                    <ion-text color=\"dark\">\n                                        <b>\n                                          <font size=\"2\">{{orderDetails.occupationName}}</font>\n                                      </b>\n                                    </ion-text>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-avatar>\n                    <ion-label>\n                        <ion-text color=\"dark\">\n                            <b>\n                              <font size=\"1\">Nombre del solicitante</font>\n                          </b>\n                        </ion-text>\n                        <ion-text color=\"dark\">\n                            <p>{{ orderDetails.clientName}}</p>\n                        </ion-text>\n                        <ion-text color=\"dark\">\n                            <b>\n                              <font size=\"1\">Dirección</font>\n                          </b>\n                        </ion-text>\n                        <ion-text color=\"dark\">\n                            <p>{{orderDetails.address}}</p>\n                        </ion-text>\n\n                        <ion-text color=\"dark\">\n                            <b>\n                              <font size=\"1\">Fecha de la orden</font>\n                          </b>\n                        </ion-text>\n                        <ion-text color=\"dark\">\n                            <p>{{ orderDetails.workDate | date:'medium' }}</p>\n                        </ion-text>\n                        <ion-text color=\"dark\">\n                            <p>&nbsp;</p>\n                        </ion-text>\n                    </ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-toolbar style=\"margin-top: -5px;\" *ngIf=\"isLoaded\">\n        <div class=\"ion-padding\">\n            <ion-button expand=\"block\" type=\"submit\" class=\"primary-btn\" (click)=\"proposeNewDate()\">\n                <ion-icon name=\"calendar-number\"></ion-icon>Proponer nueva fecha\n            </ion-button>\n        </div>\n        <div>\n            <ion-card>\n                <ion-card-content>\n                    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n                        <ion-item>\n                            <ion-label>Seleccione fecha:</ion-label>\n                            <ion-datetime [(ngModel)]=\"proposedDate\" display-format=\"MMM DD YYYY\" picker-format=\"MM DD YYYY\" [min]=\"minDate\" [max]=\"maxDate\"></ion-datetime>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label>Seleccione Horario:</ion-label>\n                            <ion-datetime [(ngModel)]=\"proposedTime\" display-format=\"HH mm\" picker-format=\"HH:mm\"></ion-datetime>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label position=\"floating\">Justifique el cambio de fecha:</ion-label>\n                            <ion-textarea [(ngModel)]=\"description\" type=\"text\" inputmode=\"latin-name\" rows=\"4\"></ion-textarea>\n                        </ion-item>\n                    </ion-list>\n                </ion-card-content>\n            </ion-card>\n        </div>\n        <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n            <div *ngIf=\"orderDetails.status == 'In Progress'\">\n                <ion-fab-button (click)=\"setCloseOrder()\" color=\"xjobs\">\n                    <ion-icon name=\"flag\"></ion-icon>\n                </ion-fab-button>\n            </div>\n        </ion-fab> -->\n    </ion-toolbar>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/new-date/new-date-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/new-date/new-date-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: NewDatePageRoutingModule */

  /***/
  function srcAppPagesNewDateNewDateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewDatePageRoutingModule", function () {
      return NewDatePageRoutingModule;
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


    var _new_date_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-date.page */
    "./src/app/pages/new-date/new-date.page.ts");

    var routes = [{
      path: '',
      component: _new_date_page__WEBPACK_IMPORTED_MODULE_3__["NewDatePage"]
    }];

    var NewDatePageRoutingModule = function NewDatePageRoutingModule() {
      _classCallCheck(this, NewDatePageRoutingModule);
    };

    NewDatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewDatePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/new-date/new-date.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/new-date/new-date.module.ts ***!
    \***************************************************/

  /*! exports provided: NewDatePageModule */

  /***/
  function srcAppPagesNewDateNewDateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewDatePageModule", function () {
      return NewDatePageModule;
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


    var _new_date_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-date-routing.module */
    "./src/app/pages/new-date/new-date-routing.module.ts");
    /* harmony import */


    var _new_date_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-date.page */
    "./src/app/pages/new-date/new-date.page.ts");

    var NewDatePageModule = function NewDatePageModule() {
      _classCallCheck(this, NewDatePageModule);
    };

    NewDatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_date_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewDatePageRoutingModule"]],
      declarations: [_new_date_page__WEBPACK_IMPORTED_MODULE_6__["NewDatePage"]]
    })], NewDatePageModule);
    /***/
  },

  /***/
  "./src/app/pages/new-date/new-date.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/new-date/new-date.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNewDateNewDatePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  white-space: normal !important;\n  text-align: justify;\n  font-size: 10px;\n  line-height: 1.4;\n}\n\nion-item {\n  --border-radius: 1em;\n  --border-width: 0.1em !important;\n  margin-bottom: 0.3em;\n}\n\n.icon {\n  display: inline-block;\n  font-size: 12px;\n  vertical-align: middle;\n}\n\n.text {\n  font-size: 12px;\n  display: inline-block;\n  vertical-align: middle;\n  color: darkblue;\n}\n\n#map_canvas {\n  width: 100%;\n  height: 45vh;\n}\n\nion-avatar {\n  width: 90px;\n  height: 90px;\n  margin-left: 10px;\n  margin-right: 30px;\n  margin-top: -35px;\n  border: solid 3px #D95A2B;\n}\n\n.gallery {\n  width: 100%;\n  height: 48vh;\n}\n\nion-card {\n  display: flex;\n  flex-direction: column;\n  margin: 0 !important;\n  width: 500px;\n}\n\nion-content ion-card {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWx2YXJhZG8vZGVzYXJyb2xsby9lbmlhY2d0L2lvbmljL3hKb2JzL3hKb2JzV29ya2VyL3NyYy9hcHAvcGFnZXMvbmV3LWRhdGUvbmV3LWRhdGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9uZXctZGF0ZS9uZXctZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXctZGF0ZS9uZXctZGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwLjFlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGNvbG9yOiBkYXJrYmx1ZTtcbn1cblxuI21hcF9jYW52YXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDV2aDtcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAtMzVweDtcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjRDk1QTJCO1xufVxuXG4uZ2FsbGVyeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0OHZoO1xufVxuXG5pb24tY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA1MDBweDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xufSIsInAge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDFlbTtcbiAgLS1ib3JkZXItd2lkdGg6IDAuMWVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAuM2VtO1xufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogZGFya2JsdWU7XG59XG5cbiNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDV2aDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IC0zNXB4O1xuICBib3JkZXI6IHNvbGlkIDNweCAjRDk1QTJCO1xufVxuXG4uZ2FsbGVyeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4dmg7XG59XG5cbmlvbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/new-date/new-date.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/new-date/new-date.page.ts ***!
    \*************************************************/

  /*! exports provided: NewDatePage */

  /***/
  function srcAppPagesNewDateNewDatePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewDatePage", function () {
      return NewDatePage;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var NewDatePage = /*#__PURE__*/function () {
      function NewDatePage(apiService, router, plt, alertController, nav, loadingController, alertCtrl, datePipe) {
        _classCallCheck(this, NewDatePage);

        this.apiService = apiService;
        this.router = router;
        this.plt = plt;
        this.alertController = alertController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.datePipe = datePipe;
        this.loadingSpin = null;
        this.isTemp = "false";
        this.ubicacion = false;
        this.isLoaded = false;
        this.isPublicOrder = false;
        this.isLoaded = true;
        this.reset();

        if (this.router.getCurrentNavigation().extras.state) {
          this.orderDetails = this.router.getCurrentNavigation().extras.state.order;
          this.token = this.router.getCurrentNavigation().extras.state.token;
          this.workerId = this.router.getCurrentNavigation().extras.state.workerId;

          if (this.orderDetails.publicWorksId && this.orderDetails.publicWorksId > 0) {
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

      _createClass(NewDatePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "reset",
        value: function reset() {
          var tmpDate = new Date();
          tmpDate = new Date(tmpDate.getTime() + 1000 * 60 * 60 * 24);
          this.minDate = this.datePipe.transform(tmpDate, "yyyy-MM-dd");
          tmpDate = new Date(tmpDate.getTime() + 60 * (1000 * 60 * 60 * 24));
          this.maxDate = this.datePipe.transform(tmpDate, "yyyy-MM-dd");
          this.isLoaded = true;
        }
      }, {
        key: "proposeNewDate",
        value: function proposeNewDate() {
          if (!this.proposedDate) {
            this.presentAlert("No ha ingresado fecha.", false);
          } else if (!this.proposedTime) {
            this.presentAlert("No ha ingresado horario.", false);
          } else if (!this.description) {
            this.presentAlert("No ha ingresado comentario.", false);
          } else {
            console.log('proposedDate ' + this.proposedDate + ' proposedTime ' + this.proposedTime.substr(11, 5));
            this.orderStartAsync();
          }
        }
      }, {
        key: "orderStartAsync",
        value: function orderStartAsync() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var dateFormatted, reqField;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    dateFormatted = this.formatDate(this.proposedDate);
                    reqField = [{
                      fieldName: "workOrderId",
                      fieldValue: this.orderDetails.orderId + ""
                    }, {
                      fieldName: "workerId",
                      fieldValue: this.workerId
                    }, {
                      fieldName: "status",
                      fieldValue: 'CHANGE_DATE'
                    }, {
                      fieldName: "isPublicOrder",
                      fieldValue: this.isPublicOrder + ""
                    }, {
                      fieldName: "publicOrderId",
                      fieldValue: this.orderDetails.publicWorksId + ""
                    }, {
                      fieldName: "date",
                      fieldValue: dateFormatted + ""
                    }, {
                      fieldName: "time",
                      fieldValue: dateFormatted + ""
                    }, {
                      fieldName: "observation",
                      fieldValue: this.description + ""
                    }];
                    console.log('Request ' + JSON.stringify(reqField));
                    this.processOrder(reqField);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(message, back) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: "Job Exchange",
                      subHeader: "Solicitud de cambio de fecha enviado",
                      message: message,
                      buttons: ["OK"]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                    if (back) {
                      this.nav.navigateForward("/home");
                    }

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          var d = new Date(date);
          var month = '' + (d.getMonth() + 1);
          var day = '' + d.getDate();
          var year = d.getFullYear();
          var hours = d.getHours().toString();
          var minute = d.getMinutes().toString();
          var seconds = d.getSeconds().toString();

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

          return year + "-" + month + "-" + day + " " + hours + ":" + minute + ":" + seconds;
        }
      }, {
        key: "processOrder",
        value: function processOrder(reqField) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this = this;

            var mensaje;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create({
                      message: "Validando el usuario..."
                    });

                  case 2:
                    this.loadingSpin = _context4.sent;
                    _context4.next = 5;
                    return this.loadingSpin.present();

                  case 5:
                    //  console.log('reqField',reqField);
                    mensaje = "";
                    this.apiService.putItemsByMethod("woAssigned", "acceptOrRejectOrders", reqField, this.token).toPromise().then(function (result) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                console.log('result', result);

                                if (result === -1) {
                                  mensaje = "Alguien más acepto esta orden con anterioridad.";
                                } else if (result === 1) {
                                  mensaje = "Orden actualizada exitosamente.";
                                }

                                if (this.loadingSpin != null) {
                                  this.loadingSpin.dismiss();
                                }

                                console.log(mensaje);
                                _context3.next = 6;
                                return this.alertCtrl.create({
                                  header: "Job Exchange",
                                  subHeader: "Solicitud de cambio de fecha enviado",
                                  message: 'cambio de fecha de orden registrado',
                                  buttons: [{
                                    text: "OK",
                                    role: "cancel",
                                    cssClass: "secondary",
                                    handler: function handler() {
                                      console.log("Confirm OK");
                                    }
                                  }]
                                });

                              case 6:
                                alert = _context3.sent;
                                _context3.next = 9;
                                return alert.present();

                              case 9:
                                this.router.navigate(['/home']);

                              case 10:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    })["catch"](function (e) {
                      console.log("error,", e);

                      if (_this.loadingSpin != null) {
                        _this.loadingSpin.dismiss();
                      }
                    });

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return NewDatePage;
    }();

    NewDatePage.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
      }];
    };

    NewDatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-date',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./new-date.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-date/new-date.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./new-date.page.scss */
      "./src/app/pages/new-date/new-date.page.scss"))["default"]]
    })], NewDatePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-new-date-new-date-module-es5.js.map