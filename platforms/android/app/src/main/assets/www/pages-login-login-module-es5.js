function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"background-image ion-padding\" no-scroll overflow-scroll=\"false\">\n    <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"to-top\">\n            <ion-col>\n                <h2 class=\"ion-text-center\">\n                    <span class=\"primary_title\">Benvenido a XJobs</span>\n                </h2>\n            </ion-col>\n\n            <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n\n                <form class=\"ion-padding\" #myForm=\"ngForm\" (ngSubmit)=\"signInWithEmail(myForm)\">\n                    <ion-item class=\"first-input\">\n                        <ion-input ngModel name=\"email\" type=\"email\" placeholder=\"Correo electrónico\"></ion-input>\n                    </ion-item>\n                    <ion-item class=\"second-input\">\n                        <ion-input ngModel name=\"password\" type=\"password\" placeholder=\"Contraseña\"></ion-input>\n                    </ion-item>\n                    <div>\n                        <ion-col class=\"ion-text-center\" size-md=\"12\" size-sm=\"12\" size-lg=\"12\" size-xs=\"12\">\n                            <p>\n                                <ion-text style=\"color: #fff; float: left;\">\n                                    <span (click)=\"presentActionSheet()\">\n                                        <strong>Registrate aquí</strong>\n                                    </span>\n                                </ion-text>\n                                <ion-text style=\"color: #fff; float: right;\">\n                                    <strong (click)=\"forgotPasswordMail($event)\">\n                                  Olvid&eacute; mi clave\n                                    </strong>\n                                </ion-text>\n                            </p>\n                        </ion-col>    \n                    </div>\n                    <br><br><br>\n                    <div>\n                        <ion-button size-xs=\"8\" class=\"primary-btn\" type=\"submit\" expand=\"block\">\n                            Iniciar Sesión\n                        </ion-button>\n                    </div>\n                </form>\n            </ion-col>\n\n            <ion-col size=\"12\">\n                <div class=\"ion-text-center\">\n                    <ion-text style=\"color: #fff;\">                        \n                            <strong>o inicia sesión con</strong>\n                    </ion-text>\n                </div>\n                <div class=\"ion-padding ion-text-center\">\n                    <ion-button (click)=\"signInWithGoogle()\" class=\"secondary-btn icon-only\" fill=\"outline\">\n                        <ion-icon slot=\"icon-only\" color=\"google\" name=\"logo-google\"></ion-icon>\n                    </ion-button>\n                    <ion-button (click)=\"signInWithFacebook()\" class=\"secondary-btn\" fill=\"outline\">\n                        <ion-icon slot=\"icon-only\" color=\"facebook\" name=\"logo-facebook\"></ion-icon>\n                    </ion-button>\n\n                </div>\n            </ion-col>\n            <ion-col>\n                \n            </ion-col>\n\n            <!-- <div *ngIf=\"invalidUser\" class=\"ion-padding\">\n                <ion-item>\n                    <ion-label color=\"danger\" class=\"ion-text-wrap\">\n                        Correo o contraseña inválidos\n                    </ion-label>\n                </ion-item>\n            </div> -->\n        </ion-row>\n    </ion-grid>\n\n    <!-- <ion-row class=\"to-button ion-text-center\" style=\"width:100%;\">\n        <ion-col size-md=\"12\" size-sm=\"12\" size-lg=\"12\" size-xs=\"12\">\n            <p>\n                <strong>\n              You don't have an account?\n                </strong>\n                <span (click)=\"presentActionSheet()\">\n                    Sign Up\n                </span>\n            </p>\n        </ion-col>\n        <ion-col size-md=\"12\" size-sm=\"12\" size-lg=\"12\" size-xs=\"12\">\n            <p>\n                <strong (click)=\"forgotPasswordMail()\">\n              Forgot password?\n                </strong>\n            </p>\n        </ion-col>\n    </ion-row> -->\n\n    <!-- <ion-menu side=\"end\" type=\"push\" contentId=\"main\">\n        <ion-content class=\"main-menu-padding\">\n            <ion-avatar *ngIf=\"worker\" class=\"image-center\">\n                <img *ngIf=\"worker && worker.profileImage\" [src]=\"worker.profileImage\" />\n                <img *ngIf=\"!worker || !worker.profileImage\" src=\"../../../assets/welcome/logoWorker.jpg\" />\n            </ion-avatar>\n            <ion-grid fixed *ngIf=\"worker\">\n                <ion-row class=\"ion-text-center\">\n                    <ion-col size=\"12\">\n                        <h2> {{ worker.fullName }} </h2>\n                        <span>Aquí alguna información importante</span>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n            <br>\n\n            <ion-list *ngIf=\"worker\">\n                <ion-item>\n                    <ion-icon slot=\"start\" name=\"call\" color=\"success\"></ion-icon>\n                    <ion-label>\n                        {{ worker.telephoneNumber }}\n                    </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-icon slot=\"start\" name=\"pin\" color=\"danger\"></ion-icon>\n                    <ion-label>\n                        {{ worker.zipCode }}\n                    </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-icon slot=\"start\" name=\"mail\" color=\"dark\"></ion-icon>\n                    <ion-label>\n                        {{ worker.email }}\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n            <br>\n\n            <ion-grid fixed>\n                <ion-row class=\"ion-text-center\">\n                    <ion-col size=\"12\">\n                        <ion-button (click)=\"signOut()\" expand=\"block\" color=\"danger\">\n                            Logout\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid> -->\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");
    /* harmony import */


    var _components_popemail_popemail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/popemail/popemail.component */
    "./src/app/components/popemail/popemail.component.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      entryComponents: [_components_popemail_popemail_component__WEBPACK_IMPORTED_MODULE_4__["PopemailComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/shared.module */
    "./src/app/components/shared.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .background-image {\n  --background: url('login-background.jpg') no-repeat 100% 100%;\n}\n\n.first-input {\n  border-radius: 10px 10px 0 0;\n}\n\n.second-input {\n  border-radius: 0 0 10px 10px;\n}\n\n.to-button {\n  position: absolute;\n  bottom: 1%;\n  margin-bottom: 10px;\n}\n\n.to-button p {\n  color: #dedede;\n  font-size: 18px;\n  margin-bottom: 0;\n  margin-left: -15px;\n}\n\n.to-button p span {\n  color: #478FFC;\n}\n\n.to-top {\n  position: absolute;\n  top: 30%;\n}\n\nh2 {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWx2YXJhZG8vZGVzYXJyb2xsby9lbmlhY2d0L2lvbmljL3hKb2JzL3hKb2JzV29ya2VyL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw2REFBQTtBQ0FSOztBRElBO0VBQ0ksNEJBQUE7QUNESjs7QURJQTtFQUNJLDRCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FEQ1E7RUFDSSxjQUFBO0FDQ1o7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2xvZ2luLWJhY2tncm91bmQuanBnJykgbm8tcmVwZWF0IDEwMCUgMTAwJTtcbiAgICB9XG59XG5cbi5maXJzdC1pbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbn1cblxuLnNlY29uZC1pbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbn1cblxuLnRvLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICNkZWRlZGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNDc4RkZDO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udG8tdG9wIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMCU7XG59XG5cbmgyIHtcbiAgICBjb2xvcjogd2hpdGU7XG59IiwiOmhvc3QgLmJhY2tncm91bmQtaW1hZ2Uge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4tYmFja2dyb3VuZC5qcGdcIikgbm8tcmVwZWF0IDEwMCUgMTAwJTtcbn1cblxuLmZpcnN0LWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbn1cblxuLnNlY29uZC1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG59XG5cbi50by1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMSU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udG8tYnV0dG9uIHAge1xuICBjb2xvcjogI2RlZGVkZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG4udG8tYnV0dG9uIHAgc3BhbiB7XG4gIGNvbG9yOiAjNDc4RkZDO1xufVxuXG4udG8tdG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbn1cblxuaDIge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _components_popemail_popemail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../components/popemail/popemail.component */
    "./src/app/components/popemail/popemail.component.ts");
    /* harmony import */


    var _push_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../push.service */
    "./src/app/push.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(afAuth, router, authService, fb, googlePlus, platform, apiService, alertController, actionSheetController, ionicStorage, popoverController, pushService) {
        _classCallCheck(this, LoginPage);

        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.platform = platform;
        this.apiService = apiService;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.ionicStorage = ionicStorage;
        this.popoverController = popoverController;
        this.pushService = pushService;
        this.GOOGLE = 'G';
        this.FACEBOOK = 'F';
        this.EMAIL = 'N';

        if (!pushService.deviceId) {
          pushService.initialConfiguration();
        }
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {
          var _this = this;

          var registry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.apiService.cleanStorage();
          this.googlePlus.login({
            'webClientId': '51878476605-8ebudbmq2fef0cu0qcepvkfjdgr2229o.apps.googleusercontent.com',
            'offline': true
          }).then(function (res) {
            //console.log('google signin',res);
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider.credential(res.idToken)).then(function (user) {
              //console.log('firebase auth',user);
              _this.apiService.externalExists(user.user.uid, _this.GOOGLE).subscribe(function (resp) {
                _this.authService.cargarUsuario(user.user.displayName, user.user.email, user.user.photoURL, user.user.uid, 'google'); //existe en la plataforma


                if (resp['exists']) {
                  //si la respuesta es verdadera y me quiero registrar
                  if (registry) {
                    _this.apiService.cleanStorage();

                    _this.presentAlert("El usuario ya se encuentra registrado en la plataforma.");
                  } else {
                    //si existe y se quiere loguear que pase adelante
                    var auth = {
                      'entity': 'W',
                      'type': _this.GOOGLE,
                      'username': user.user.uid,
                      'deviceId': _this.pushService.deviceId
                    };

                    _this.apiService.postEvent(auth, 'auth').subscribe(function (login) {
                      _this.ionicStorage.set("token", login.token);

                      _this.ionicStorage.set("userId", login.clientId); // this.apiService.saveStorage( 'auth-token', login.token );
                      // this.apiService.saveStorage( 'userId', login.clientId );


                      _this.apiService.getEvent("workers/".concat(login.clientId), login.token).subscribe(function (usr) {
                        var respWorker = usr;

                        _this.ionicStorage.set("workerObject", JSON.stringify(respWorker)); // this.apiService.saveStorage( 'workerObject', JSON.stringify(usr) );


                        _this.router.navigate(['/home']);
                      }, function (err) {
                        console.log('Error obteniendo información del usuario');
                      });
                    }, function (error) {
                      console.log('error en login', error);
                    });
                  } //si no existe en la plataforma

                } else {
                  //si me quiero registrar
                  if (registry) {
                    _this.router.navigate(['/registry']);
                  } else {
                    //si no existe y se quiere loguear
                    _this.apiService.cleanStorage();

                    _this.presentAlert("El usuario no se encuentra registrado en la plataforma.");
                  }
                }
              }, function (err) {
                console.log('error en el logueo', err);
              });
            })["catch"](function (error) {
              return console.log("Firebase failure: " + JSON.stringify(error));
            });
          })["catch"](function (err) {
            return console.error("Error: " + JSON.stringify(err));
          });
        }
      }, {
        key: "signInWithFacebook",
        value: function signInWithFacebook() {
          var _this2 = this;

          var registry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          console.log("1");
          this.apiService.cleanStorage();
          console.log("2");

          if (this.platform.is('cordova')) {
            console.log("2.5");
            return this.fb.login(['email', 'public_profile']).then(function (res) {
              console.log('login', res);
              var facebookCredential = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
              firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithCredential(facebookCredential).then(function (res) {
                console.log('signInWithCredential', res);

                _this2.apiService.externalExists(res.user.uid, _this2.FACEBOOK).subscribe(function (resp) {
                  console.log('externalExists', resp);

                  _this2.authService.cargarUsuario(res.user.displayName, res.user.email, res.user.photoURL, res.user.uid, 'facebook'); //existe en la plataforma


                  if (resp['exists']) {
                    //si la respuesta es verdadera y me quiero registrar
                    if (registry) {
                      _this2.apiService.cleanStorage();

                      _this2.presentAlert("El usuario ya se encuentra registrado en la plataforma.");
                    } else {
                      //si existe y se quiere loguear que pase adelante
                      var auth = {
                        'entity': 'W',
                        'type': _this2.FACEBOOK,
                        'username': res.user.uid,
                        'deviceId': _this2.pushService.deviceId
                      };

                      _this2.apiService.postEvent(auth, 'auth').subscribe(function (login) {
                        console.log('auth', login);

                        _this2.ionicStorage.set("token", login.token);

                        _this2.ionicStorage.set("userId", login.clientId); // this.apiService.saveStorage( 'auth-token', login.token );
                        // this.apiService.saveStorage( 'userId', login.clientId );


                        _this2.apiService.getEvent("workers/".concat(login.clientId), login.token).subscribe(function (usr) {
                          _this2.ionicStorage.set("workerObject", JSON.stringify(usr)); // this.apiService.saveStorage( 'workerObject', JSON.stringify(usr) );


                          _this2.router.navigate(['/home']);
                        }, function (err) {
                          console.log('Error obteniendo información del usuario');
                        });
                      }, function (error) {
                        console.log('error en login', error);
                      });
                    } //si no existe en la plataforma

                  } else {
                    //si me quiero registrar
                    if (registry) {
                      console.log("no existe en la plataforma, si me quiero registrar con facebook");

                      _this2.router.navigate(['/registry']);
                    } else {
                      //si no existe y se quiere loguear
                      _this2.apiService.cleanStorage();

                      _this2.presentAlert("El usuario no se encuentra registrado en la plataforma.");
                    }
                  }
                }, function (err) {
                  console.log('error en el logueo', err);
                });
              })["catch"](function (err) {
                return console.log('Error en autenticación con facebook', JSON.stringify(err));
              });
            })["catch"](function (err) {
              return console.log('Err', err);
            });
          } else {
            console.log("3");
            this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider()).then(function (res) {
              console.log("res", res);

              _this2.authService.cargarUsuario(res.user.displayName, res.user.email, res.user.photoURL, res.user.uid, 'facebook');

              _this2.router.navigate(['/home']);
            })["catch"](function (err) {
              return console.log(err);
            });
          }
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Inicio de Sesión',
                      subHeader: 'Jobs Exchange',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "signInWithEmail",
        value: function signInWithEmail(form) {
          var _this3 = this;

          this.apiService.cleanStorage();

          if (form.value.email === '') {
            this.presentAlert("El email no ha sido ingresado.");
          } else if (form.value.password === '') {
            this.presentAlert("La contrase\xF1a no ha sido ingresada.");
          } else {
            this.apiService.internalExists(form.value.email, form.value.password, this.EMAIL).subscribe(function (resp) {
              if (resp['isValid']) {
                var auth = {
                  'entity': 'W',
                  'type': _this3.EMAIL,
                  'username': form.value.email,
                  'password': form.value.password,
                  'deviceId': _this3.pushService.deviceId
                };

                _this3.apiService.postEvent(auth, 'auth').subscribe(function (login) {
                  console.log('login', login);

                  _this3.ionicStorage.set("token", login.token);

                  _this3.ionicStorage.set("userId", login.clientId);

                  _this3.apiService.getEvent("workers/".concat(login.clientId), login.token).subscribe(function (usr) {
                    var respWorker = usr;

                    _this3.ionicStorage.set("workerObject", JSON.stringify(respWorker));

                    console.log('workerObject', respWorker);

                    _this3.authService.cargarUsuario(usr['fullName'], form.value.email, usr['profileImage'], "", 'email');

                    if (usr['firstLogin']) {
                      _this3.router.navigate(['/categories']);
                    } else {
                      if (login.passwordReset) {
                        _this3.router.navigate(['/forgot-mail']);
                      } else {
                        _this3.router.navigate(['/home']);
                      }
                    }
                  }, function (err) {
                    console.log('Error obteniendo información del usuario');
                  });
                }, function (error) {
                  console.log('error en login', error);
                });
              } else {
                _this3.presentAlert("Usuario o contrase\xF1a inv\xE1lido.");
              }
            });
          }
        }
      }, {
        key: "presentActionSheet",
        value: function presentActionSheet() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.actionSheetController.create({
                      header: 'Registrate con nostros',
                      cssClass: 'action-sheets-groups-page',
                      buttons: [{
                        text: 'Utiliza tu correo electrónico',
                        role: 'destructive',
                        icon: 'mail',
                        handler: function handler() {
                          console.log('E-mail clicked');

                          _this4.router.navigate(['/registry']);
                        }
                      }, {
                        text: 'Utiliza tu cuenta de facebook',
                        icon: 'logo-facebook',
                        cssClass: 'FacebookIcon',
                        handler: function handler() {
                          // console.log('Facebook clicked');
                          _this4.signInWithFacebook(true);
                        }
                      }, {
                        text: 'Utiliza tu cuenta de Google',
                        icon: 'logo-google',
                        cssClass: 'GoogleIcon',
                        handler: function handler() {
                          // console.log('Google clicked');
                          _this4.signInWithGoogle(true);
                        }
                      }, {
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context2.sent;
                    _context2.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "forgotPasswordMail",
        value: function forgotPasswordMail(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var popover;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.popoverController.create({
                      component: _components_popemail_popemail_component__WEBPACK_IMPORTED_MODULE_11__["PopemailComponent"],
                      event: ev,
                      translucent: true
                    });

                  case 2:
                    popover = _context3.sent;
                    _context3.next = 5;
                    return popover.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__["Facebook"]
      }, {
        type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }, {
        type: _push_service__WEBPACK_IMPORTED_MODULE_12__["PushService"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map