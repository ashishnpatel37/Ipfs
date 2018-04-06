webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n   Angular 4 Application\n  </h1>\n</div>\n<h2>IPFS integration using angular: </h2>\n\n<app-file-upload></app-file-upload>\n<!-- <app-nest-drop-down></app-nest-drop-down> -->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__file_upload_file_upload_component__ = __webpack_require__("./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nest_drop_down_nest_drop_down_component__ = __webpack_require__("./src/app/nest-drop-down/nest-drop-down.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__file_upload_file_upload_component__["a" /* FileUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nest_drop_down_nest_drop_down_component__["a" /* NestDropDownComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatMenuModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/file-upload/file-upload.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form id='captureMedia' (ngSubmit)=\"handleSubmit($event)\">\n    <input type='file' (change)=\"captureFile($event)\" />\n  </form>\n  <br>\n  <div class=\"content\"> Hash for selected file: {{ipfsId}} </div>\n  <br>\n  <div>\n    <a href=\"https://ipfs.io/ipfs/{{ipfsId}}\">{{ipfsId}}\n    </a>\n  </div>\n  <!-- <button type=\"button\" (click)=\"display($event)\">Fetch File from IPFS</button> -->\n\n  <textarea id=\"data\" disabled rows=\"10\" cols=\"80\">\n    data fetched from ipfs :\n    </textarea>\n</div>"

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_buffer__ = __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_buffer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ipfs_api__ = __webpack_require__("./node_modules/ipfs-api/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ipfs_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ipfs_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//const ipfsAPI = require('ipfs-api');
//import IpfsApi from 'ipfs-api';

var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent() {
        // this.state = {
        //   added_file_hash: null
        // }
        // this.ipfsApi = ipfsApi('localhost', '5001')
        this.ipfsApi = __WEBPACK_IMPORTED_MODULE_2_ipfs_api__('localhost', '5001');
        // bind methods
        this.captureFile = this.captureFile.bind(this);
        this.saveToIpfs = this.saveToIpfs.bind(this);
        // this.arrayBufferToString = this.arrayBufferToString.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    FileUploadComponent.prototype.ngOnInit = function () {
    };
    FileUploadComponent.prototype.captureFile = function (event) {
        var _this = this;
        console.log("capturefile function called ");
        event.stopPropagation();
        event.preventDefault();
        var file = event.target.files[0];
        console.log(file);
        var reader = new FileReader();
        //const reader = new FileReader();
        reader.onloadend = function () { return _this.saveToIpfs(reader); };
        // console.log(reader);
        reader.readAsArrayBuffer(file);
        // console.log("capturefile function called ");
    };
    FileUploadComponent.prototype.saveToIpfs = function (reader) {
        var _this = this;
        var buffer = __WEBPACK_IMPORTED_MODULE_1_buffer__["Buffer"].from(reader.result);
        console.log(buffer);
        this.ipfsApi.add(buffer, { progress: function (prog) { return console.log("received: " + prog); } })
            .then(function (response) {
            console.log(response);
            _this.ipfsId = response[0].hash;
            console.log(_this.ipfsId);
            _this.display(_this.ipfsId);
            // ipfsApi.setState({ added_file_hash: ipfsId })
        }).catch(function (err) {
            console.error(err);
        });
    };
    FileUploadComponent.prototype.display = function (ipfsId) {
        console.log("display function called" + ipfsId);
        this.ipfsApi.cat(ipfsId, function (err, res) {
            if (err || !res) {
                return console.error('ipfs cat error', err, res);
            }
            document.getElementById('data').innerText = res.toString();
        });
    };
    // arrayBufferToString(arrayBuffer) {
    //   return String.fromCharCode.apply(null, new Uint16Array(arrayBuffer))
    // }
    FileUploadComponent.prototype.handleSubmit = function (event) {
        event.preventDefault();
        // console.log("handle submit called");
    };
    FileUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-file-upload',
            template: __webpack_require__("./src/app/file-upload/file-upload.component.html"),
            styles: [__webpack_require__("./src/app/file-upload/file-upload.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/nest-drop-down/nest-drop-down.component.css":
/***/ (function(module, exports) {

module.exports = "p {\r\n    font-family: Lato;\r\n  }\r\n  \r\n  button {\r\n    background-color: #eee;\r\n  }"

/***/ }),

/***/ "./src/app/nest-drop-down/nest-drop-down.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  nest-drop-down works!\n</p>\n\n<button mat-button [matMenuTriggerFor]=\"main_menu\">My menu</button>\n\n<mat-menu #main_menu=\"matMenu\">\n  <ng-container *ngFor=\"let mainItem of objectKeys(my_menu)\">\n    <button mat-menu-item [matMenuTriggerFor]=\"sub_menu\">{{ mainItem }}</button>\n    <mat-menu #sub_menu=\"matMenu\">\n       <button *ngFor=\"let subItem of my_menu[mainItem]\" mat-menu-item>{{ subItem }}</button>\n    </mat-menu>\n  </ng-container>\n</mat-menu>\n\n"

/***/ }),

/***/ "./src/app/nest-drop-down/nest-drop-down.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NestDropDownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NestDropDownComponent = /** @class */ (function () {
    function NestDropDownComponent() {
        this.objectKeys = Object.keys;
        this.my_menu = {
            'main1': ['sub1', 'sub2'],
            'main2': ['sub1', 'sub2', 'sub3'],
        };
    }
    NestDropDownComponent.prototype.ngOnInit = function () {
    };
    NestDropDownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-nest-drop-down',
            template: __webpack_require__("./src/app/nest-drop-down/nest-drop-down.component.html"),
            styles: [__webpack_require__("./src/app/nest-drop-down/nest-drop-down.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NestDropDownComponent);
    return NestDropDownComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map