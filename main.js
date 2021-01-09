(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\danny_000.SANDRAMORENO\Desktop\Prueba Harry Potter\prueba-potter\src\main.ts */"zUnb");


/***/ }),

/***/ "5E34":
/*!*******************************************************!*\
  !*** ./src/app/services/peticion-teachers.service.ts ***!
  \*******************************************************/
/*! exports provided: PeticionTeachersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeticionTeachersService", function() { return PeticionTeachersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PeticionTeachersService {
    constructor(_http) {
        this._http = _http;
        this.url = 'http://hp-api.herokuapp.com/api/characters/staff';
    }
    getInfoTeachers() {
        return this._http.get(this.url);
    }
}
PeticionTeachersService.ɵfac = function PeticionTeachersService_Factory(t) { return new (t || PeticionTeachersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PeticionTeachersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PeticionTeachersService, factory: PeticionTeachersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeticionTeachersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "95m7":
/*!**********************************************************!*\
  !*** ./src/app/services/peticion-estudiantes.service.ts ***!
  \**********************************************************/
/*! exports provided: PeticionEstudiantesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeticionEstudiantesService", function() { return PeticionEstudiantesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PeticionEstudiantesService {
    constructor(_http) {
        this._http = _http;
        this.url = 'http://hp-api.herokuapp.com/api/characters/students';
    }
    getInfoEstudents() {
        return this._http.get(this.url);
    }
}
PeticionEstudiantesService.ɵfac = function PeticionEstudiantesService_Factory(t) { return new (t || PeticionEstudiantesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PeticionEstudiantesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PeticionEstudiantesService, factory: PeticionEstudiantesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeticionEstudiantesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BhhM":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterPipe {
    transform(value, arg) {
        const resultadoWizard = [];
        for (const post of value) {
            if (post.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                resultadoWizard.push(post);
            }
            ;
        }
        ;
        return resultadoWizard;
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();


/***/ }),

/***/ "Gdku":
/*!*************************************************************!*\
  !*** ./src/app/services/peticion-houses-members.service.ts ***!
  \*************************************************************/
/*! exports provided: PeticionHousesMembersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeticionHousesMembersService", function() { return PeticionHousesMembersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PeticionHousesMembersService {
    constructor(_http) {
        this._http = _http;
        this.url = 'http://hp-api.herokuapp.com/api/characters/house';
    }
    getInfoWizardSly(houses) {
        // console.log(houses);
        return this._http.get(`${this.url}/${houses}`);
    }
    getInfoWizardGry(houses) {
        // console.log(houses);
        return this._http.get(`${this.url}/${houses}`);
    }
    getInfoWizardHuf(houses) {
        // console.log(houses);
        return this._http.get(`${this.url}/${houses}`);
    }
    getInfoWizardRav(houses) {
        // console.log(houses);
        return this._http.get(`${this.url}/${houses}`);
    }
}
PeticionHousesMembersService.ɵfac = function PeticionHousesMembersService_Factory(t) { return new (t || PeticionHousesMembersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PeticionHousesMembersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PeticionHousesMembersService, factory: PeticionHousesMembersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeticionHousesMembersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Pk+G":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["./"]; };
const _c1 = function () { return ["/estudiantes"]; };
const _c2 = function () { return ["/profesores"]; };
const _c3 = function () { return ["/nuevos-estudiantes"]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 12, vars: 8, consts: [[1, "navbar", "navbar-light", "bg-dark"], [1, "container", "justify-content-start", "cajaLogoHog"], ["src", "../../../assets/images/hogwarts.png", "alt", "", 1, "logoHog"], [1, "container", "justify-content-end", "cajaBotones"], ["type", "button", 1, "btn", "btn-outline-primary", "mx-1", 3, "routerLink"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "mx-1", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Estudiantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Profesores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A1Reg\u00EDstrate!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".cajaLogoHog[_ngcontent-%COMP%]{\r\n    margin: 0%;\r\n    padding: 5px;\r\n    max-width: 80px;\r\n    max-height: 80px;\r\n}\r\n.logoHog[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 70px;\r\n    display: block;\r\n    object-fit: contain;\r\n}\r\n.cajaBotones[_ngcontent-%COMP%]{\r\n    margin-left: 0%;\r\n    margin-right: 0%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FqYUxvZ29Ib2d7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgbWF4LWhlaWdodDogODBweDtcclxufVxyXG4ubG9nb0hvZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4uY2FqYUJvdG9uZXN7XHJcbiAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Q5a9":
/*!****************************************************************************************!*\
  !*** ./src/app/component/hogwarts-houses-members/hogwarts-houses-members.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HogwartsHousesMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HogwartsHousesMembersComponent", function() { return HogwartsHousesMembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_peticion_houses_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticion-houses-members.service */ "Gdku");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/filter.pipe */ "BhhM");







function HogwartsHousesMembersComponent_div_28_tr_21_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Estado difunto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HogwartsHousesMembersComponent_div_28_tr_21_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edad desconocida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HogwartsHousesMembersComponent_div_28_tr_21_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wizard_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](2021 - wizard_r4.yearOfBirth);
} }
function HogwartsHousesMembersComponent_div_28_tr_21_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wizard_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wizard_r4.patronus);
} }
function HogwartsHousesMembersComponent_div_28_tr_21_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Patronus desconocido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HogwartsHousesMembersComponent_div_28_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HogwartsHousesMembersComponent_div_28_tr_21_td_6_Template, 2, 0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HogwartsHousesMembersComponent_div_28_tr_21_td_7_Template, 2, 0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HogwartsHousesMembersComponent_div_28_tr_21_td_8_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HogwartsHousesMembersComponent_div_28_tr_21_td_9_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HogwartsHousesMembersComponent_div_28_tr_21_ng_template_10_Template, 2, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wizard_r4 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.casaColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", wizard_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wizard_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", wizard_r4.alive == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", wizard_r4.yearOfBirth == 0 && wizard_r4.alive == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", wizard_r4.yearOfBirth != 0 && wizard_r4.alive == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", wizard_r4.patronus != 0)("ngIfElse", _r9);
} }
function HogwartsHousesMembersComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tabla de personajes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HogwartsHousesMembersComponent_div_28_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.filterWizard = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fotograf\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Edad actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Patronus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HogwartsHousesMembersComponent_div_28_tr_21_Template, 12, 10, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.filterWizard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.casaHeaderColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 5, ctx_r0.casaName, ctx_r0.filterWizard));
} }
function HogwartsHousesMembersComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A1Seleccionemos tu casa!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HogwartsHousesMembersComponent {
    constructor(_peticionHousesService) {
        this._peticionHousesService = _peticionHousesService;
        this.filterWizard = '';
        this.houseGry = 'gryffindor';
        this.houseSly = 'slytherin';
        this.houseHuf = 'hufflepuff';
        this.houseRav = 'ravenclaw';
        this.wizardsSly = [];
        this.wizardsGry = [];
        this.wizardsHuf = [];
        this.wizardsRav = [];
        this.casaName = [];
        this.casaColor = '';
        this.casaHeaderColor = '';
    }
    ngOnInit() {
        this.cargaDeMagosGryffindor(this.houseGry);
        this.cargaDeMagosSlytherin(this.houseSly);
        this.cargaDeMagosHufflepuff(this.houseHuf);
        this.cargaDeMagosRavenclaw(this.houseRav);
    }
    cargaDeMagosGryffindor(houseGry) {
        this._peticionHousesService.getInfoWizardGry(houseGry).subscribe((resultado) => { this.wizardsGry = resultado; }, (error) => { console.log(error); });
    }
    cargaDeMagosSlytherin(houseSly) {
        this._peticionHousesService.getInfoWizardSly(houseSly).subscribe((resultado) => { this.wizardsSly = resultado; }, (error) => { console.log(error); });
    }
    cargaDeMagosHufflepuff(houseHuf) {
        this._peticionHousesService.getInfoWizardGry(houseHuf).subscribe((resultado) => { this.wizardsHuf = resultado; }, (error) => { console.log(error); });
    }
    cargaDeMagosRavenclaw(houseRav) {
        this._peticionHousesService.getInfoWizardGry(houseRav).subscribe((resultado) => { this.wizardsRav = resultado; }, (error) => { console.log(error); });
    }
    casaGry() {
        this.casaName = this.wizardsGry;
        this.casaColor = 'colorGry';
        this.casaHeaderColor = 'colorGryHeader';
    }
    casaSly() {
        this.casaName = this.wizardsSly;
        this.casaColor = 'colorSly';
        this.casaHeaderColor = 'colorSlyHeader';
    }
    casaHuf() {
        this.casaName = this.wizardsHuf;
        this.casaColor = 'colorHuf';
        this.casaHeaderColor = 'colorHufHeader';
    }
    casaRav() {
        this.casaName = this.wizardsRav;
        this.casaColor = 'colorRav';
        this.casaHeaderColor = 'colorRavHeader';
    }
}
HogwartsHousesMembersComponent.ɵfac = function HogwartsHousesMembersComponent_Factory(t) { return new (t || HogwartsHousesMembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_peticion_houses_members_service__WEBPACK_IMPORTED_MODULE_1__["PeticionHousesMembersService"])); };
HogwartsHousesMembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HogwartsHousesMembersComponent, selectors: [["app-hogwarts-houses-members"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_peticion_houses_members_service__WEBPACK_IMPORTED_MODULE_1__["PeticionHousesMembersService"]])], decls: 31, vars: 2, consts: [[1, "title"], [1, "navegacion"], [1, "menu"], [1, "firstBoxItem"], ["href", "#", 3, "click"], ["src", "../../../assets/images/gryf_fondo.jpg", "alt", "", 1, "menuImagen"], [1, "text-item"], [1, "down-item", "gryf"], ["src", "../../../assets/images/slyt_fondo.jpg", "alt", "", 1, "menuImagen"], [1, "down-item", "slyt"], ["src", "../../../assets/images/rave_fondo.jpg", "alt", "", 1, "menuImagen"], [1, "down-item", "rave"], ["src", "../../../assets/images/huff_fondo.jpg", "alt", "", 1, "menuImagen"], [1, "down-item", "huff"], [4, "ngIf", "ngIfElse"], ["sombrero", ""], [1, "container"], [1, "row"], [1, "col-4"], [1, "form-group"], ["type", "text", "name", "filterWizard", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "container", "my-5"], [1, "table", "table-striped", "text-center", "align-middle", "table-bordered", "table-hover"], ["scope", "col"], [1, "cuerpoTabla"], [3, "class", 4, "ngFor", "ngForOf"], [1, "imagenBox"], ["alt", "", 1, "fotosPersonajes", 3, "src"], ["scope", "row"], [4, "ngIf"], ["divElsePatronus", ""], [1, "textoSombrero"], [1, "cajaSombrero"], ["src", "../../../assets/images/sombrero.png", "alt", "", 1, "imgSombrero"]], template: function HogwartsHousesMembersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hogwarts escuela de magia y hechicer\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HogwartsHousesMembersComponent_Template_a_click_5_listener() { return ctx.casaGry(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Gryffindor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HogwartsHousesMembersComponent_Template_a_click_11_listener() { return ctx.casaSly(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Slytherin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HogwartsHousesMembersComponent_Template_a_click_17_listener() { return ctx.casaRav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ravenclaw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HogwartsHousesMembersComponent_Template_a_click_23_listener() { return ctx.casaHuf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hufflepuff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HogwartsHousesMembersComponent_div_28_Template, 23, 8, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HogwartsHousesMembersComponent_ng_template_29_Template, 4, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.casaName.length != 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]], styles: [".title[_ngcontent-%COMP%] {\r\n  margin: 0%;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  font-size: 34px;\r\n  font-weight: 200;\r\n  color: cornsilk;\r\n  width: 100%;\r\n  background: #1c1c1cd0;\r\n  height: 200px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.navegacion[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: #1c1c1c;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n  width: 900px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  height: 80px;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  flex-basis: 0;\r\n  flex-grow: 1;\r\n  border-right: 1px solid #363636;\r\n  position: relative;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   .firstBoxItem[_ngcontent-%COMP%] {\r\n  border-left: 1px solid #363636;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 20px;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   .menuImagen[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 30px;\r\n  width: 0%;\r\n  z-index: 20;\r\n  opacity: 0;\r\n\r\n  transition: all 300ms cubic-bezier(0.445, 0.050, 0.550, 0.950);\r\n\r\n  transition-timing-function: cubic-bezier(0.445, 0.050, 0.550, 0.950);\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text-item[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  color: #fff;\r\n  position: absolute;\r\n  z-index: 10;\r\n  top: 0%;\r\n\r\n  transition: all 300ms cubic-bezier(1.000, -0.260, 0.810, -0.015);\r\n\r\n  transition-timing-function: cubic-bezier(1.000, -0.260, 0.810, -0.015);\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .slyt[_ngcontent-%COMP%], .gryf[_ngcontent-%COMP%], .huff[_ngcontent-%COMP%], .rave[_ngcontent-%COMP%]{\r\n  background: #1c1c1c;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   .slyt[_ngcontent-%COMP%]{\r\n  background: #2a623d;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   .gryf[_ngcontent-%COMP%]{\r\n  background: #eeba30;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   .huff[_ngcontent-%COMP%]{\r\n  background: #726255;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   .rave[_ngcontent-%COMP%]{\r\n  background: #5d5d5d;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .down-item[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0%;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #1c1c1c;\r\n\r\n  transition: all 300ms cubic-bezier(1.000, -0.260, 0.810, -0.015);\r\n\r\n  transition-timing-function: cubic-bezier(1.000, -0.260, 0.810, -0.015);\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   .down-item[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   .text-item[_ngcontent-%COMP%] {\r\n  top: 100%;\r\n  height: 115%;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   .menuImagen[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  right: 0px;\r\n  opacity: 0.8;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.imagenBox[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: 100px;\r\n  height: 100px;\r\n  overflow: hidden;\r\n  -webkit-clip-path: circle(45% at 50% 50%);\r\n          clip-path: circle(45% at 50% 50%);\r\n}\r\n\r\n.fotosPersonajes[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  max-width: 100px;\r\n}\r\n\r\n\r\n\r\n.colorGry[_ngcontent-%COMP%]:nth-child(odd) {\r\n  background: #ae0001;\r\n  color: #eeba30;\r\n}\r\n\r\n.colorGry[_ngcontent-%COMP%]:nth-child(even) {\r\n  background: #eeba30;\r\n}\r\n\r\n.colorGryHeader[_ngcontent-%COMP%] {\r\n  background: #eec230;\r\n}\r\n\r\n\r\n\r\n.colorSly[_ngcontent-%COMP%]:nth-child(odd) {\r\n  background: #2a623d;\r\n}\r\n\r\n.colorSly[_ngcontent-%COMP%]:nth-child(even) {\r\n  background: #aaaaaa;\r\n}\r\n\r\n.colorSlyHeader[_ngcontent-%COMP%] {\r\n  background: #5d5d5d;\r\n}\r\n\r\n\r\n\r\n.colorHuf[_ngcontent-%COMP%]:nth-child(odd) {\r\n  background: #ecb939;\r\n}\r\n\r\n.colorHuf[_ngcontent-%COMP%]:nth-child(even) {\r\n  background: #726255;\r\n}\r\n\r\n.colorHufHeader[_ngcontent-%COMP%] {\r\n  background: #f0c75e;\r\n}\r\n\r\n\r\n\r\n.colorRav[_ngcontent-%COMP%]:nth-child(odd) {\r\n  background: #222f5b;\r\n  color: #aaaaaa;\r\n}\r\n\r\n.colorRav[_ngcontent-%COMP%]:nth-child(even) {\r\n  background: #5d5d5d;\r\n}\r\n\r\n.colorRavHeader[_ngcontent-%COMP%] {\r\n  background: #946b2d;\r\n}\r\n\r\n\r\n\r\n.cajaSombrero[_ngcontent-%COMP%]{\r\n  padding: 20px;\r\n  max-width: 400px;\r\n  max-height: 400px;\r\n  margin: auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.imgSombrero[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  max-width: 300px;\r\n}\r\n\r\n.textoSombrero[_ngcontent-%COMP%]{\r\n  color: #604320;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvZ3dhcnRzLWhvdXNlcy1tZW1iZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCOztBQUU3QjtFQUNFLFVBQVU7RUFDViw2RUFBNkU7RUFDN0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1COztFQUVuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLFVBQVU7O0VBRVYsOERBQThEOztFQUU5RCxvRUFBb0U7QUFDdEU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxPQUFPOztFQUVQLGdFQUFnRTs7RUFFaEUsc0VBQXNFO0FBQ3hFOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsZ0VBQWdFOztFQUVoRSxzRUFBc0U7QUFDeEU7O0FBRUE7O0VBRUUsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBLHlGQUF5Rjs7QUFFekYsOENBQThDOztBQUU5QztFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix5Q0FBaUM7VUFBakMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBLHVDQUF1Qzs7QUFFdkM7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxxQ0FBcUM7O0FBRXJDO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLHNDQUFzQzs7QUFFdEM7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEscUNBQXFDOztBQUVyQztFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUdBLDJCQUEyQjs7QUFFM0I7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJob2d3YXJ0cy1ob3VzZXMtbWVtYmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRXN0aWxvcyBtZW7DuiBkZXNwbGVnYWJsZSAqL1xyXG5cclxuLnRpdGxlIHtcclxuICBtYXJnaW46IDAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzRweDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGNvbG9yOiBjb3Juc2lsaztcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMWMxYzFjZDA7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZlZ2FjaW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICB3aWR0aDogOTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4ubWVudSBsaSBhIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWVudSBsaSB7XHJcbiAgZmxleC1iYXNpczogMDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzM2MzYzNjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tZW51IC5maXJzdEJveEl0ZW0ge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzM2MzYzNjtcclxufVxyXG5cclxuLm1lbnUgbGkgYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm1lbnUgLm1lbnVJbWFnZW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDAlO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIG9wYWNpdHk6IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC40NDUsIDAuMDUwLCAwLjU1MCwgMC45NTApO1xyXG5cclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNDQ1LCAwLjA1MCwgMC41NTAsIDAuOTUwKTtcclxufVxyXG5cclxuLm1lbnUgbGkgYSAudGV4dC1pdGVtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgdG9wOiAwJTtcclxuXHJcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMjYwLCAwLjgxMCwgLTAuMDE1KTtcclxuXHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMjYwLCAwLjgxMCwgLTAuMDE1KTtcclxufVxyXG5cclxuLm1lbnUgbGkgYSAuc2x5dCwgLmdyeWYsIC5odWZmLCAucmF2ZXtcclxuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xyXG59XHJcblxyXG4ubWVudSBsaTpob3ZlciBhIC5zbHl0e1xyXG4gIGJhY2tncm91bmQ6ICMyYTYyM2Q7XHJcbn1cclxuXHJcbi5tZW51IGxpOmhvdmVyIGEgLmdyeWZ7XHJcbiAgYmFja2dyb3VuZDogI2VlYmEzMDtcclxufVxyXG5cclxuLm1lbnUgbGk6aG92ZXIgYSAuaHVmZntcclxuICBiYWNrZ3JvdW5kOiAjNzI2MjU1O1xyXG59XHJcblxyXG4ubWVudSBsaTpob3ZlciBhIC5yYXZle1xyXG4gIGJhY2tncm91bmQ6ICM1ZDVkNWQ7XHJcbn1cclxuXHJcblxyXG4ubWVudSBsaSBhIC5kb3duLWl0ZW0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xyXG5cclxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4yNjAsIDAuODEwLCAtMC4wMTUpO1xyXG5cclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4yNjAsIDAuODEwLCAtMC4wMTUpO1xyXG59XHJcblxyXG4ubWVudSBsaTpob3ZlciBhIC5kb3duLWl0ZW0sXHJcbi5tZW51IGxpOmhvdmVyIGEgLnRleHQtaXRlbSB7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGhlaWdodDogMTE1JTtcclxufVxyXG5cclxuLm1lbnUgbGk6aG92ZXIgYSAubWVudUltYWdlbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVGFibGFzIHBlcnNvbmFqZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogRXN0aWxvcyB5IGZvcm1hdG9zIGltYWdlbmVzIGRlIHBlcnNvbmFqZXMgKi9cclxuXHJcbi5pbWFnZW5Cb3gge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNsaXAtcGF0aDogY2lyY2xlKDQ1JSBhdCA1MCUgNTAlKTtcclxufVxyXG5cclxuLmZvdG9zUGVyc29uYWplcyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi8qIHBhbGV0YSBkZSBjb2xvcmVzIHRhYmxhIEdyeWZmaW5kb3IgKi9cclxuXHJcbi5jb2xvckdyeTpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZDogI2FlMDAwMTtcclxuICBjb2xvcjogI2VlYmEzMDtcclxufVxyXG5cclxuLmNvbG9yR3J5Om50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZDogI2VlYmEzMDtcclxufVxyXG5cclxuLmNvbG9yR3J5SGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZWVjMjMwO1xyXG59XHJcblxyXG4vKiBQbGV0YSBkZSBjb2xvcmVzIHRhYmxhIFNseXRoZXJpbiAqL1xyXG5cclxuLmNvbG9yU2x5Om50aC1jaGlsZChvZGQpIHtcclxuICBiYWNrZ3JvdW5kOiAjMmE2MjNkO1xyXG59XHJcblxyXG4uY29sb3JTbHk6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kOiAjYWFhYWFhO1xyXG59XHJcblxyXG4uY29sb3JTbHlIZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1ZDVkNWQ7XHJcbn1cclxuXHJcbi8qIFBsZXRhIGRlIGNvbG9yZXMgdGFibGEgSHVmZmxlcHVmZiAqL1xyXG5cclxuLmNvbG9ySHVmOm50aC1jaGlsZChvZGQpIHtcclxuICBiYWNrZ3JvdW5kOiAjZWNiOTM5O1xyXG59XHJcblxyXG4uY29sb3JIdWY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kOiAjNzI2MjU1O1xyXG59XHJcblxyXG4uY29sb3JIdWZIZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmMGM3NWU7XHJcbn1cclxuXHJcbi8qIFBsZXRhIGRlIGNvbG9yZXMgdGFibGEgUmF2ZW5jbGF3ICovXHJcblxyXG4uY29sb3JSYXY6bnRoLWNoaWxkKG9kZCkge1xyXG4gIGJhY2tncm91bmQ6ICMyMjJmNWI7XHJcbiAgY29sb3I6ICNhYWFhYWE7XHJcbn1cclxuXHJcbi5jb2xvclJhdjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQ6ICM1ZDVkNWQ7XHJcbn1cclxuXHJcbi5jb2xvclJhdkhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogIzk0NmIyZDtcclxufVxyXG5cclxuXHJcbi8qIFNvbWJyZXJvIHNlbGVjY2lvbmFkb3IgKi9cclxuXHJcbi5jYWphU29tYnJlcm97XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaW1nU29tYnJlcm97XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi50ZXh0b1NvbWJyZXJve1xyXG4gIGNvbG9yOiAjNjA0MzIwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HogwartsHousesMembersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hogwarts-houses-members',
                templateUrl: './hogwarts-houses-members.component.html',
                styleUrls: ['./hogwarts-houses-members.component.css'],
                providers: [_services_peticion_houses_members_service__WEBPACK_IMPORTED_MODULE_1__["PeticionHousesMembersService"]]
            }]
    }], function () { return [{ type: _services_peticion_houses_members_service__WEBPACK_IMPORTED_MODULE_1__["PeticionHousesMembersService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/header/header.component */ "Pk+G");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'prueba-potter';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_component_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/filter.pipe */ "BhhM");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/header/header.component */ "Pk+G");
/* harmony import */ var _component_hogwarts_houses_members_hogwarts_houses_members_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/hogwarts-houses-members/hogwarts-houses-members.component */ "Q5a9");
/* harmony import */ var _component_hogwarts_students_hogwarts_students_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/hogwarts-students/hogwarts-students.component */ "hmV/");
/* harmony import */ var _component_hogwarts_teachers_hogwarts_teachers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/hogwarts-teachers/hogwarts-teachers.component */ "mgh9");
/* harmony import */ var _component_nuevos_estudiantes_nuevos_estudiantes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/nuevos-estudiantes/nuevos-estudiantes.component */ "cKNZ");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _component_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _component_hogwarts_houses_members_hogwarts_houses_members_component__WEBPACK_IMPORTED_MODULE_8__["HogwartsHousesMembersComponent"],
        _component_hogwarts_students_hogwarts_students_component__WEBPACK_IMPORTED_MODULE_9__["HogwartsStudentsComponent"],
        _component_hogwarts_teachers_hogwarts_teachers_component__WEBPACK_IMPORTED_MODULE_10__["HogwartsTeachersComponent"],
        _component_nuevos_estudiantes_nuevos_estudiantes_component__WEBPACK_IMPORTED_MODULE_11__["NuevosEstudiantesComponent"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _component_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _component_hogwarts_houses_members_hogwarts_houses_members_component__WEBPACK_IMPORTED_MODULE_8__["HogwartsHousesMembersComponent"],
                    _component_hogwarts_students_hogwarts_students_component__WEBPACK_IMPORTED_MODULE_9__["HogwartsStudentsComponent"],
                    _component_hogwarts_teachers_hogwarts_teachers_component__WEBPACK_IMPORTED_MODULE_10__["HogwartsTeachersComponent"],
                    _component_nuevos_estudiantes_nuevos_estudiantes_component__WEBPACK_IMPORTED_MODULE_11__["NuevosEstudiantesComponent"],
                    _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ],
                providers: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cKNZ":
/*!******************************************************************************!*\
  !*** ./src/app/component/nuevos-estudiantes/nuevos-estudiantes.component.ts ***!
  \******************************************************************************/
/*! exports provided: NuevosEstudiantesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevosEstudiantesComponent", function() { return NuevosEstudiantesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NuevosEstudiantesComponent_table_27_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.celular);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.documento);
} }
function NuevosEstudiantesComponent_table_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Apellidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Celular");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Documento de identidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NuevosEstudiantesComponent_table_27_tr_14_Template, 11, 5, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.arrayNewEstudents);
} }
// import { NewEstudent } from '../../models/newEstudent'
class NuevosEstudiantesComponent {
    constructor() {
        this.formularioNewEstudent = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            apellidos: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            celular: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]),
            documento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)])
        });
        this.nombre = '';
        this.apellidos = '';
        this.email = '';
        this.celular = 0;
        this.documento = 0;
        this.arrayNewEstudents = [];
    }
    ngOnInit() {
    }
    guardar() {
        const arrayNuevo = this.formularioNewEstudent.value;
        this.arrayNewEstudents.push(arrayNuevo);
    }
}
NuevosEstudiantesComponent.ɵfac = function NuevosEstudiantesComponent_Factory(t) { return new (t || NuevosEstudiantesComponent)(); };
NuevosEstudiantesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NuevosEstudiantesComponent, selectors: [["app-nuevos-estudiantes"]], decls: 28, vars: 3, consts: [[1, "text-center", "mt-5", "mb-2"], [1, "container", "col-5", "bg-secondary", "border-0", "rounded", "my-5", "p-4"], [3, "formGroup"], [1, "mb-3"], ["for", "nombre", 1, "form-label"], ["type", "text", "name", "nombre", "placeholder", "Nombre del solicitante", "formControlName", "nombre", "required", "", 1, "form-control"], ["for", "apellidos", 1, "form-label"], ["type", "text", "name", "apellidos", "placeholder", "Apellidos del solicitante", "formControlName", "apellidos", "required", "", 1, "form-control"], ["for", "email", 1, "form-label"], ["type", "email", "name", "email", "placeholder", "E-mail del solicitante", "formControlName", "email", "required", "", 1, "form-control"], ["for", "ceular", 1, "form-label"], ["type", "number", "name", "celular", "placeholder", "N\u00FAmero de celular del solicitante", "formControlName", "celular", "required", "", 1, "form-control"], ["for", "documento", 1, "form-label"], ["type", "number", "name", "documento", "placeholder", "Documento de identidad del solicitante", "formControlName", "documento", "required", "", 1, "form-control"], ["type", "button", 1, "btn", "btn-warning", "my-3", 3, "disabled", "click"], [1, "container"], ["class", "table bg-light table-striped table-hover text-center", 4, "ngIf"], [1, "table", "bg-light", "table-striped", "table-hover", "text-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function NuevosEstudiantesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A1Resg\u00EDstrate en Hogwarts!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Apellidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Numero de celular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Documento de identidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NuevosEstudiantesComponent_Template_button_click_24_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Enviar solicitud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NuevosEstudiantesComponent_table_27_Template, 15, 1, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formularioNewEstudent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formularioNewEstudent.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arrayNewEstudents.length != 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudWV2b3MtZXN0dWRpYW50ZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NuevosEstudiantesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nuevos-estudiantes',
                templateUrl: './nuevos-estudiantes.component.html',
                styleUrls: ['./nuevos-estudiantes.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hmV/":
/*!****************************************************************************!*\
  !*** ./src/app/component/hogwarts-students/hogwarts-students.component.ts ***!
  \****************************************************************************/
/*! exports provided: HogwartsStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HogwartsStudentsComponent", function() { return HogwartsStudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_peticion_estudiantes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/peticion-estudiantes.service */ "95m7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/filter.pipe */ "BhhM");







function HogwartsStudentsComponent_tr_20_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Estado difunto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HogwartsStudentsComponent_tr_20_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edad desconocida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HogwartsStudentsComponent_tr_20_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wizard_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](2021 - wizard_r1.yearOfBirth);
} }
function HogwartsStudentsComponent_tr_20_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wizard_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wizard_r1.patronus);
} }
function HogwartsStudentsComponent_tr_20_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Patronus desconocido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HogwartsStudentsComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HogwartsStudentsComponent_tr_20_td_6_Template, 2, 0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HogwartsStudentsComponent_tr_20_td_7_Template, 2, 0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HogwartsStudentsComponent_tr_20_td_8_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HogwartsStudentsComponent_tr_20_td_9_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HogwartsStudentsComponent_tr_20_ng_template_10_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wizard_r1 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", wizard_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wizard_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", wizard_r1.alive == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", wizard_r1.yearOfBirth == 0 && wizard_r1.alive == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", wizard_r1.yearOfBirth != 0 && wizard_r1.alive == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", wizard_r1.patronus != 0)("ngIfElse", _r6);
} }
class HogwartsStudentsComponent {
    constructor(_peticionEstudiantes) {
        this._peticionEstudiantes = _peticionEstudiantes;
        this.filterEstudent = '';
        this.estudents = [];
    }
    ngOnInit() {
        this.cargaDeEstudiantes();
    }
    cargaDeEstudiantes() {
        this._peticionEstudiantes.getInfoEstudents().subscribe((resultado) => { this.estudents = resultado; }, (error) => { console.log(error); });
    }
}
HogwartsStudentsComponent.ɵfac = function HogwartsStudentsComponent_Factory(t) { return new (t || HogwartsStudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_peticion_estudiantes_service__WEBPACK_IMPORTED_MODULE_1__["PeticionEstudiantesService"])); };
HogwartsStudentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HogwartsStudentsComponent, selectors: [["app-hogwarts-students"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_services_peticion_estudiantes_service__WEBPACK_IMPORTED_MODULE_1__["PeticionEstudiantesService"]])], decls: 22, vars: 5, consts: [[1, "container", "justify-content-start"], [1, "row"], [1, "col-4"], [1, "form-group"], ["type", "text", "name", "filterEstudent", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "container", "tablaEstudiantes", "my-5"], [1, "table", "table-striped", "text-center", "align-middle", "table-bordered", "table-hover"], [1, "headerStudents"], ["scope", "col"], [1, "cuerpoTabla"], ["class", "table-dark table-striped", 4, "ngFor", "ngForOf"], [1, "table-dark", "table-striped"], [1, "imagenBox"], ["alt", "", 1, "fotosPersonajes", 3, "src"], ["scope", "row"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["divElsePatronus", ""]], template: function HogwartsStudentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tabla de estudiantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HogwartsStudentsComponent_Template_input_ngModelChange_6_listener($event) { return ctx.filterEstudent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Fotograf\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Edad actual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Patronus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HogwartsStudentsComponent_tr_20_Template, 12, 7, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterEstudent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 2, ctx.estudents, ctx.filterEstudent));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]], styles: [".imagenBox[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    width: 100px;\r\n    height: 100px;\r\n    overflow: hidden;\r\n    -webkit-clip-path: circle(45% at 50% 50%);\r\n            clip-path: circle(45% at 50% 50%);\r\n  }\r\n  \r\n  .fotosPersonajes[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-width: 100px;\r\n  }\r\n  \r\n  .headerStudents[_ngcontent-%COMP%]{\r\n      background: royalblue;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvZ3dhcnRzLXN0dWRlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIseUNBQWlDO1lBQWpDLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtNQUNJLHFCQUFxQjtFQUN6QiIsImZpbGUiOiJob2d3YXJ0cy1zdHVkZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbkJveCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDQ1JSBhdCA1MCUgNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgLmZvdG9zUGVyc29uYWplcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlclN0dWRlbnRze1xyXG4gICAgICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HogwartsStudentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hogwarts-students',
                templateUrl: './hogwarts-students.component.html',
                styleUrls: ['./hogwarts-students.component.css'],
                providers: [src_app_services_peticion_estudiantes_service__WEBPACK_IMPORTED_MODULE_1__["PeticionEstudiantesService"]]
            }]
    }], function () { return [{ type: src_app_services_peticion_estudiantes_service__WEBPACK_IMPORTED_MODULE_1__["PeticionEstudiantesService"] }]; }, null); })();


/***/ }),

/***/ "mgh9":
/*!****************************************************************************!*\
  !*** ./src/app/component/hogwarts-teachers/hogwarts-teachers.component.ts ***!
  \****************************************************************************/
/*! exports provided: HogwartsTeachersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HogwartsTeachersComponent", function() { return HogwartsTeachersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_peticion_teachers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticion-teachers.service */ "5E34");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/filter.pipe */ "BhhM");







function HogwartsTeachersComponent_tr_20_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Estado difunto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HogwartsTeachersComponent_tr_20_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edad desconocida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HogwartsTeachersComponent_tr_20_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wizard_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](2021 - wizard_r1.yearOfBirth);
} }
function HogwartsTeachersComponent_tr_20_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wizard_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wizard_r1.patronus);
} }
function HogwartsTeachersComponent_tr_20_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Patronus desconocido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HogwartsTeachersComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HogwartsTeachersComponent_tr_20_td_6_Template, 2, 0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HogwartsTeachersComponent_tr_20_td_7_Template, 2, 0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HogwartsTeachersComponent_tr_20_td_8_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HogwartsTeachersComponent_tr_20_td_9_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HogwartsTeachersComponent_tr_20_ng_template_10_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wizard_r1 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", wizard_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wizard_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", wizard_r1.alive == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", wizard_r1.yearOfBirth == 0 && wizard_r1.alive == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", wizard_r1.yearOfBirth != 0 && wizard_r1.alive == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", wizard_r1.patronus != 0)("ngIfElse", _r6);
} }
class HogwartsTeachersComponent {
    constructor(_peticionTeachers) {
        this._peticionTeachers = _peticionTeachers;
        this.filterTeachers = '';
        this.teachers = [];
    }
    ngOnInit() {
        this.cargaDeTeachers();
    }
    cargaDeTeachers() {
        this._peticionTeachers.getInfoTeachers().subscribe((resultado) => { this.teachers = resultado; }, (error) => { console.log(error); });
    }
}
HogwartsTeachersComponent.ɵfac = function HogwartsTeachersComponent_Factory(t) { return new (t || HogwartsTeachersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_peticion_teachers_service__WEBPACK_IMPORTED_MODULE_1__["PeticionTeachersService"])); };
HogwartsTeachersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HogwartsTeachersComponent, selectors: [["app-hogwarts-teachers"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_peticion_teachers_service__WEBPACK_IMPORTED_MODULE_1__["PeticionTeachersService"]])], decls: 22, vars: 5, consts: [[1, "container", "justify-content-start"], [1, "row"], [1, "col-4"], [1, "form-group"], ["type", "text", "name", "filterTeachers", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "container", "tablaEstudiantes", "my-5"], [1, "table", "table-striped", "text-center", "align-middle", "table-bordered", "table-hover"], [1, "headerStudents"], ["scope", "col"], [1, "cuerpoTabla"], ["class", "table-striped table-dark", 4, "ngFor", "ngForOf"], [1, "table-striped", "table-dark"], [1, "imagenBox"], ["alt", "", 1, "fotosPersonajes", 3, "src"], ["scope", "row"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["divElsePatronus", ""]], template: function HogwartsTeachersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tabla de estudiantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HogwartsTeachersComponent_Template_input_ngModelChange_6_listener($event) { return ctx.filterTeachers = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Fotograf\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Edad actual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Patronus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HogwartsTeachersComponent_tr_20_Template, 12, 7, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterTeachers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 2, ctx.teachers, ctx.filterTeachers));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]], styles: [".imagenBox[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    width: 100px;\r\n    height: 100px;\r\n    overflow: hidden;\r\n    -webkit-clip-path: circle(45% at 50% 50%);\r\n            clip-path: circle(45% at 50% 50%);\r\n  }\r\n  \r\n  .fotosPersonajes[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-width: 100px;\r\n  }\r\n  \r\n  .headerStudents[_ngcontent-%COMP%]{\r\n      background: royalblue;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvZ3dhcnRzLXRlYWNoZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIseUNBQWlDO1lBQWpDLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtNQUNJLHFCQUFxQjtFQUN6QiIsImZpbGUiOiJob2d3YXJ0cy10ZWFjaGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbkJveCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDQ1JSBhdCA1MCUgNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgLmZvdG9zUGVyc29uYWplcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlclN0dWRlbnRze1xyXG4gICAgICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HogwartsTeachersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hogwarts-teachers',
                templateUrl: './hogwarts-teachers.component.html',
                styleUrls: ['./hogwarts-teachers.component.css'],
                providers: [_services_peticion_teachers_service__WEBPACK_IMPORTED_MODULE_1__["PeticionTeachersService"]]
            }]
    }], function () { return [{ type: _services_peticion_teachers_service__WEBPACK_IMPORTED_MODULE_1__["PeticionTeachersService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_hogwarts_houses_members_hogwarts_houses_members_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/hogwarts-houses-members/hogwarts-houses-members.component */ "Q5a9");
/* harmony import */ var _component_hogwarts_students_hogwarts_students_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/hogwarts-students/hogwarts-students.component */ "hmV/");
/* harmony import */ var _component_hogwarts_teachers_hogwarts_teachers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/hogwarts-teachers/hogwarts-teachers.component */ "mgh9");
/* harmony import */ var _component_nuevos_estudiantes_nuevos_estudiantes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/nuevos-estudiantes/nuevos-estudiantes.component */ "cKNZ");








const routes = [
    { path: './', component: _component_hogwarts_houses_members_hogwarts_houses_members_component__WEBPACK_IMPORTED_MODULE_2__["HogwartsHousesMembersComponent"] },
    { path: 'estudiantes', component: _component_hogwarts_students_hogwarts_students_component__WEBPACK_IMPORTED_MODULE_3__["HogwartsStudentsComponent"] },
    { path: 'nuevos-estudiantes', component: _component_nuevos_estudiantes_nuevos_estudiantes_component__WEBPACK_IMPORTED_MODULE_5__["NuevosEstudiantesComponent"] },
    { path: 'profesores', component: _component_hogwarts_teachers_hogwarts_teachers_component__WEBPACK_IMPORTED_MODULE_4__["HogwartsTeachersComponent"] },
    { path: '**', component: _component_hogwarts_houses_members_hogwarts_houses_members_component__WEBPACK_IMPORTED_MODULE_2__["HogwartsHousesMembersComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map