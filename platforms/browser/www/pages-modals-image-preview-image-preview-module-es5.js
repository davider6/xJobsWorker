function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modals-image-preview-image-preview-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modals/image-preview/image-preview.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modals/image-preview/image-preview.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModalsImagePreviewImagePreviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen>\n\n  <ion-item class=\"close-fake\" lines=\"none\" text-center>\n    <ion-button (click)=\"close()\" fill=\"clear\" color=\"ligth\">\n      <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n      Atrás\n    </ion-button>\n\n    <ion-button (click)=\"zoom(true)\" fill=\"clear\" color=\"ligth\">\n      <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n      acercar\n    </ion-button>\n\n    <ion-button (click)=\"zoom(false)\" fill=\"clear\" color=\"ligth\">\n      <ion-icon name=\"remove\" slot=\"start\"></ion-icon>\n      alejar\n    </ion-button>\n  </ion-item>\n\n  <ion-slides [options]=\"sliderOpts\" #slider>\n    <ion-slide>\n      <div class=\"swipper-zoom-container\">\n        <img src=\"{{ img }}\">\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/modals/image-preview/image-preview-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/modals/image-preview/image-preview-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ImagePreviewPageRoutingModule */

  /***/
  function srcAppPagesModalsImagePreviewImagePreviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagePreviewPageRoutingModule", function () {
      return ImagePreviewPageRoutingModule;
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


    var _image_preview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./image-preview.page */
    "./src/app/pages/modals/image-preview/image-preview.page.ts");

    var routes = [{
      path: '',
      component: _image_preview_page__WEBPACK_IMPORTED_MODULE_3__["ImagePreviewPage"]
    }];

    var ImagePreviewPageRoutingModule = function ImagePreviewPageRoutingModule() {
      _classCallCheck(this, ImagePreviewPageRoutingModule);
    };

    ImagePreviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ImagePreviewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/modals/image-preview/image-preview.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/modals/image-preview/image-preview.module.ts ***!
    \********************************************************************/

  /*! exports provided: ImagePreviewPageModule */

  /***/
  function srcAppPagesModalsImagePreviewImagePreviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagePreviewPageModule", function () {
      return ImagePreviewPageModule;
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


    var _image_preview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./image-preview-routing.module */
    "./src/app/pages/modals/image-preview/image-preview-routing.module.ts");
    /* harmony import */


    var _image_preview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./image-preview.page */
    "./src/app/pages/modals/image-preview/image-preview.page.ts");

    var ImagePreviewPageModule = function ImagePreviewPageModule() {
      _classCallCheck(this, ImagePreviewPageModule);
    };

    ImagePreviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _image_preview_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImagePreviewPageRoutingModule"]],
      declarations: [_image_preview_page__WEBPACK_IMPORTED_MODULE_6__["ImagePreviewPage"]]
    })], ImagePreviewPageModule);
    /***/
  },

  /***/
  "./src/app/pages/modals/image-preview/image-preview.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/modals/image-preview/image-preview.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModalsImagePreviewImagePreviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".close-fake {\n  --background: transparent;\n  margin-top: 40px;\n}\n.close-fake ion-icon {\n  font-size: 2rem;\n}\nion-content {\n  --background: rgba(44, 39, 45, 0.84);\n}\nion-slides {\n  height: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWx2YXJhZG8vZGVzYXJyb2xsby9lbmlhY2d0L2lvbmljL3hKb2JzL3hKb2JzV29ya2VyL3NyYy9hcHAvcGFnZXMvbW9kYWxzL2ltYWdlLXByZXZpZXcvaW1hZ2UtcHJldmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21vZGFscy9pbWFnZS1wcmV2aWV3L2ltYWdlLXByZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFJQSxnQkFBQTtBQ0ZKO0FEREk7RUFDSSxlQUFBO0FDR1I7QURFQTtFQUNJLG9DQUFBO0FDQ0o7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFscy9pbWFnZS1wcmV2aWV3L2ltYWdlLXByZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlLWZha2V7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSg0NCwgMzksIDQ1LCAwLjg0KTtcbn1cblxuaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiA4MCU7XG59IiwiLmNsb3NlLWZha2Uge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmNsb3NlLWZha2UgaW9uLWljb24ge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDQ0LCAzOSwgNDUsIDAuODQpO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA4MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/modals/image-preview/image-preview.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/modals/image-preview/image-preview.page.ts ***!
    \******************************************************************/

  /*! exports provided: ImagePreviewPage */

  /***/
  function srcAppPagesModalsImagePreviewImagePreviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagePreviewPage", function () {
      return ImagePreviewPage;
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

    var ImagePreviewPage = /*#__PURE__*/function () {
      function ImagePreviewPage(navParams, modalController) {
        _classCallCheck(this, ImagePreviewPage);

        this.navParams = navParams;
        this.modalController = modalController;
        this.sliderOpts = {
          zoom: {
            maxRatio: 5
          }
        };
      }

      _createClass(ImagePreviewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.img = this.navParams.get('img');
        }
      }, {
        key: "zoom",
        value: function zoom(zoomIn) {
          var zoom = this.slider.nativeElement.swiper.zoom;

          if (zoomIn) {
            zoom["in"]();
          } else {
            zoom.out();
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.modalController.dismiss();
        }
      }]);

      return ImagePreviewPage;
    }();

    ImagePreviewPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], ImagePreviewPage.prototype, "slider", void 0);
    ImagePreviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-image-preview',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./image-preview.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modals/image-preview/image-preview.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./image-preview.page.scss */
      "./src/app/pages/modals/image-preview/image-preview.page.scss"))["default"]]
    })], ImagePreviewPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-modals-image-preview-image-preview-module-es5.js.map