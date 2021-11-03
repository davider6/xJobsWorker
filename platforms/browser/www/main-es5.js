function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n    <!-- <ion-router-outlet></ion-router-outlet> -->\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\n\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-slider/image-slider.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-slider/image-slider.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsImageSliderImageSliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loading && images.length > 0\">\n  <ion-item><ion-spinner name=\"bubbles\"></ion-spinner></ion-item>\n</div>\n<div *ngIf=\"!loading\">\n  <ion-item *ngIf=\"images.length > 0\" >\n    <ion-slides #slider pager=\"true\" [options]=\"sliderOpts\">\n      <ion-slide *ngFor=\"let image of images; index as pos\">\n        <ion-img\n          alt=\"{{ pos }}\"\n          src=\"{{ image.path }}\"\n          (click)=\"openImage(image)\"\n        ></ion-img>\n      </ion-slide>\n    </ion-slides>\n  </ion-item>\n  <div *ngIf=\"upload\">\n    <ion-item>\n      <ion-button class=\"secondary-btn\" fill=\"outline\" expand=\"block\" (click)=\"selectMedia()\">\n        <ion-icon slot=\"start\" name=\"document\"></ion-icon>\n        Subir Imagen\n      </ion-button>\n\n      <ion-button\n        *ngIf=\"images.length > 0\"\n        (click)=\"openModal()\"\n        class=\"secondary-btn\" fill=\"outline\" expand=\"block\"\n      >\n        <ion-icon slot=\"start\" name=\"trash\"></ion-icon>\n        Quitar Imagen\n      </ion-button>\n    </ion-item>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popemail/popemail.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popemail/popemail.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPopemailPopemailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <h2 class=\"ion-text-center\">\n        <strong>Olvidé mi contraseña</strong>\n    </h2>\n    <br>\n</ion-header>\n<ion-content>\n    <div>\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-item lines=\"full\">\n                        <ion-input class=\"ion-text-left\" [(ngModel)]=\"email\" placeholder=\"Ingresa tu cuenta de correo electrónico\" inputmode=\"number\" type=\"text\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <div>\n        <ion-button size-xs=\"12\" color=\"dark\" type=\"submit\" expand=\"block\" (click)=\"processRequest()\">\n            Reiniciar contraseña\n        </ion-button>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rating/rating.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/rating/rating.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRatingRatingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"editable\">\n  <ion-icon\n    name=\"star\"\n    *ngFor=\"let num of [1, 2, 3, 4, 5]\"\n    (click)=\"rate(num)\"\n    [ngStyle]=\"{ color: getColor(num) }\"\n    size=\"large\"\n  ></ion-icon>\n</div>\n<div *ngIf=\"!editable\">\n  <ion-icon\n    name=\"star\"\n    *ngFor=\"let num of [1, 2, 3, 4, 5]\"\n    size=\"small\"\n  ></ion-icon>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modals/delete-modal/delete-modal.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modals/delete-modal/delete-modal.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModalsDeleteModalDeleteModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Detele images</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let f of files; index as pos\">\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <ion-img [src]=\"f.path\"></ion-img>\n        </ion-thumbnail>\n        <ion-label class=\"ion-text-wrap\">\n          {{ f.name }}\n          <p>{{ f.fullPath }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"start\">\n        <ion-item-option (click)=\"deleteFile(f,pos)\" color=\"danger\">\n          <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"closeModal()\">\n      Close\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders-details/orders-details.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders-details/orders-details.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrdersDetailsOrdersDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-buttons slot=\"start\">\n                <ion-back-button defaultHref=\"/\"></ion-back-button>\n            </ion-buttons>\n        </ion-buttons>\n        <ion-title>Detalle de Orden de Trabajo</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-item class=\".ion-justify-content-start\" lines=\"none\">\n                    <ion-avatar>\n                        <img src=\"{{orderDetails.occupationImage}}\" class=\".ion-align-self-center\" />\n                        <ion-grid>\n                            <ion-row class=\"ion-text-center\">\n                                <ion-col>\n                                    <ion-text color=\"dark\">\n                                        <b>\n                                            <font size=\"2\">{{orderDetails.occupationName}}</font>\n                                        </b>\n                                    </ion-text>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-avatar>\n                    <ion-label>\n                        <ion-text color=\"dark\">\n                            <b>\n                                <font size=\"1\">Nombre del solicitante</font>\n                            </b>\n                        </ion-text>\n                        <ion-text color=\"dark\">\n                            <p>{{ orderDetails.clientName}}</p>\n                        </ion-text>\n                        <ion-text color=\"dark\">\n                            <b>\n                                <font size=\"1\">Dirección</font>\n                            </b>\n                        </ion-text>\n                        <ion-text color=\"dark\">\n                            <p>{{orderDetails.address}}</p>\n                        </ion-text>\n\n                        <ion-text color=\"dark\">\n                            <b>\n                                <font size=\"1\">Fecha de la orden</font>\n                            </b>\n                        </ion-text>\n                        <ion-text color=\"dark\">\n                            <p>{{ orderDetails.workDate | date:'medium' }}</p>\n                        </ion-text>\n                        <ion-text color=\"dark\" *ngIf=\"endDate\">\n                            <b>\n                                <font size=\"1\">Fecha de finalización</font>\n                            </b>\n                        </ion-text>\n                        <ion-text color=\"dark\" *ngIf=\"endDate\">\n                            <p>{{ orderDetails.finishTime | date:'medium' }}</p>\n                        </ion-text>\n                        <br>\n                        <ion-router-link class=\"underline\" (click)=\"proposeNewDate()\" *ngIf=\"proposeDate\">\n                            <b>\n                                <u><font size=\"1\">Proponer nueva fecha</font></u>\n                            </b>\n                        </ion-router-link>\n                        <ion-text color=\"dark\">\n                            <p>&nbsp;</p>\n                        </ion-text>\n                    </ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <div class=\"ion-padding\" *ngIf=\"startOrder\">\n            <ion-button expand=\"block\" type=\"submit\" class=\"primary-btn\" (click)=\"processStartOrder()\">\n                <ion-icon slot=\"start\" name=\"calendar-forward\"></ion-icon>Iniciar orden de trabajo\n            </ion-button>\n        </div>\n        <div class=\"ion-padding\" *ngIf=\"finalize\">\n            <ion-button expand=\"block\" type=\"submit\" class=\"primary-btn\" (click)=\"closeOrder()\">\n                <ion-icon slot=\"start\" name=\"stop\"></ion-icon>Finalizar orden de trabajo\n            </ion-button>\n        </div>\n        <ion-row class=\"ion-text-center\">\n            <ion-col>\n                <ion-button class=\"primary-btn\" size=\"small\" shape=\"round\" (click)=\"updateStateOfOrder(orderDetails.orderId,'ACCEPTED', orderDetails.status)\" *ngIf=\"accept\">\n                    <ion-icon name=\"thumbs-up\"></ion-icon>\n                    &nbsp;Aceptar\n                </ion-button>\n            </ion-col>\n            <ion-col>\n                <ion-button class=\"secondary-btn\" size=\"small\" shape=\"round\" (click)=\"updateStateOfOrder(orderDetails.orderId,'REJECTED', orderDetails.status)\" *ngIf=\"reject\">\n                    <ion-icon name=\"thumbs-down\"></ion-icon>\n                    &nbsp;Rechazar\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-toolbar style=\"margin-top: -5px;\">\n        <ion-segment (ionChange)=\"segmentChanged()\" [(ngModel)]=\"segment\">\n            <ion-segment-button value=\"0\">\n                <ion-label>Ubicación</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"1\">\n                <ion-label>Solicitado</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"2\" *ngIf=\"finalize\">\n                <ion-label>Finalizar</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n        <ion-slides class=\"tab-order-details\" #slides (ionSlideDidChange)=\"slideChanged()\" scrollbar=\"true\">\n            <ion-slide>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col class=\"ion-text-center\">\n                            <h3>¿Dónde ejecutar la orden?</h3>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <div style=\"border: solid 5px #FFFFFF; border-radius: 8px; height: 100%;\">\n                                <div id=\"map_canvas\" class=\"map\"></div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-slide>\n            <ion-slide>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col>\n                            <ion-text class=\"ion-text-left\">\n                                <p>\n                                    {{ orderDetails.description }}\n                                </p>\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"gallery\">\n                        <div style=\"overflow-y: scroll;  width: 100%; height: 100%;\">\n                            <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\" *ngFor=\"let homeOwnerPic of homeOwnerPics\">\n\n                                <img style=\"border-radius: 10px; width: 300px;\" tappable src=\"{{ homeOwnerPic }}\" (click)=\"imagePreview(homeOwnerPic)\">\n\n                            </ion-col>\n                        </div>\n                    </ion-row>\n                </ion-grid>\n            </ion-slide>\n            <ion-slide class=\"tab-order-details\" *ngIf=\"finalize\">\n                <ion-card>\n                    <ion-card-content>\n                        <div *ngIf=\"orderDetails.status!=='PUBLIC'\">\n                            <form #form=\"ngForm\" (ngSubmit)=\"closeOrder()\">\n                                <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n                                    <ion-item>\n                                        <b><ion-label>\n                                            Duración: </ion-label></b>\n                                        <ion-label>{{this.duration}}</ion-label>\n                                    </ion-item>\n                                    <ion-item>\n                                        <ion-label position=\"floating\">\n                                            Describa su experiencia:</ion-label>\n                                        <ion-textarea [(ngModel)]=\"description\" name=\"description\" type=\"text\" inputmode=\"latin-name\" rows=\"4\"></ion-textarea>\n                                    </ion-item>\n                                    <app-image-slider [upload]=\"true\" [closed]=\"false\" [temp]=\"true\" [loadTemp]=\"false\"></app-image-slider>\n                                </ion-list>\n                            </form>\n                        </div>\n                    </ion-card-content>\n                </ion-card>\n            </ion-slide>\n        </ion-slides>\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n            <!-- <div *ngIf=\"orderDetails.status == 'In Progress'\">\n                <ion-fab-button (click)=\"setCloseOrder()\" color=\"xjobs\">\n                    <ion-icon name=\"flag\"></ion-icon>\n                </ion-fab-button>\n            </div> -->\n            <!-- <div *ngIf=\"orderDetails.status != 'In Progress'\">\n                                <ion-fab-button (click)=\"createNewOrder()\" color=\"xjobs\">\n                                    <ion-icon name=\"construct\"></ion-icon>\n                                </ion-fab-button>\n                            </div> -->\n        </ion-fab>\n    </ion-toolbar>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");

    var routes = [{
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-home-home-module */
        "pages-home-home-module").then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: '',
      redirectTo: 'home',
      // redirectTo: 'categories',
      pathMatch: 'full'
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'registry',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-registry-registry-module */
        [__webpack_require__.e("default~pages-registry-registry-module~pages-welcome-welcome-module"), __webpack_require__.e("pages-registry-registry-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/registry/registry.module */
        "./src/app/pages/registry/registry.module.ts")).then(function (m) {
          return m.RegistryPageModule;
        });
      }
    }, {
      path: 'categories',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-categories-categories-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-categories-categories-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/categories/categories.module */
        "./src/app/pages/categories/categories.module.ts")).then(function (m) {
          return m.CategoriesPageModule;
        });
      }
    }, {
      path: 'sub-categories',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-sub-categories-sub-categories-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-sub-categories-sub-categories-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/sub-categories/sub-categories.module */
        "./src/app/pages/sub-categories/sub-categories.module.ts")).then(function (m) {
          return m.SubCategoriesPageModule;
        });
      }
    }, {
      path: 'forgot-mail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-forgot-mail-forgot-mail-module */
        "pages-forgot-mail-forgot-mail-module").then(__webpack_require__.bind(null,
        /*! ./pages/forgot-mail/forgot-mail.module */
        "./src/app/pages/forgot-mail/forgot-mail.module.ts")).then(function (m) {
          return m.ForgotMailPageModule;
        });
      }
    }, {
      path: 'orders-list',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-orders-list-orders-list-module */
        "pages-orders-list-orders-list-module").then(__webpack_require__.bind(null,
        /*! ./pages/orders-list/orders-list.module */
        "./src/app/pages/orders-list/orders-list.module.ts")).then(function (m) {
          return m.OrdersListPageModule;
        });
      }
    }, {
      path: 'orders-details',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/orders-details/orders-details.module */
        "./src/app/pages/orders-details/orders-details.module.ts")).then(function (m) {
          return m.OrdersDetailsPageModule;
        });
      }
    }, {
      path: 'delete-modal',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/modals/delete-modal/delete-modal.module */
        "./src/app/pages/modals/delete-modal/delete-modal.module.ts")).then(function (m) {
          return m.DeleteModalPageModule;
        });
      }
    }, {
      path: 'welcome',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-welcome-welcome-module */
        [__webpack_require__.e("default~pages-registry-registry-module~pages-welcome-welcome-module"), __webpack_require__.e("pages-welcome-welcome-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/welcome/welcome.module */
        "./src/app/pages/welcome/welcome.module.ts")).then(function (m) {
          return m.WelcomePageModule;
        });
      }
    }, {
      path: 'edit-worker',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-edit-worker-edit-worker-module */
        "pages-edit-worker-edit-worker-module").then(__webpack_require__.bind(null,
        /*! ./pages/edit-worker/edit-worker.module */
        "./src/app/pages/edit-worker/edit-worker.module.ts")).then(function (m) {
          return m.EditWorkerPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'image-preview',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-modals-image-preview-image-preview-module */
        "pages-modals-image-preview-image-preview-module").then(__webpack_require__.bind(null,
        /*! ./pages/modals/image-preview/image-preview.module */
        "./src/app/pages/modals/image-preview/image-preview.module.ts")).then(function (m) {
          return m.ImagePreviewPageModule;
        });
      }
    }, {
      path: 'new-date',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-new-date-new-date-module */
        "pages-new-date-new-date-module").then(__webpack_require__.bind(null,
        /*! ./pages/new-date/new-date.module */
        "./src/app/pages/new-date/new-date.module.ts")).then(function (m) {
          return m.NewDatePageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _push_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./push.service */
    "./src/app/push.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, pushService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.pushService = pushService;
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.pushService.initialConfiguration();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _push_service__WEBPACK_IMPORTED_MODULE_5__["PushService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: firebaseConfig, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
      return firebaseConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/media-capture/ngx */
    "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _pages_modals_delete_modal_delete_modal_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/modals/delete-modal/delete-modal.module */
    "./src/app/pages/modals/delete-modal/delete-modal.module.ts");
    /* harmony import */


    var _pages_orders_details_orders_details_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/orders-details/orders-details.module */
    "./src/app/pages/orders-details/orders-details.module.ts");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_native_image_resizer_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ionic-native/image-resizer/ngx */
    "./node_modules/@ionic-native/image-resizer/__ivy_ngcc__/ngx/index.js");

    var firebaseConfig = {
      apiKey: "AIzaSyCinrx4tqUuECzn46SKiFpIlAoQo4AZado",
      authDomain: "xjobworker.firebaseapp.com",
      databaseURL: "https://xjobworker.firebaseio.com",
      projectId: "xjobworker",
      storageBucket: "xjobworker.appspot.com",
      messagingSenderId: "51878476605",
      appId: "1:51878476605:web:6341886b19fffc580de354"
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(firebaseConfig), _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _pages_modals_delete_modal_delete_modal_module__WEBPACK_IMPORTED_MODULE_21__["DeleteModalPageModule"], _pages_orders_details_orders_details_module__WEBPACK_IMPORTED_MODULE_22__["OrdersDetailsPageModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["IonicStorageModule"].forRoot()],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_20__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_19__["File"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_16__["PhotoViewer"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_17__["MediaCapture"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_18__["WebView"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_14__["Facebook"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_15__["GooglePlus"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_23__["AndroidPermissions"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_24__["OneSignal"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["DatePipe"], _ionic_native_image_resizer_ngx__WEBPACK_IMPORTED_MODULE_26__["ImageResizer"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/image-slider/image-slider.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/image-slider/image-slider.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsImageSliderImageSliderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWx2YXJhZG8vZGVzYXJyb2xsby9lbmlhY2d0L2lvbmljL3hKb2JzL3hKb2JzV29ya2VyL3NyYy9hcHAvY29tcG9uZW50cy9pbWFnZS1zbGlkZXIvaW1hZ2Utc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLXNsaWRlci9pbWFnZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLXNsaWRlci9pbWFnZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbiIsImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/image-slider/image-slider.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/image-slider/image-slider.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ImageSliderComponent */

  /***/
  function srcAppComponentsImageSliderImageSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageSliderComponent", function () {
      return ImageSliderComponent;
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


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/media-capture/ngx */
    "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_manage_files_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/manage-files-service.service */
    "./src/app/services/manage-files-service.service.ts");
    /* harmony import */


    var src_app_pages_modals_delete_modal_delete_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/pages/modals/delete-modal/delete-modal.page */
    "./src/app/pages/modals/delete-modal/delete-modal.page.ts");
    /* harmony import */


    var _ionic_native_image_resizer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/image-resizer/ngx */
    "./node_modules/@ionic-native/image-resizer/__ivy_ngcc__/ngx/index.js");

    var MEDIA_FOLDER_NAME = "new_orders";
    var MEDIA_CLOSED_FOLDER_NAME = "closed_orders";
    var MEDIA_TEMP_FOLDER_NAME = "temp_orders";

    var ImageSliderComponent = /*#__PURE__*/function () {
      function ImageSliderComponent(plt, file, imageFile, camera, photoViewer, webView, storage, uploadService, mediaCapture, actionSheetController, modalController, ref, imageResizer) {
        _classCallCheck(this, ImageSliderComponent);

        this.plt = plt;
        this.file = file;
        this.imageFile = imageFile;
        this.camera = camera;
        this.photoViewer = photoViewer;
        this.webView = webView;
        this.storage = storage;
        this.uploadService = uploadService;
        this.mediaCapture = mediaCapture;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.ref = ref;
        this.imageResizer = imageResizer;
        this.images = [];
        this.progress = {
          percentage: 0
        };
        this.loading = true;
        this.sliderOpts = {
          zoom: false,
          slidesPerview: 1.5,
          centeredSlides: true,
          spaceBetween: 20,
          preloadImages: true
        };
      }

      _createClass(ImageSliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.loading = false;
                    this.isClose = String(this.closed);
                    this.isTemp = String(this.temp);
                    this.plt.ready().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this3 = this;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                this.storage.get("token").then(function (tk) {
                                  _this3.token = tk;
                                });

                                if (this.loadTemp) {
                                  _context.next = 6;
                                  break;
                                }

                                _context.next = 4;
                                return this.prepareFolder();

                              case 4:
                                _context.next = 8;
                                break;

                              case 6:
                                _context.next = 8;
                                return this.loadImages();

                              case 8:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "selectFolder",
        value: function selectFolder() {
          if (this.temp) {
            console.log('selectFolder()', MEDIA_TEMP_FOLDER_NAME);
            return MEDIA_TEMP_FOLDER_NAME;
          } else if (this.closed) {
            console.log('selectFolder()', MEDIA_CLOSED_FOLDER_NAME);
            return MEDIA_CLOSED_FOLDER_NAME;
          } else {
            console.log('selectFolder()', MEDIA_FOLDER_NAME);
            return MEDIA_FOLDER_NAME;
          }
        }
      }, {
        key: "prepareFolder",
        value: function prepareFolder() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            var path;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.storage.set(this.selectFolder(), null);
                    path = this.file.externalCacheDirectory;
                    this.file.checkDir(path, this.selectFolder()).then(function () {
                      _this4.file.removeRecursively(path, _this4.selectFolder()).then(function () {
                        _this4.file.createDir(path, _this4.selectFolder(), false).then(function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                            var _this5 = this;

                            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                              while (1) {
                                switch (_context5.prev = _context5.next) {
                                  case 0:
                                    if (!this.upload) {
                                      setTimeout(function () {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                          var _this6 = this;

                                          var filesFromOrder;
                                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                            while (1) {
                                              switch (_context4.prev = _context4.next) {
                                                case 0:
                                                  _context4.next = 2;
                                                  return this.uploadService.listFiles(this.orderId, this.isClose, this.isTemp, this.token.token).then(function (result) {
                                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                                                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                                        while (1) {
                                                          switch (_context3.prev = _context3.next) {
                                                            case 0:
                                                              _context3.next = 2;
                                                              return this.downloadImages(result);

                                                            case 2:
                                                            case "end":
                                                              return _context3.stop();
                                                          }
                                                        }
                                                      }, _callee3, this);
                                                    }));
                                                  });

                                                case 2:
                                                  filesFromOrder = _context4.sent;

                                                case 3:
                                                case "end":
                                                  return _context4.stop();
                                              }
                                            }
                                          }, _callee4, this);
                                        }));
                                      }, 1000);
                                    } else {
                                      this.loading = false;
                                    }

                                  case 1:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5, this);
                          }));
                        });
                      });
                    }, function (err) {
                      _this4.file.createDir(path, _this4.selectFolder(), false);
                    })["finally"](function () {
                      _this4.loading = false;
                    });

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "downloadImages",
        value: function downloadImages(listOfImages) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var listOfDowloadedImages, i;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    listOfDowloadedImages = [];
                    i = 0;

                  case 2:
                    if (!(i < listOfImages.length)) {
                      _context7.next = 8;
                      break;
                    }

                    _context7.next = 5;
                    return this.uploadService.downloadResource(listOfImages[i], this.orderId, this.isClose, this.isTemp, this.token.token).then(function (blobResult) {
                      var newObject = {
                        fileName: listOfImages[i],
                        blob: blobResult
                      };
                      listOfDowloadedImages.push(newObject);
                    });

                  case 5:
                    i++;
                    _context7.next = 2;
                    break;

                  case 8:
                    _context7.next = 10;
                    return this.createFile(listOfDowloadedImages);

                  case 10:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "createFile",
        value: function createFile(listOfImages) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this7 = this;

            var i, imageProccessed;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    i = 0;

                  case 1:
                    if (!(i < listOfImages.length)) {
                      _context8.next = 8;
                      break;
                    }

                    _context8.next = 4;
                    return this.copyFileToLocalDir(null, listOfImages[i].blob, listOfImages[i].fileName);

                  case 4:
                    imageProccessed = _context8.sent;

                  case 5:
                    i++;
                    _context8.next = 1;
                    break;

                  case 8:
                    this.ref.detectChanges();
                    setTimeout(function () {
                      _this7.loading = false;
                    }, 1000);

                  case 10:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "loadImages",
        value: function loadImages() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    return _context9.abrupt("return", new Promise(function (resolve) {
                      _this8.storage.get(_this8.selectFolder()).then(function (images) {
                        if (images) {
                          var arr = JSON.parse(images);
                          _this8.images = [];

                          var _iterator = _createForOfIteratorHelper(arr),
                              _step;

                          try {
                            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                              var img = _step.value;
                              var filePath = _this8.file.externalCacheDirectory + _this8.selectFolder() + "/" + img;
                              console.log('filePath', filePath);

                              var resPath = _this8.pathForImage(filePath);

                              _this8.images.push({
                                name: img,
                                path: resPath,
                                filePath: filePath
                              });
                            }
                          } catch (err) {
                            _iterator.e(err);
                          } finally {
                            _iterator.f();
                          }

                          _this8.loading = false;
                          resolve("Images loaded");
                        }
                      });
                    }));

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));
        }
      }, {
        key: "pathForImage",
        value: function pathForImage(img) {
          if (img === null) {
            return "";
          } else {
            var converted = this.webView.convertFileSrc(img);
            return converted;
          }
        }
      }, {
        key: "updateStoredImages",
        value: function updateStoredImages(newName) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this9 = this;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    return _context10.abrupt("return", new Promise(function (resolve) {
                      _this9.storage.get(_this9.selectFolder()).then(function (images) {
                        var arr = JSON.parse(images);

                        if (!arr) {
                          var newImages = [newName];

                          _this9.storage.set(_this9.selectFolder(), JSON.stringify(newImages));
                        } else {
                          arr.push(newName);

                          _this9.storage.set(_this9.selectFolder(), JSON.stringify(arr));
                        }

                        var filePath = _this9.file.externalCacheDirectory + _this9.selectFolder() + "/" + newName;

                        var resPath = _this9.pathForImage(filePath);

                        var newEntry = {
                          name: newName,
                          path: resPath,
                          filePath: filePath
                        };
                        console.log('newEntry', newEntry);
                        console.log('1');
                        setTimeout(function () {
                          console.log('2');
                          _this9.images = [newEntry].concat(_toConsumableArray(_this9.images));
                        }, 250);
                        resolve(newName + " image stored");
                      });
                    }));

                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));
        }
      }, {
        key: "selectMedia",
        value: function selectMedia() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this10 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.actionSheetController.create({
                      header: "What would you like to add?",
                      buttons: [{
                        text: "Capture Image",
                        handler: function handler() {
                          _this10.captureImage();
                        }
                      }, {
                        text: "Load images from gallery",
                        handler: function handler() {
                          _this10.pickImages();
                        }
                      }, {
                        text: "Cancel",
                        role: "cancel"
                      }]
                    });

                  case 2:
                    actionSheet = _context11.sent;
                    _context11.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "copyFilesSeleted",
        value: function copyFilesSeleted(base64Data, selectedImages) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this11 = this;

            var ext, d, newName, name, copyFrom, origin, copyTo, newEntry;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.plt.ready().then(function () {
                      if (_this11.plt.is('android')) {
                        _this11.file.checkDir(_this11.file.externalCacheDirectory, _this11.selectFolder()).then(function (response) {
                          console.log('Directory exists:' + response);
                        })["catch"](function (err) {
                          console.log('Directory doesn\'t exist:' + JSON.stringify(err));

                          _this11.file.createDir(_this11.file.externalCacheDirectory, _this11.selectFolder(), false).then(function (response) {
                            console.log('Directory create:' + response);
                          })["catch"](function (err) {
                            console.log('Directory no create:' + JSON.stringify(err));
                          });
                        });
                      }
                    });

                  case 2:
                    ext = selectedImages.split(".").pop();
                    d = Date.now();
                    newName = "".concat(d, ".").concat(ext);

                    if (newName.indexOf("?") >= 0) {
                      newName = newName.substr(0, newName.lastIndexOf("?"));
                    }

                    name = selectedImages.substr(selectedImages.lastIndexOf("/") + 1);

                    if (name.indexOf("?") >= 0) {
                      name = name.substr(0, name.lastIndexOf("?"));
                    }

                    console.log('name', name);
                    copyFrom = selectedImages.substr(0, selectedImages.lastIndexOf("/") + 1);
                    console.log('copyFrom before: ', copyFrom);
                    origin = copyFrom.replace("http://localhost/_app_file_/", "file:///");
                    console.log('copyFrom after: ', origin);
                    copyTo = this.file.externalCacheDirectory + this.selectFolder();
                    console.log('copyTo', copyTo);
                    _context12.next = 17;
                    return this.storage.get(this.selectFolder()).then(function (images) {
                      var arr = JSON.parse(images);

                      if (!arr) {
                        var newImages = [newName];

                        _this11.storage.set(_this11.selectFolder(), JSON.stringify(newImages));
                      } else {
                        arr.push(newName);

                        _this11.storage.set(_this11.selectFolder(), JSON.stringify(arr));
                      }
                    });

                  case 17:
                    _context12.next = 19;
                    return this.file.copyFile(origin, name, copyTo, newName);

                  case 19:
                    newEntry = {
                      name: newName,
                      path: this.pathForImage(copyTo + "/" + newName),
                      filePath: copyTo + "/" + newName
                    };
                    this.images = [newEntry].concat(_toConsumableArray(this.images));
                    return _context12.abrupt("return", newEntry);

                  case 22:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "captureImage",
        value: function captureImage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var options;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    options = {
                      quality: 50,
                      destinationType: this.camera.DestinationType.FILE_URI,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      correctOrientation: true,
                      sourceType: this.camera.PictureSourceType.CAMERA
                    };
                    this.processImage(options);

                  case 2:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "pickImages",
        value: function pickImages() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var options;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    options = {
                      quality: 60,
                      destinationType: this.camera.DestinationType.FILE_URI,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      correctOrientation: true,
                      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                    };
                    this.processImage(options);

                  case 2:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "processImage",
        value: function processImage(options) {
          var _this12 = this;

          this.camera.getPicture(options).then(function (imgResp) {
            var base64Image = 'data:image/jpeg;base64,' + imgResp;
            _this12.imagePreview = window.Ionic.WebView.convertFileSrc(imgResp);

            _this12.copyFilesSeleted(base64Image, _this12.imagePreview).then(function (x) {
              console.log("?", x);
            })["catch"](function (err) {
              console.log(err);
            });
          }, function (err) {
            // Handle error
            console.log('Error al utilizar camara', JSON.stringify(err));
          });
        }
      }, {
        key: "copyFileToLocalDir",
        value: function copyFileToLocalDir(fullPath) {
          var _this13 = this;

          var blob = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var fileName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
          return new Promise(function (resolve) {
            if (fileName !== "") {
              console.log('1');

              _this13.file.writeFile(_this13.file.externalCacheDirectory + _this13.selectFolder(), fileName, blob, {
                replace: true
              }).then(function (success) {
                _this13.updateStoredImages(fileName).then(function (mensaje) {
                  resolve(true);
                });
              }, function (error) {
                resolve(false);
                console.log("error: ", error);
              });
            } else {
              var myPath = fullPath;
              var ext = myPath.split(".").pop();
              var d = Date.now();
              var newName = "".concat(d, ".").concat(ext);
              var name = myPath.substr(myPath.lastIndexOf("/") + 1);
              console.log('name', name);
              var copyFrom = myPath.substr(0, myPath.lastIndexOf("/") + 1);
              console.log('copyFrom', copyFrom);

              var copyTo = _this13.file.externalCacheDirectory + _this13.selectFolder();

              console.log('copyTo', copyTo);
              console.log('newName', newName);

              _this13.file.writeFile(copyTo, newName, blob).then(function (success) {
                console.log('success');

                _this13.updateStoredImages(newName).then(function (mensaje) {
                  console.log('updateStoredImages:', mensaje);
                  resolve(true);
                });
              }, function (error) {
                resolve(false);
                console.log("error: ", error);
              })["catch"](function (err) {
                return console.log(err);
              });

              console.log('11');
            }
          });
        }
      }, {
        key: "openImage",
        value: function openImage(image) {
          this.photoViewer.show(image.filePath);
        }
      }, {
        key: "openModal",
        value: function openModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var modal;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    this.storage.set("Current_Folder", this.selectFolder());
                    _context15.next = 3;
                    return this.modalController.create({
                      component: src_app_pages_modals_delete_modal_delete_modal_page__WEBPACK_IMPORTED_MODULE_11__["DeleteModalPage"]
                    });

                  case 3:
                    modal = _context15.sent;
                    modal.present();
                    _context15.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    this.loading = true;
                    this.loadImages();

                  case 9:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "prepareFilesToUpload",
        value: function prepareFilesToUpload(orderId, isClose, isTemp, token) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _this14 = this;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    console.log("Flag de temp ", isTemp);
                    this.temp = isTemp === "false" ? false : true;
                    console.log("El valor de la variable inter temp ", this.temp);
                    this.closed = isClose === "false" ? false : true;
                    console.log(this.selectFolder());
                    _context16.next = 7;
                    return this.loadImages().then(function (mensaje) {
                      console.log("uploading files order ", orderId);

                      _this14.uploadFiles(orderId, isClose, isTemp, token);
                    });

                  case 7:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "uploadFiles",
        value: function uploadFiles(orderId, isClose, isTemp, token) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var i, imageProccessed;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    if (!(this.images.length < 1)) {
                      _context17.next = 3;
                      break;
                    }

                    console.log("uploading files length < 1 return");
                    return _context17.abrupt("return");

                  case 3:
                    i = 0;

                  case 4:
                    if (!(i < this.images.length)) {
                      _context17.next = 18;
                      break;
                    }

                    _context17.prev = 5;
                    console.log("uploading files processing " + i);
                    _context17.next = 9;
                    return this.startUpload(this.images[i], orderId, isClose, isTemp, token);

                  case 9:
                    imageProccessed = _context17.sent;
                    _context17.next = 15;
                    break;

                  case 12:
                    _context17.prev = 12;
                    _context17.t0 = _context17["catch"](5);
                    console.log('uploadFiles.error', _context17.t0);

                  case 15:
                    i++;
                    _context17.next = 4;
                    break;

                  case 18:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this, [[5, 12]]);
          }));
        }
      }, {
        key: "startUpload",
        value: function startUpload(imgEntry, orderId, isClose, isTemp, token) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var _this15 = this;

            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    console.log('antes del bug', imgEntry);
                    this.file.resolveLocalFilesystemUrl(imgEntry.filePath).then(function (entry) {
                      entry.file(function (file) {
                        return _this15.readFile(file, orderId, isClose, isTemp, token);
                      });
                    })["catch"](function (err) {
                      console.log("Error while reading file.", err);
                    });

                  case 2:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "readFile",
        value: function readFile(file, orderId, isClose, isTemp, token) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var _this16 = this;

            var reader;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    reader = new FileReader();

                    reader.onload = function () {
                      var formData = new FormData();
                      var imgBlob = new Blob([reader.result], {
                        type: file.type
                      });
                      formData.append("file", imgBlob, file.name);

                      _this16.uploadImageData(formData, orderId, isClose, isTemp, token);
                    };

                    reader.readAsArrayBuffer(file);

                  case 3:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19);
          }));
        }
      }, {
        key: "uploadImageData",
        value: function uploadImageData(formData, orderId, isClose, isTemp, token) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var _this17 = this;

            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    this.progress.percentage = 0;
                    _context20.next = 3;
                    return this.uploadService.pushFileToStorage(formData, orderId, isClose, isTemp, token).subscribe(function (event) {
                      if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].UploadProgress) {
                        _this17.progress.percentage = Math.round(100 * event.loaded / event.total);
                      } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpResponse"]) {// alert("File Successfully Uploaded");
                      }
                    });

                  case 3:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }]);

      return ImageSliderComponent;
    }();

    ImageSliderComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
      }, {
        type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__["PhotoViewer"]
      }, {
        type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
      }, {
        type: _services_manage_files_service_service__WEBPACK_IMPORTED_MODULE_10__["ManageFilesServiceService"]
      }, {
        type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_7__["MediaCapture"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ionic_native_image_resizer_ngx__WEBPACK_IMPORTED_MODULE_12__["ImageResizer"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageSliderComponent.prototype, "upload", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageSliderComponent.prototype, "orderId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageSliderComponent.prototype, "closed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageSliderComponent.prototype, "temp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageSliderComponent.prototype, "loadTemp", void 0);
    ImageSliderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-image-slider",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./image-slider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-slider/image-slider.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./image-slider.component.scss */
      "./src/app/components/image-slider/image-slider.component.scss"))["default"]]
    })], ImageSliderComponent);
    /***/
  },

  /***/
  "./src/app/components/popemail/popemail.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/popemail/popemail.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPopemailPopemailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wZW1haWwvcG9wZW1haWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/popemail/popemail.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/popemail/popemail.component.ts ***!
    \***********************************************************/

  /*! exports provided: PopemailComponent */

  /***/
  function srcAppComponentsPopemailPopemailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopemailComponent", function () {
      return PopemailComponent;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");

    var PopemailComponent = /*#__PURE__*/function () {
      function PopemailComponent(alertController, apiService, ctlPopOver) {
        _classCallCheck(this, PopemailComponent);

        this.alertController = alertController;
        this.apiService = apiService;
        this.ctlPopOver = ctlPopOver;
        this.email = '';
      }

      _createClass(PopemailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "processRequest",
        value: function processRequest() {
          var _this18 = this;

          if (!this.email || this.email.trim() === '') {
            this.presentAlert('El correo electrónico es requerido.');
            return;
          }

          if (!this.isEmail(this.email.trim())) {
            this.presentAlert('El correo electrónico no es válido.');
            return;
          }

          var passReset = {
            'entity': 'W',
            'email': this.email.trim()
          };
          this.apiService.postEvent(passReset, 'resetPassword').subscribe(function (response) {
            if (response.isValid) {
              _this18.presentAlert('Se ha enviado un correo electrónico con las instrucciones para recuperar su contraseña.');

              _this18.ctlPopOver.dismiss();
            } else {
              _this18.presentAlert(response.errorMessage);
            }
          }, function (error) {
            console.log('error en login', error);
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(messageAn) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var alert;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.alertController.create({
                      header: "Job Exchange",
                      subHeader: "Olvidé mi contraseña",
                      message: messageAn,
                      buttons: ["OK"]
                    });

                  case 2:
                    alert = _context21.sent;
                    _context21.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "isEmail",
        value: function isEmail(email) {
          var serchfind;
          email = email.trim();
          var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
          serchfind = regexp.test(email);
          return serchfind;
        }
      }]);

      return PopemailComponent;
    }();

    PopemailComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    PopemailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popemail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./popemail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popemail/popemail.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./popemail.component.scss */
      "./src/app/components/popemail/popemail.component.scss"))["default"]]
    })], PopemailComponent);
    /***/
  },

  /***/
  "./src/app/components/rating/rating.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/rating/rating.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRatingRatingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/rating/rating.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/rating/rating.component.ts ***!
    \*******************************************************/

  /*! exports provided: RatingComponent */

  /***/
  function srcAppComponentsRatingRatingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
      return RatingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RatingComponent = /*#__PURE__*/function () {
      function RatingComponent() {
        _classCallCheck(this, RatingComponent);

        this.ratingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(RatingComponent, [{
        key: "rate",
        value: function rate(index) {
          this.rating = index;
          this.ratingChange.emit(this.rating);
        }
      }, {
        key: "getColor",
        value: function getColor(index) {
          if (this.isAboveRating(index)) {
            return COLORS.GREY;
          }

          switch (this.rating) {
            case 1:
            case 2:
              return COLORS.RED;

            case 3:
              return COLORS.YELLOW;

            case 4:
            case 5:
              return COLORS.GREEN;

            default:
              return COLORS.GREY;
          }
        }
      }, {
        key: "isAboveRating",
        value: function isAboveRating(index) {
          return index > this.rating;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RatingComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RatingComponent.prototype, "rating", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RatingComponent.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RatingComponent.prototype, "ratingChange", void 0);
    RatingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-rating",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./rating.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rating/rating.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./rating.component.scss */
      "./src/app/components/rating/rating.component.scss"))["default"]]
    })], RatingComponent);
    var COLORS;

    (function (COLORS) {
      COLORS["GREY"] = "#E0E0E0";
      COLORS["GREEN"] = "#76FF03";
      COLORS["YELLOW"] = "#FFCA28";
      COLORS["RED"] = "#DD2C00";
    })(COLORS || (COLORS = {}));
    /***/

  },

  /***/
  "./src/app/components/shared.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/components/shared.module.ts ***!
    \*********************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppComponentsSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _popemail_popemail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./popemail/popemail.component */
    "./src/app/components/popemail/popemail.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./image-slider/image-slider.component */
    "./src/app/components/image-slider/image-slider.component.ts");
    /* harmony import */


    var _rating_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./rating/rating.component */
    "./src/app/components/rating/rating.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]],
      declarations: [_popemail_popemail_component__WEBPACK_IMPORTED_MODULE_3__["PopemailComponent"], _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_6__["ImageSliderComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_7__["RatingComponent"]],
      exports: [_popemail_popemail_component__WEBPACK_IMPORTED_MODULE_3__["PopemailComponent"], _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_6__["ImageSliderComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_7__["RatingComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");

    var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, ionicStorage) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.ionicStorage = ionicStorage;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this19 = this;

          return new Promise(function (resolve, reject) {
            _this19.ionicStorage.get('token').then(function (result) {
              if (result) {
                try {
                  if (!helper.isTokenExpired(result)) {
                    resolve(true);
                  } else {
                    _this19.ionicStorage.clear();

                    _this19.router.navigate(['/login']);

                    resolve(false);
                  }
                } catch (error) {
                  console.error(JSON.stringify(error));

                  _this19.ionicStorage.get('welcomepage').then(function (result2) {
                    if (result2) {
                      _this19.ionicStorage.clear();

                      _this19.router.navigate(['/login']);

                      resolve(false);
                    } else {
                      _this19.ionicStorage.clear();

                      _this19.router.navigate(['/welcome']);

                      resolve(false);
                    }
                  });
                } // const decoded = helper.decodeToken(result);
                // console.log('decoded ', decoded);

              } else {
                _this19.ionicStorage.get('welcomepage').then(function (result2) {
                  if (result2) {
                    _this19.ionicStorage.clear();

                    _this19.router.navigate(['/login']);

                    resolve(false);
                  } else {
                    _this19.ionicStorage.clear();

                    _this19.router.navigate(['/welcome']);

                    resolve(false);
                  }
                });
              }
            })["catch"](function (err) {
              return console.log(err);
            });
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/pages/modals/delete-modal/delete-modal-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/modals/delete-modal/delete-modal-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: DeleteModalPageRoutingModule */

  /***/
  function srcAppPagesModalsDeleteModalDeleteModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteModalPageRoutingModule", function () {
      return DeleteModalPageRoutingModule;
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


    var _delete_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./delete-modal.page */
    "./src/app/pages/modals/delete-modal/delete-modal.page.ts");

    var routes = [{
      path: '',
      component: _delete_modal_page__WEBPACK_IMPORTED_MODULE_3__["DeleteModalPage"]
    }];

    var DeleteModalPageRoutingModule = function DeleteModalPageRoutingModule() {
      _classCallCheck(this, DeleteModalPageRoutingModule);
    };

    DeleteModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeleteModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/modals/delete-modal/delete-modal.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/modals/delete-modal/delete-modal.module.ts ***!
    \******************************************************************/

  /*! exports provided: DeleteModalPageModule */

  /***/
  function srcAppPagesModalsDeleteModalDeleteModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteModalPageModule", function () {
      return DeleteModalPageModule;
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


    var _delete_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./delete-modal-routing.module */
    "./src/app/pages/modals/delete-modal/delete-modal-routing.module.ts");
    /* harmony import */


    var _delete_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./delete-modal.page */
    "./src/app/pages/modals/delete-modal/delete-modal.page.ts");

    var DeleteModalPageModule = function DeleteModalPageModule() {
      _classCallCheck(this, DeleteModalPageModule);
    };

    DeleteModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _delete_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeleteModalPageRoutingModule"]],
      declarations: [_delete_modal_page__WEBPACK_IMPORTED_MODULE_6__["DeleteModalPage"]]
    })], DeleteModalPageModule);
    /***/
  },

  /***/
  "./src/app/pages/modals/delete-modal/delete-modal.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/modals/delete-modal/delete-modal.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModalsDeleteModalDeleteModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFscy9kZWxldGUtbW9kYWwvZGVsZXRlLW1vZGFsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/modals/delete-modal/delete-modal.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/modals/delete-modal/delete-modal.page.ts ***!
    \****************************************************************/

  /*! exports provided: DeleteModalPage */

  /***/
  function srcAppPagesModalsDeleteModalDeleteModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteModalPage", function () {
      return DeleteModalPage;
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


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");

    var DeleteModalPage = /*#__PURE__*/function () {
      function DeleteModalPage(file, modalController, storage, webView) {
        _classCallCheck(this, DeleteModalPage);

        this.file = file;
        this.modalController = modalController;
        this.storage = storage;
        this.webView = webView;
        this.files = [];
        this.MEDIA_FOLDER_NAME = "";
      }

      _createClass(DeleteModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.storage.get("Current_Folder").then(function (name) {
            console.log("Este es el path: ", name);
            _this20.MEDIA_FOLDER_NAME = name;

            _this20.loadFiles();
          });
        }
      }, {
        key: "loadFiles",
        value: function loadFiles() {
          var _this21 = this;

          // this.files = [];
          // this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(
          //   res => {
          //     this.files = res;
          //   },
          //   err => console.log("error loading files: ", err)
          // );
          this.storage.get(this.MEDIA_FOLDER_NAME).then(function (images) {
            console.log("Lo que tiene en memo: ", JSON.stringify(images));

            if (images) {
              var arr = JSON.parse(images);
              _this21.files = [];

              var _iterator2 = _createForOfIteratorHelper(arr),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var img = _step2.value;
                  var filePath = _this21.file.externalCacheDirectory + _this21.MEDIA_FOLDER_NAME + "/" + img;

                  var resPath = _this21.pathForImage(filePath);

                  _this21.files.push({
                    name: img,
                    path: resPath,
                    filePath: filePath
                  });
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          });
        }
      }, {
        key: "pathForImage",
        value: function pathForImage(img) {
          if (img === null) {
            return "";
          } else {
            var converted = this.webView.convertFileSrc(img);
            return converted;
          }
        }
      }, {
        key: "deleteFile",
        value: function deleteFile(imgEntry, position) {
          var _this22 = this;

          this.files.splice(position, 1);
          this.storage.get(this.MEDIA_FOLDER_NAME).then(function (images) {
            var arr = JSON.parse(images);
            var filtered = arr.filter(function (name) {
              return name != imgEntry.name;
            });

            _this22.storage.set(_this22.MEDIA_FOLDER_NAME, JSON.stringify(filtered));

            var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf("/") + 1);

            _this22.file.removeFile(correctPath, imgEntry.name).then(function (res) {
              console.log("Imagen Eliminada");
            });
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalController.dismiss();
        }
      }]);

      return DeleteModalPage;
    }();

    DeleteModalPage.ctorParameters = function () {
      return [{
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"]
      }];
    };

    DeleteModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./delete-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modals/delete-modal/delete-modal.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./delete-modal.page.scss */
      "./src/app/pages/modals/delete-modal/delete-modal.page.scss"))["default"]]
    })], DeleteModalPage);
    /***/
  },

  /***/
  "./src/app/pages/orders-details/orders-details-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/orders-details/orders-details-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: OrdersDetailsPageRoutingModule */

  /***/
  function srcAppPagesOrdersDetailsOrdersDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersDetailsPageRoutingModule", function () {
      return OrdersDetailsPageRoutingModule;
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


    var _orders_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./orders-details.page */
    "./src/app/pages/orders-details/orders-details.page.ts");

    var routes = [{
      path: '',
      component: _orders_details_page__WEBPACK_IMPORTED_MODULE_3__["OrdersDetailsPage"]
    }];

    var OrdersDetailsPageRoutingModule = function OrdersDetailsPageRoutingModule() {
      _classCallCheck(this, OrdersDetailsPageRoutingModule);
    };

    OrdersDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrdersDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/orders-details/orders-details.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/orders-details/orders-details.module.ts ***!
    \***************************************************************/

  /*! exports provided: OrdersDetailsPageModule */

  /***/
  function srcAppPagesOrdersDetailsOrdersDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersDetailsPageModule", function () {
      return OrdersDetailsPageModule;
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


    var _orders_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./orders-details-routing.module */
    "./src/app/pages/orders-details/orders-details-routing.module.ts");
    /* harmony import */


    var _orders_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./orders-details.page */
    "./src/app/pages/orders-details/orders-details.page.ts");
    /* harmony import */


    var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/shared.module */
    "./src/app/components/shared.module.ts");

    var OrdersDetailsPageModule = function OrdersDetailsPageModule() {
      _classCallCheck(this, OrdersDetailsPageModule);
    };

    OrdersDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _orders_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersDetailsPageRoutingModule"]],
      declarations: [_orders_details_page__WEBPACK_IMPORTED_MODULE_6__["OrdersDetailsPage"]]
    })], OrdersDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/orders-details/orders-details.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/orders-details/orders-details.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrdersDetailsOrdersDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  white-space: normal !important;\n  text-align: justify;\n  font-size: 10px;\n  line-height: 1.4;\n}\n\nion-item {\n  --border-radius: 1em;\n  --border-width: 0.1em !important;\n  margin-bottom: 0.3em;\n}\n\n.icon {\n  display: inline-block;\n  font-size: 12px;\n  vertical-align: middle;\n}\n\n.text {\n  font-size: 12px;\n  display: inline-block;\n  vertical-align: middle;\n  color: darkblue;\n}\n\n#map_canvas {\n  width: 100%;\n  height: 45vh;\n}\n\nion-avatar {\n  width: 90px;\n  height: 90px;\n  margin-left: 10px;\n  margin-right: 30px;\n  margin-top: -35px;\n  border: solid 3px #D95A2B;\n}\n\n.gallery {\n  width: 100%;\n  height: 48vh;\n}\n\nion-card {\n  display: flex;\n  flex-direction: column;\n  margin: 0 !important;\n  width: 500px;\n}\n\nion-content ion-card {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWx2YXJhZG8vZGVzYXJyb2xsby9lbmlhY2d0L2lvbmljL3hKb2JzL3hKb2JzV29ya2VyL3NyYy9hcHAvcGFnZXMvb3JkZXJzLWRldGFpbHMvb3JkZXJzLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vcmRlcnMtZGV0YWlscy9vcmRlcnMtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlcnMtZGV0YWlscy9vcmRlcnMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwLjFlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGNvbG9yOiBkYXJrYmx1ZTtcbn1cblxuI21hcF9jYW52YXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDV2aDtcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAtMzVweDtcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjRDk1QTJCO1xufVxuXG4uZ2FsbGVyeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0OHZoO1xufVxuXG5pb24tY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA1MDBweDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xufSIsInAge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDFlbTtcbiAgLS1ib3JkZXItd2lkdGg6IDAuMWVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAuM2VtO1xufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogZGFya2JsdWU7XG59XG5cbiNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDV2aDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IC0zNXB4O1xuICBib3JkZXI6IHNvbGlkIDNweCAjRDk1QTJCO1xufVxuXG4uZ2FsbGVyeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4dmg7XG59XG5cbmlvbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/orders-details/orders-details.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/orders-details/orders-details.page.ts ***!
    \*************************************************************/

  /*! exports provided: OrdersDetailsPage */

  /***/
  function srcAppPagesOrdersDetailsOrdersDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersDetailsPage", function () {
      return OrdersDetailsPage;
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


    var _components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/image-slider/image-slider.component */
    "./src/app/components/image-slider/image-slider.component.ts");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/google-maps */
    "./node_modules/@ionic-native/google-maps/index.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");

    var OrdersDetailsPage = /*#__PURE__*/function () {
      function OrdersDetailsPage(modalController, apiService, file, router, plt, alertController, nav, loadingController, imageSlider, actRoute, storage, photoViewer, alertCtrl, toastController) {
        _classCallCheck(this, OrdersDetailsPage);

        this.modalController = modalController;
        this.apiService = apiService;
        this.file = file;
        this.router = router;
        this.plt = plt;
        this.alertController = alertController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.imageSlider = imageSlider;
        this.actRoute = actRoute;
        this.storage = storage;
        this.photoViewer = photoViewer;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.loadingSpin = null;
        this.segment = 0;
        this.rating = 0;
        this.closing = false;
        this.ubicacion = false; // loading: any;

        this.user = "";
        this.isTemp = "false";
        this.sliderOpts = {
          zoom: false,
          slidesPerview: 1.5,
          centeredSlides: true,
          spaceBetween: 20
        };
        this.homeOwnerPics = []; //Control de botones de accion

        this.finalize = false;
        this.accept = false;
        this.reject = false;
        this.proposeDate = false;
        this.startOrder = false;
        this.endDate = true;
        this.description = '';
        this.duration = '';

        if (this.router.getCurrentNavigation().extras.state) {
          this.orderDetails = this.router.getCurrentNavigation().extras.state.order;
          this.token = this.router.getCurrentNavigation().extras.state.token;
          this.workerId = this.router.getCurrentNavigation().extras.state.workerId;

          if (this.orderDetails.status === 'NEW') {
            this.proposeDate = true;
            this.accept = true;
            this.reject = true;
            this.finalize = false;
            this.startOrder = false;
            this.endDate = false;
          } else if (this.orderDetails.status === 'ACCEPTED') {
            this.proposeDate = false;
            this.accept = false;
            this.reject = false;
            this.finalize = false;
            this.startOrder = true;
            this.endDate = false;
          } else if (this.orderDetails.status === 'PUBLIC') {
            this.proposeDate = true;
            this.accept = true;
            this.reject = false;
            this.finalize = false;
            this.startOrder = false;
            this.endDate = false;
          } else if (this.orderDetails.status === 'CHANGE_DATE') {
            this.proposeDate = false;
            this.accept = false;
            this.reject = false;
            this.finalize = false;
            this.startOrder = false;
            this.endDate = false;
          } else if (this.orderDetails.status === 'IN_PROGRESS') {
            this.proposeDate = false;
            this.accept = false;
            this.reject = false;
            this.finalize = true;
            this.startOrder = false;
            this.endDate = false;

            if (this.orderDetails.startTime) {
              var startTimeTmp = new Date(this.orderDetails.startTime).getTime();
              var currDate = new Date().getTime();
              var diffMs = currDate - startTimeTmp;
              var diffHrs = Math.ceil(diffMs / 1000 / 60 / 60);
              this.duration = ' ' + diffHrs + ' hrs';
            } else {
              this.duration = ' 0 hrs';
            }
          }

          if (this.orderDetails.tempOrderId) {
            this.isTemp = "true";
          }

          if (this.orderDetails.latitude && this.orderDetails.longitude) {
            this.ubicacion = true;
          }

          this.loadHomeOwnerImages();
        }
      } // async presentLoading() {
      //   this.loading = await this.loadingController.create({
      //     message: "Please wait...",
      //   });
      //   await this.loading.present();
      //   const { role, data } = await this.loading.onDidDismiss();
      //   console.log("Loading dismissed!");
      // }


      _createClass(OrdersDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return this.plt.ready();

                  case 2:
                    _context22.next = 4;
                    return this.createMap();

                  case 4:
                    _context22.next = 6;
                    return this.goToMyLocation();

                  case 6:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    this.slider.lockSwipes(false);
                    _context23.next = 3;
                    return this.slider.slideTo(this.segment);

                  case 3:
                    this.slider.lockSwipes(true);

                  case 4:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "slideChanged",
        value: function slideChanged() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.slider.getActiveIndex();

                  case 2:
                    this.segment = _context24.sent;

                  case 3:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "onChangeRating",
        value: function onChangeRating(index) {
          this.rating = index;
          console.log("rating: " + this.rating);
        }
      }, {
        key: "createNewOrder",
        value: function createNewOrder() {
          this.nav.navigateForward("/new-order");
        }
      }, {
        key: "setCloseOrder",
        value: function setCloseOrder() {
          this.closing = true;
        }
      }, {
        key: "closeOrder",
        value: function closeOrder() {
          if (this.description == "") {
            this.presentAlert("No ha ingresado comentario.", false);
          } else {
            var dateFormatted = this.formatDate(new Date());
            var reqField = [{
              fieldName: "workOrderId",
              fieldValue: this.orderDetails.orderId + ""
            }, {
              fieldName: "workerId",
              fieldValue: this.workerId
            }, {
              fieldName: "status",
              fieldValue: 'FINISHED'
            }, {
              fieldName: "isPublicOrder",
              fieldValue: false + ""
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
            this.executeClose(reqField);
          }
        }
      }, {
        key: "executeClose",
        value: function executeClose(reqField) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var _this23 = this;

            var mensaje;
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return this.loadingController.create({
                      message: "Validando el usuario..."
                    });

                  case 2:
                    this.loadingSpin = _context26.sent;
                    _context26.next = 5;
                    return this.loadingSpin.present();

                  case 5:
                    //  console.log('reqField',reqField);
                    mensaje = "";
                    this.loadingSpin.dismiss();
                    this.apiService.putItemsByMethod("woAssigned", "acceptOrRejectOrders", reqField, this.token).toPromise().then(function (result) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee25$(_context25) {
                          while (1) {
                            switch (_context25.prev = _context25.next) {
                              case 0:
                                console.log('result', result);

                                if (result === -1) {
                                  mensaje = "Error al finalizar registro de orden.";
                                } else if (result === 1) {
                                  mensaje = "Orden finalizada con exito.";
                                }

                                if (this.loadingSpin != null) {
                                  this.loadingSpin.dismiss();
                                }

                                console.log(mensaje);
                                _context25.next = 6;
                                return this.alertCtrl.create({
                                  header: "Job Exchange",
                                  subHeader: "Solicitud de cambio de fecha enviado",
                                  message: 'Orden finalizada con exito',
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
                                alert = _context25.sent;
                                this.cargarImagenes();
                                _context25.next = 10;
                                return alert.present();

                              case 10:
                                this.router.navigate(['/home']);

                              case 11:
                              case "end":
                                return _context25.stop();
                            }
                          }
                        }, _callee25, this);
                      }));
                    })["catch"](function (e) {
                      console.log("error,", e);

                      if (_this23.loadingSpin != null) {
                        _this23.loadingSpin.dismiss();
                      }
                    });

                  case 8:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "verUbicacion",
        value: function verUbicacion() {
          var url = 'https://www.google.com/maps/dir/' + this.orderDetails.latitude + ',' + this.orderDetails.longitude + '/'; // console.log('Abriendo Mapa URL ' + url);

          window.open(url, '_system');
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(message, back) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
            var alert;
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.next = 2;
                    return this.alertController.create({
                      header: "Cierre de Orden",
                      subHeader: "Job Exchange",
                      message: message,
                      buttons: ["OK"]
                    });

                  case 2:
                    alert = _context27.sent;
                    _context27.next = 5;
                    return alert.present();

                  case 5:
                    if (back) {
                      this.nav.navigateForward("/home");
                    }

                  case 6:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "createMap",
        value: function createMap() {
          this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMaps"].create("map_canvas", {
            camera: {
              zoom: 13,
              tilt: 0
            }
          }); // Wait the MAP_READY before using any methods.

          this.map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsEvent"].MAP_READY).then(function () {
            console.log('Map is ready!'); // this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe(
            //     (data) => {
            //         console.log(data);
            //         alert("Click MAP");
            //     }
            // );
          });
        }
      }, {
        key: "goToMyLocation",
        value: function goToMyLocation() {
          var _this24 = this;

          this.map.getMyLocation().then(function (location) {
            var workerMark = _this24.map.addMarkerSync({
              title: "¡Tu estás aquí!",
              position: location.latLng,
              animation: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsAnimation"].DROP //icon: "assets/location/casa.png",

            });
          })["catch"](function (error) {
            console.error(JSON.stringify(error));
          });
          this.homeOwnerMark = this.map.addMarkerSync({
            title: "Dirección: " + this.orderDetails.address + ", Códidgo Zip: " + this.orderDetails.zipCode,
            position: {
              lat: this.orderDetails.latitude,
              lng: this.orderDetails.longitude
            },
            animation: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsAnimation"].DROP,
            icon: "assets/location/casa.png"
          });
          this.homeOwnerMark.showInfoWindow(); // Move the map camera to the location with animation

          this.map.moveCamera({
            target: {
              lat: this.orderDetails.latitude,
              lng: this.orderDetails.longitude
            },
            zoom: 13,
            tilt: 0
          });
        }
      }, {
        key: "imagePreview",
        value: function imagePreview(img) {
          this.photoViewer.show(img);
        }
      }, {
        key: "cargarImagenes",
        value: function cargarImagenes() {
          try {
            this.imageSlider.prepareFilesToUpload(this.orderDetails.orderId, true, false, this.token);
          } catch (e) {
            console.log('Error al cargar imagenes');
          }
        }
      }, {
        key: "updateStateOfOrder",
        value: function updateStateOfOrder(workOrderId, status, orderStatus) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            var _this25 = this;

            var isPublic, reqField, alertMessage, alert;
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    isPublic = orderStatus == 'PUBLIC';
                    reqField = [{
                      fieldName: "workOrderId",
                      fieldValue: workOrderId + ""
                    }, {
                      fieldName: "workerId",
                      fieldValue: this.workerId
                    }, {
                      fieldName: "status",
                      fieldValue: status
                    }, {
                      fieldName: "isPublicOrder",
                      fieldValue: isPublic + ""
                    }, {
                      fieldName: "publicOrderId",
                      fieldValue: this.orderDetails.publicWorksId + ""
                    }];
                    console.log('Request ' + JSON.stringify(reqField));
                    alertMessage = "¿Está seguro de querer ";

                    if (status === "ACCEPTED") {
                      alertMessage = alertMessage + "aceptar";
                    } else {
                      alertMessage = alertMessage + "rechazar";
                    }

                    alertMessage = alertMessage + " estar orden de trabajo?";
                    _context28.next = 8;
                    return this.alertCtrl.create({
                      header: "Job Exchange",
                      subHeader: "Revisión de Orden de Trabajo",
                      message: alertMessage,
                      buttons: [{
                        text: "No",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler() {
                          console.log("Confirm Cancel");
                        }
                      }, {
                        text: "Si",
                        handler: function handler() {
                          _this25.processOrder(reqField);
                        }
                      }]
                    });

                  case 8:
                    alert = _context28.sent;
                    _context28.next = 11;
                    return alert.present();

                  case 11:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "processOrder",
        value: function processOrder(reqField) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
            var _this26 = this;

            var mensaje;
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.next = 2;
                    return this.loadingController.create({
                      message: "Validando el usuario..."
                    });

                  case 2:
                    this.loadingSpin = _context30.sent;
                    _context30.next = 5;
                    return this.loadingSpin.present();

                  case 5:
                    //  console.log('reqField',reqField);
                    mensaje = "";
                    this.apiService.putItemsByMethod("woAssigned", "acceptOrRejectOrders", reqField, this.token).toPromise().then(function (result) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this26, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee29$(_context29) {
                          while (1) {
                            switch (_context29.prev = _context29.next) {
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
                                _context29.next = 6;
                                return this.alertCtrl.create({
                                  header: "Job Exchange",
                                  subHeader: "Detalle de Orden de Trabajo",
                                  message: mensaje,
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
                                alert = _context29.sent;
                                _context29.next = 9;
                                return alert.present();

                              case 9:
                                this.router.navigate(['/home']);

                              case 10:
                              case "end":
                                return _context29.stop();
                            }
                          }
                        }, _callee29, this);
                      }));
                    })["catch"](function (e) {
                      console.log("error,", e);

                      if (_this26.loadingSpin != null) {
                        _this26.loadingSpin.dismiss();
                      }
                    });

                  case 7:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          }));
        }
      }, {
        key: "proposeNewDate",
        value: function proposeNewDate() {
          var order = this.orderDetails;
          var navigationExtras = {
            state: {
              status: status,
              order: order,
              token: this.token,
              workerId: this.workerId
            }
          };
          this.router.navigate(["new-date"], navigationExtras);
        }
      }, {
        key: "processStartOrder",
        value: function processStartOrder() {
          var dateFormatted = this.formatDate(new Date());
          console.log('fecha formateada ', dateFormatted);
          var reqField = [{
            fieldName: "workOrderId",
            fieldValue: this.orderDetails.orderId + ""
          }, {
            fieldName: "workerId",
            fieldValue: this.workerId
          }, {
            fieldName: "status",
            fieldValue: 'IN_PROGRESS'
          }, {
            fieldName: "isPublicOrder",
            fieldValue: false + ""
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
            fieldValue: 'IN_PROGRESS' + ""
          }];
          this.orderStartAsync(reqField);
        }
      }, {
        key: "orderStartAsync",
        value: function orderStartAsync(reqField) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
            var _this27 = this;

            var mensaje;
            return regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    _context32.next = 2;
                    return this.loadingController.create({
                      message: "Validando el usuario..."
                    });

                  case 2:
                    this.loadingSpin = _context32.sent;
                    _context32.next = 5;
                    return this.loadingSpin.present();

                  case 5:
                    //  console.log('reqField',reqField);
                    mensaje = "";
                    this.apiService.putItemsByMethod("woAssigned", "acceptOrRejectOrders", reqField, this.token).toPromise().then(function (result) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this27, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee31$(_context31) {
                          while (1) {
                            switch (_context31.prev = _context31.next) {
                              case 0:
                                console.log('result', result);

                                if (result === -1) {
                                  mensaje = "Error al iniciar registro de orden.";
                                } else if (result === 1) {
                                  mensaje = "Inicio de orden registrado.";
                                }

                                if (this.loadingSpin != null) {
                                  this.loadingSpin.dismiss();
                                }

                                console.log(mensaje);
                                _context31.next = 6;
                                return this.alertCtrl.create({
                                  header: "Job Exchange",
                                  subHeader: "Inicio de orden",
                                  message: 'Inicio de orden registrado',
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
                                alert = _context31.sent;
                                _context31.next = 9;
                                return alert.present();

                              case 9:
                                this.router.navigate(['/home']);

                              case 10:
                              case "end":
                                return _context31.stop();
                            }
                          }
                        }, _callee31, this);
                      }));
                    })["catch"](function (e) {
                      console.log("error,", e);

                      if (_this27.loadingSpin != null) {
                        _this27.loadingSpin.dismiss();
                      }
                    });

                  case 7:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32, this);
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
        key: "loadHomeOwnerImages",
        value: function loadHomeOwnerImages() {
          var _this28 = this;

          var reqField = [{
            fieldName: "isClose",
            fieldValue: 'false'
          }, // { fieldName: "isTemp", fieldValue: this.isTemp },
          {
            fieldName: "isTemp",
            fieldValue: 'false'
          }, {
            fieldName: "orderId",
            fieldValue: this.orderDetails.orderId.toString()
          }];
          this.apiService.getItemsByMethodWithoutContext("urlFilesByOrderId", "", reqField, this.token).subscribe(function (resp) {
            // console.log('resp',resp);
            _this28.homeOwnerPics = resp;
          }, function (error2) {
            console.error(JSON.stringify(error2));
          });
        }
      }]);

      return OrdersDetailsPage;
    }();

    OrdersDetailsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_4__["ImageSliderComponent"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__["PhotoViewer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("slides", {
      "static": true
    })], OrdersDetailsPage.prototype, "slider", void 0);
    OrdersDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      providers: [_components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_4__["ImageSliderComponent"]],
      selector: 'app-orders-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./orders-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders-details/orders-details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./orders-details.page.scss */
      "./src/app/pages/orders-details/orders-details.page.scss"))["default"]]
    })], OrdersDetailsPage);
    /***/
  },

  /***/
  "./src/app/push.service.ts":
  /*!*********************************!*\
    !*** ./src/app/push.service.ts ***!
    \*********************************/

  /*! exports provided: PushService */

  /***/
  function srcAppPushServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PushService", function () {
      return PushService;
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


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");

    var PushService = /*#__PURE__*/function () {
      function PushService(oneSignal) {
        _classCallCheck(this, PushService);

        this.oneSignal = oneSignal;
      }

      _createClass(PushService, [{
        key: "initialConfiguration",
        value: function initialConfiguration() {
          var _this29 = this;

          console.log('Iniciando oneSignal');
          this.oneSignal.startInit('7612d0e6-a197-45a6-9ff8-9f4ed4244f6c', '51878476605');
          this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
          this.oneSignal.handleNotificationReceived().subscribe(function (notif) {
            console.log('Notificacion recibida', notif);
          });
          this.oneSignal.handleNotificationOpened().subscribe(function (notif) {
            console.log('Notificacion abierta', notif);
          });
          this.oneSignal.getIds().then(function (usrDev) {
            _this29.deviceId = usrDev.userId;
            console.log('deviceId ' + usrDev.userId);
          });
          this.oneSignal.endInit();
        }
      }]);

      return PushService;
    }();

    PushService.ctorParameters = function () {
      return [{
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__["OneSignal"]
      }];
    };

    PushService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PushService);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http, ionicStorage, afAuth, authService) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.ionicStorage = ionicStorage;
        this.afAuth = afAuth;
        this.authService = authService;
        this.headersWithoutToken = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          "Content-Type": "application/json"
        });
      }

      _createClass(ApiService, [{
        key: "getEvent",
        value: function getEvent(entity, token) {
          var headersToken = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: token
          });
          return this.http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase, "/backend-services/").concat(entity), {
            headers: headersToken
          });
        }
      }, {
        key: "postEvent",
        value: function postEvent(bodyParam, entity) {
          return this.http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase, "/").concat(entity), JSON.stringify(bodyParam), {
            headers: this.headersWithoutToken
          });
        }
      }, {
        key: "postEventWithToken",
        value: function postEventWithToken(bodyParam, entity, token) {
          var headersToken = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: token
          });
          return this.http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase, "/").concat(entity), JSON.stringify(bodyParam), {
            headers: headersToken
          });
        }
      }, {
        key: "putEventWithToken",
        value: function putEventWithToken(bodyParam, entity, token) {
          var headersToken = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: token
          });
          return this.http.put("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase, "/").concat(entity), JSON.stringify(bodyParam), {
            headers: headersToken
          });
        }
      }, {
        key: "externalExists",
        value: function externalExists(externalId, type) {
          return this.http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase, "/externalExists?entity=W&externalId=").concat(externalId, "&type=").concat(type), {
            headers: this.headersWithoutToken
          });
        }
      }, {
        key: "internalExists",
        value: function internalExists(username, password, type) {
          var bodyParam = {
            'entity': 'W',
            password: password,
            type: type,
            username: username
          };
          return this.http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase, "/auth"), JSON.stringify(bodyParam), {
            headers: this.headersWithoutToken
          });
        }
      }, {
        key: "changeWorkerOccupationStatus",
        value: function changeWorkerOccupationStatus(workerId, occupationId, status, hourlyRate, token) {
          var headersToken = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: token
          });
          var url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/workerOcuppations/changeStatusByWorkerIdAndOccupationId?workerId=' + workerId + '&occupationId=' + occupationId + '&status=' + status + '&hourlyRate=' + hourlyRate;
          return this.http.post(url, null, {
            headers: headersToken
          });
        }
      }, {
        key: "getItemsByMethod",
        value: function getItemsByMethod(entity, method, fields, token) {
          var headersLoc = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: token
          });
          var urlFields = "";
          var first = true;

          if (fields && fields.length > 0) {
            var _iterator3 = _createForOfIteratorHelper(fields),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var field = _step3.value;

                if (first) {
                  urlFields = field.fieldName + "=" + field.fieldValue;
                  first = false;
                } else {
                  urlFields += "&" + field.fieldName + "=" + field.fieldValue;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          var url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase + "/backend-services/" + entity + "/" + method;

          if (urlFields !== "") {
            url = url + "?" + urlFields;
          } // console.log('Consumiendo',url);


          return this.http.get(url, {
            headers: headersLoc
          });
        }
      }, {
        key: "getItemsByMethodWithoutContext",
        value: function getItemsByMethodWithoutContext(entity, method, fields, token) {
          var headersLoc = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: token
          });
          var urlFields = "";
          var first = true;

          if (fields && fields.length > 0) {
            var _iterator4 = _createForOfIteratorHelper(fields),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var field = _step4.value;

                if (first) {
                  urlFields = field.fieldName + "=" + field.fieldValue;
                  first = false;
                } else {
                  urlFields += "&" + field.fieldName + "=" + field.fieldValue;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }

          var url = "";

          if (method != "") {
            url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase + "/" + entity + "/" + method;
          } else {
            url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase + "/" + entity;
          }

          if (urlFields !== "") {
            url = url + "?" + urlFields;
          } // console.log('Consumiendo',url);


          return this.http.get(url, {
            headers: headersLoc
          });
        }
      }, {
        key: "putItemsByMethod",
        value: function putItemsByMethod(entity, method, fields, token) {
          var headersLoc = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: token
          }); // console.log(headersLoc);

          var urlFields = "";
          var first = true;

          if (fields && fields.length > 0) {
            var _iterator5 = _createForOfIteratorHelper(fields),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var field = _step5.value;

                if (first) {
                  urlFields = field.fieldName + "=" + field.fieldValue;
                  first = false;
                } else {
                  urlFields += "&" + field.fieldName + "=" + field.fieldValue;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }

          var url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase + "/backend-services/" + entity + "/" + method;

          if (urlFields !== "") {
            url = url + "?" + urlFields;
          } // console.log('Consumiendo',url);


          return this.http.put(url, JSON.stringify({}), {
            headers: headersLoc
          });
        }
      }, {
        key: "cleanStorage",
        value: function cleanStorage() {
          // this.ionicStorage.clear();
          this.ionicStorage.remove('auth-token');
          this.ionicStorage.remove('userId');
          this.ionicStorage.remove('workerObject');
          this.authService.usuario = {}; // console.log('storage cleaned');
        }
      }, {
        key: "saveStorage",
        value: function saveStorage(key, value) {
          this.ionicStorage.set(key, value);

          if (key === 'userId' || key === 'auth-token') {
            sessionStorage.setItem(key, value);
          }
        }
      }, {
        key: "updateEntity",
        value: function updateEntity(entity, id, object, token) {
          var headersObj = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: token
          });
          return this.http.put(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase + "/backend-services/" + entity + "/" + id, JSON.stringify(object), {
            headers: headersObj
          });
        }
      }, {
        key: "signOut",
        value: function signOut() {
          var _this30 = this;

          this.afAuth.auth.signOut().then(function (resp) {
            console.log('succefully signout', resp);

            _this30.cleanStorage();
          })["catch"](function (err) {
            console.log('error signing out', err);
          });
        }
      }, {
        key: "getWorkerOcuppationsByWorkerId",
        value: function getWorkerOcuppationsByWorkerId(workerId, token) {
          var headersLoc = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: token
          });
          var url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase + "/backend-services/workerOcuppations/workerOcuppationsByWorkerId?workerId=" + workerId + "&occupationStatus=true&workerOccupationStatus=true&workerStatus=true";
          return this.http.get(url, {
            headers: headersLoc
          });
        }
      }, {
        key: "getItemsByMethodCache",
        value: function getItemsByMethodCache(method, fields, token) {
          var headersLoc = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: token
          });
          var urlFields = '';
          var first = true;

          if (fields && fields.length > 0) {
            var _iterator6 = _createForOfIteratorHelper(fields),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var field = _step6.value;

                if (first) {
                  urlFields = field.fieldName + '=' + field.fieldValue;
                  first = false;
                } else {
                  urlFields += '&' + field.fieldName + '=' + field.fieldValue;
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }

          var url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/cache/' + method;

          if (urlFields !== '') {
            url = url + '?' + urlFields;
          }

          return this.http.get(url, {
            headers: headersLoc
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService() {
        _classCallCheck(this, AuthService);

        this.usuario = {};
      }

      _createClass(AuthService, [{
        key: "cargarUsuario",
        value: function cargarUsuario(nombre, email, imagen, uid, provider) {
          this.usuario.nombre = nombre;
          this.usuario.email = email;
          this.usuario.imagen = imagen;
          this.usuario.uid = uid;
          this.usuario.provider = provider;
        }
      }]);

      return AuthService;
    }();

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/manage-files-service.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/manage-files-service.service.ts ***!
    \**********************************************************/

  /*! exports provided: ManageFilesServiceService */

  /***/
  function srcAppServicesManageFilesServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageFilesServiceService", function () {
      return ManageFilesServiceService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment.prod */
    "./src/environments/environment.prod.ts");

    var ManageFilesServiceService = /*#__PURE__*/function () {
      function ManageFilesServiceService(http) {
        _classCallCheck(this, ManageFilesServiceService);

        this.http = http;
      }

      _createClass(ManageFilesServiceService, [{
        key: "pushFileToStorage",
        value: function pushFileToStorage(data, orderId, isClose, isTemp, token) {
          var headersObj = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: token,
            reportProgress: "true",
            responseType: "text"
          });
          console.log("'este es el token", token, ' url[ ' + "".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase, "/uploadFile?orderId=").concat(orderId, "&isClose=").concat(isClose, "&isTemp=").concat(isTemp));
          var newRequest = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]("POST", "".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase, "/uploadFile?orderId=").concat(orderId, "&isClose=").concat(isClose, "&isTemp=").concat(isTemp), data, {
            headers: headersObj
          });
          return this.http.request(newRequest); // this.http
          //   .post("https://x-jobs.exchange:8443/uploadFile?orderId=" + orderId, data)
          //   .subscribe(res => {
          //     console.log(res);
          //     if (res["success"]) {
          //       console.log("File upload complete.");
          //     } else {
          //       console.log("File upload failed.");
          //     }
          //   });
          // return true;
        }
      }, {
        key: "listFiles",
        value: function listFiles(id, isClose, isTemp, token) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
            var result, headersObj;
            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    headersObj = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                      "Content-Type": "application/json",
                      Authorization: token
                    });
                    _context33.next = 3;
                    return this.http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase, "\n          filesByOrderId?orderId=\n          ").concat(id, "\n          &isClose=\n          ").concat(isClose, " \n          &isTemp=\n          ").concat(isTemp), {
                      headers: headersObj
                    }).toPromise().then(function (data) {
                      result = data;
                    }, function (error) {
                      console.log("Error geting data: ", error);
                      result = [];
                    });

                  case 3:
                    return _context33.abrupt("return", result);

                  case 4:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33, this);
          }));
        }
      }, {
        key: "downloadResource",
        value: function downloadResource(fileName, id, isClose, isTemp, token) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
            var headersObj, file;
            return regeneratorRuntime.wrap(function _callee34$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    headersObj = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                      responseType: "blob",
                      Authorization: token
                    });
                    _context34.next = 3;
                    return this.http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrlBase, "/\n          downloadFile?fileName=\n          ").concat(fileName, " \n          &orderId=\n          ").concat(id, " \n          &isClose=\n          ").concat(isClose, " \n          &isTemp=\n          ").concat(isTemp), {
                      headers: headersObj
                    }).toPromise();

                  case 3:
                    file = _context34.sent;
                    return _context34.abrupt("return", file);

                  case 5:
                  case "end":
                    return _context34.stop();
                }
              }
            }, _callee34, this);
          }));
        }
      }]);

      return ManageFilesServiceService;
    }();

    ManageFilesServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ManageFilesServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ManageFilesServiceService);
    /***/
  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: true,
      backendUrlBase: 'https://x-jobs.exchange:8443',
      backendUrl: 'https://x-jobs.exchange:8443/backend-services' // backendUrlBase: 'http://localhost:8787',
      // backendUrl: 'http://localhost:8787/backend-services'

    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      backendUrlBase: 'https://x-jobs.exchange:8443/',
      backendUrl: 'https://x-jobs.exchange:8443/backend-services'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/dalvarado/desarrollo/eniacgt/ionic/xJobs/xJobsWorker/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map