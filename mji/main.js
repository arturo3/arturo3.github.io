(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_join_the_team_join_the_team_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/join-the-team/join-the-team.component */ "./src/app/components/join-the-team/join-the-team.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "./src/app/components/contactus/contactus.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");









var routes = [
    { path: 'aboutus', component: _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_6__["AboutusComponent"] },
    { path: 'contactus', component: _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__["ContactusComponent"] },
    { path: 'careers', component: _components_join_the_team_join_the_team_component__WEBPACK_IMPORTED_MODULE_1__["JoinTheTeamComponent"] },
    { path: 'services/:id', component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "./src/app/components/contactus/contactus.component.ts");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var _components_img_spotlight_img_spotlight_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/img-spotlight/img-spotlight.component */ "./src/app/components/img-spotlight/img-spotlight.component.ts");
/* harmony import */ var _components_ui_toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/ui/toggle-button/toggle-button.component */ "./src/app/components/ui/toggle-button/toggle-button.component.ts");
/* harmony import */ var _components_join_the_team_join_the_team_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/join-the-team/join-the-team.component */ "./src/app/components/join-the-team/join-the-team.component.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/language.service */ "./src/app/services/language.service.ts");







// Font awesome icons.
// TODO: Extract into it's own file somehow














// Services

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBars"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPhone"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faWhatsapp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPaperPlane"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faFacebookSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSearchPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronCircleLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronCircleRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimesCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSpinner"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faExclamationTriangle"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _components_services_services_component__WEBPACK_IMPORTED_MODULE_15__["ServicesComponent"],
                _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_16__["ContactusComponent"],
                _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_17__["AboutusComponent"],
                _components_img_spotlight_img_spotlight_component__WEBPACK_IMPORTED_MODULE_18__["ImgSpotlightComponent"],
                _components_ui_toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_19__["ToggleButtonComponent"],
                _components_join_the_team_join_the_team_component__WEBPACK_IMPORTED_MODULE_20__["JoinTheTeamComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_services_language_service__WEBPACK_IMPORTED_MODULE_21__["LanguageService"]],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-us-container\">\r\n  <div class=\"about-us-content\">\r\n      <p>{{aboutUsMessage}}</p>\r\n\r\n      <p *ngIf=\"selectedLanguage == 0\">\r\n        Feel free to <a class=\"faux-link\" [routerLink]=\"['/contactus']\">contact us</a> with any questions you may have.\r\n      </p>\r\n\r\n      <p *ngIf=\"selectedLanguage == 1\">\r\n        <a class=\"faux-link\" [routerLink]=\"['/contactus']\">Contactanos</a>  con cualquier pregunta que tengas. Estamos para ayudarte.\r\n      </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.less":
/*!***********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-us-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.img-container {\n  background-color: #76b39d;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #9A275A;\n  width: 100%;\n  font-family: 'Oswald', sans-serif;\n}\n.img-container > img {\n  width: 300px;\n  margin-bottom: 30px;\n  border-radius: 50%;\n}\n@media only screen and (max-width: 768px) {\n  .img-container > img {\n    width: 80%;\n    border-radius: 50%;\n  }\n}\n.about-us-content {\n  font-family: 'Oswald', sans-serif;\n  background-color: #9A275A;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 0;\n  width: 100%;\n}\n.about-us-content > p {\n  width: 60%;\n  font-size: 40px;\n  color: white;\n}\n@media only screen and (max-width: 768px) {\n  .about-us-content > p {\n    width: 85%;\n    font-size: 30px;\n  }\n}\n.faux-link {\n  color: white;\n  text-decoration: none;\n  color: #DE8879;\n}\n.faux-link:hover {\n  color: #DE8879;\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dHVzL0M6L1VzZXJzL2FydHVyL0NvZGUvTWppJTIwUGFyYWRpc2Uvc3JjL2FwcC9jb21wb25lbnRzL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXR1cy9DOi9Vc2Vycy9hcnR1ci9Db2RlL01qaSUyMFBhcmFkaXNlL3NyYy92YXJpYWJsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNERjtBRElBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNIRjtBREtFO0VBQUE7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7RUNGRjtBQUNGO0FES0E7RUFDRSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0hGO0FETUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNKRjtBRE1FO0VBQUE7SUFDRSxVQUFBO0lBQ0EsZUFBQTtFQ0hGO0FBQ0Y7QURNQTtFRW5DRSxZQUFBO0VBQ0EscUJBQUE7RUZvQ0EsY0FBQTtBQ0hGO0FDL0JFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FEaUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi92YXJpYWJsZXMnO1xuXG4uYWJvdXQtdXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2YjM5ZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IEBwYWxldHRlLTM7O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseS0xO1xufVxuXG4uaW1nLWNvbnRhaW5lciA+IGltZyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gIEBtZWRpYSBAbW9iaWxlIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuXG4uYWJvdXQtdXMtY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogQHBhbGV0dGUtMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFib3V0LXVzLWNvbnRlbnQgPiBwIHtcbiAgd2lkdGg6IDYwJTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG5cbiAgQG1lZGlhIEBtb2JpbGUge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59XG5cbi5mYXV4LWxpbmsge1xuICBAbGluay1jb2xvci1zdHlsZSgpO1xuICBjb2xvcjogQHBhbGV0dGUtNDtcbn1cbiIsIi5hYm91dC11cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbWctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2YjM5ZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5QTI3NUE7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG59XG4uaW1nLWNvbnRhaW5lciA+IGltZyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW1nLWNvbnRhaW5lciA+IGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cbi5hYm91dC11cy1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUEyNzVBO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFib3V0LXVzLWNvbnRlbnQgPiBwIHtcbiAgd2lkdGg6IDYwJTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hYm91dC11cy1jb250ZW50ID4gcCB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cbi5mYXV4LWxpbmsge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNERTg4Nzk7XG59XG4uZmF1eC1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNERTg4Nzk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiIsIkBwYWxldHRlLTE6ICNlOGU5ZWI7XG5AcGFsZXR0ZS0yOiAjMzMyRTNDO1xuQHBhbGV0dGUtMzogIzlBMjc1QTtcbkBwYWxldHRlLTQ6ICNERTg4Nzk7XG5AaGVhZGVyLWJhY2tncm91bmQ6ICNDQ0VGQUI7XG5cbkBiYWNrZ3JvdW5kLWdyYXk6ICNFQ0Y0RkU7XG5cbkBmb250LWZhbWlseS0xOiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbkBmb250LWZhbWlseS0yOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblxuQGRlc2t0b3Atd2lkdGg6IDE2MDBweDtcblxuQG1vYmlsZTogflwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KVwiO1xuQGRlc2t0b3A6IH5cIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweClcIjtcblxuQGxpbmstY29sb3Itc3R5bGU6IHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IEBwYWxldHRlLTQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59O1xuIl19 */"

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_models_Languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Languages */ "./src/app/models/Languages.ts");




var AboutusComponent = /** @class */ (function () {
    function AboutusComponent(languageService) {
        this.languageService = languageService;
        this.aboutUsMessage = ' M&JI Paradise is a local cleaning service company in Houston, TX. We are proud Texans offering a plenitude of cleaning services to our fellow Texans. Let us help you clean up!';
        this.contactUsMessage = 'Feel free to <a class="faux-link" [routerLink]="[\'/contactus\']">contact us</a> with any questions you may have.';
    }
    AboutusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toggleLangugae(this.languageService.getSelectedLanguage());
        this.languageService.languageToggle.subscribe(function (language) { return _this.toggleLangugae(language); });
    };
    AboutusComponent.prototype.toggleLangugae = function (language) {
        this.selectedLanguage = language;
        switch (language) {
            case src_app_models_Languages__WEBPACK_IMPORTED_MODULE_3__["Language"].English:
                this.aboutUsMessage = ' M&JI Paradise is a local cleaning service company in Houston, TX. We are proud Texans offering a plenitude of cleaning services to our fellow Texans. Let us help you clean up!';
                break;
            case src_app_models_Languages__WEBPACK_IMPORTED_MODULE_3__["Language"].Spanish:
                this.aboutUsMessage = 'M&JI Paradise es una compañia de servicio de limpieza orgullosamente Tejana sirviendo a la comunidad de Houston. ¡Dejanos echarte la mano limpiando!';
                break;
        }
    };
    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/components/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.less */ "./src/app/components/aboutus/aboutus.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sp-header></sp-header>\r\n\r\n<div class=\"primary-router-outlet\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<sp-footer></sp-footer>\r\n"

/***/ }),

/***/ "./src/app/components/app/app.component.less":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary-router-outlet {\n  max-width: 2000px;\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAvQzovVXNlcnMvYXJ0dXIvQ29kZS9NamklMjBQYXJhZGlzZS9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cbi5wcmltYXJ5LXJvdXRlci1vdXRsZXQge1xuICBtYXgtd2lkdGg6IDIwMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59IiwiLnByaW1hcnktcm91dGVyLW91dGxldCB7XG4gIG1heC13aWR0aDogMjAwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'spartan';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/components/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/contactus/contactus.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-form-container\">\r\n <div *ngIf=\"!submitted\" class=\"contact-form\">\r\n    <p>{{headerMessage}}</p>\r\n    <h1>{{contactTitle}}</h1>\r\n\r\n      <form (ngSubmit)=\"onSubmit()\" #contactForm=\"ngForm\">\r\n        <div class=\"form-element\">\r\n          <span>{{nameTitle}}:</span>\r\n          <input id=\"name\" [(ngModel)]=\"name\" name=\"name\" required>\r\n        </div>\r\n\r\n        <div class=\"form-element\">\r\n          <span>{{emailTitle}}:</span>\r\n          <input id=\"email\" [(ngModel)]=\"emailFrom\" name=\"emailFrom\" required>\r\n        </div>\r\n\r\n        <div class=\"form-element\">\r\n          <span>{{phoneTitle}}:</span>\r\n          <input id=\"phone\" [(ngModel)]=\"phoneNumber\" name=\"phoneNumber\">\r\n        </div>\r\n\r\n        <div class=\"form-element\">\r\n          <span>{{descriptionTitle}}:</span>\r\n          <textarea id=\"description\"\r\n                    [(ngModel)]=\"description\"\r\n                    name=\"description\"\r\n                    rows=\"8\"\r\n                    cols=\"50\"\r\n                    required\r\n                    placeholder=\"Please enter a description of your project\"></textarea>\r\n        </div>\r\n\r\n        <button id=\"send\"\r\n                type=\"submit\"\r\n                class=\"send\"\r\n                [ngClass]=\"{ 'disabled': submitting }\"\r\n                [disabled]=\"!contactForm.form.valid || submitting\">\r\n          <fa-icon [icon]=\"['fa', 'paper-plane']\"></fa-icon>\r\n          {{sendTitle}}\r\n        </button>\r\n      </form>\r\n\r\n      <div *ngIf=\"error\"\r\n           class=\"error-message\">\r\n        {{errorMsg}}\r\n      </div>\r\n </div>\r\n <div *ngIf=\"submitted\" class=\"message-success\">\r\n   <p>{{successMsg}}</p>\r\n\r\n   <button class=\"send\"\r\n           (click)=\"sendAnotherMessage()\">\r\n     {{sendAnotherMessageTitle}}\r\n   </button>\r\n </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-form-container .message-success {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #9A275A;\n  padding: 25px;\n  font-family: 'Oswald', sans-serif;\n  color: white;\n}\n.contact-form-container .message-success button {\n  font-family: 'Oswald', sans-serif;\n}\n@media only screen and (max-width: 768px) {\n  .contact-form-container .message-success {\n    padding: 0;\n  }\n}\n.contact-form-container .message-success p {\n  font-size: 40px;\n  color: white;\n  width: 80%;\n}\n@media only screen and (max-width: 768px) {\n  .contact-form-container .message-success p {\n    font-size: 30px;\n  }\n}\n.contact-form-container .contact-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #9A275A;\n  padding: 20px;\n  font-family: 'Oswald', sans-serif;\n}\n@media only screen and (max-width: 768px) {\n  .contact-form-container .contact-form {\n    padding: 0;\n  }\n}\n.contact-form-container .contact-form p {\n  font-size: 40px;\n  color: white;\n  width: 80%;\n}\n@media only screen and (max-width: 768px) {\n  .contact-form-container .contact-form p {\n    font-size: 30px;\n  }\n}\n.contact-form-container .error-message {\n  margin-top: 20px;\n  color: red;\n  font-size: 20px;\n  background: #e8e9eb;\n  border-radius: 5px;\n  padding: 20px;\n}\n.contact-form-container .contact-form > form {\n  width: 50%;\n  text-align: center;\n  font-family: 'Roboto', sans-serif;\n}\n.contact-form-container h1 {\n  color: white;\n  align-self: flex-start;\n  margin-left: 50px;\n  border-bottom: 10px solid #DE8879;\n}\n@media only screen and (max-width: 768px) {\n  .contact-form-container h1 {\n    margin: 0 0 20px 10px;\n  }\n}\n.contact-form-container .form-element {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media only screen and (max-width: 768px) {\n  .contact-form-container .form-element {\n    flex-direction: column;\n  }\n  .contact-form-container .form-element:last-of-type > span {\n    margin-bottom: 20px;\n  }\n}\n.contact-form-container .form-element > span {\n  color: white;\n  border-bottom: 5px solid #DE8879;\n  font-size: 18px;\n  height: 21px;\n}\n.contact-form-container .form-element > input {\n  margin: 20px 0;\n  height: 35px;\n  font-size: 20px;\n  border-radius: 5px;\n  width: 420px;\n}\n@media only screen and (max-width: 768px) {\n  .contact-form-container .form-element > input {\n    width: 300px;\n  }\n}\n.contact-form-container .form-element > textarea {\n  border-radius: 5px;\n  padding: 10px;\n  width: 400px;\n  font-size: 17px;\n  font-family: 'Roboto', sans-serif;\n}\n@media only screen and (max-width: 768px) {\n  .contact-form-container .form-element > textarea {\n    width: 300px;\n  }\n}\n.contact-form-container .send {\n  border: 1px solid #332E3C;\n  background-color: #332E3C;\n  color: white;\n  border-radius: 5px;\n  padding: 10px;\n  text-decoration: none;\n  margin-top: 30px;\n  font-size: 20px;\n  font-weight: 600;\n}\n@media only screen and (max-width: 768px) {\n  .contact-form-container .send {\n    margin-bottom: 20px;\n  }\n}\n.contact-form-container .send:hover {\n  color: white;\n  border: 1px solid #DE8879;\n  background-color: #DE8879;\n}\n.contact-form-container .disabled {\n  opacity: 0.8;\n  cursor: not-allowed;\n}\n.ng-valid[required],\n.ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */\n}\n.ng-invalid:not(form).ng-dirty,\n.ng-invalid:not(form).ng-touched {\n  border-left: 5px solid #a94442;\n  /* red */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0dXMvQzovVXNlcnMvYXJ0dXIvQ29kZS9NamklMjBQYXJhZGlzZS9zcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FEUEE7RUFZTSxpQ0FBQTtBQ0ZOO0FES0k7RUFBQTtJQUNFLFVBQUE7RUNGSjtBQUNGO0FEZkE7RUFvQk0sZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDRk47QURJTTtFQUFBO0lBQ0UsZUFBQTtFQ0ROO0FBQ0Y7QUR6QkE7RUErQkksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtBQ0hKO0FES0k7RUFBQTtJQUNFLFVBQUE7RUNGSjtBQUNGO0FEdENBO0VBMkNNLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0ZOO0FESU07RUFBQTtJQUNFLGVBQUE7RUNETjtBQUNGO0FEaERBO0VBc0RJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0hKO0FEeERBO0VBK0RJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FDSko7QUQ3REE7RUFxRUksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQ0xKO0FET0k7RUFBQTtJQUNFLHFCQUFBO0VDSko7QUFDRjtBRHhFQTtFQWdGSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0xKO0FET0k7RUFBQTtJQUNFLHNCQUFBO0VDSko7RURNSTtJQUNFLG1CQUFBO0VDSk47QUFDRjtBRHJGQTtFQThGSSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ05KO0FEM0ZBO0VBcUdJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1BKO0FEU0k7RUFBQTtJQUNFLFlBQUE7RUNOSjtBQUNGO0FEdkdBO0VBaUhJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNQSjtBRFNJO0VBQUE7SUFDRSxZQUFBO0VDTko7QUFDRjtBRG5IQTtFQTZISSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNQSjtBRFNJO0VBQUE7SUFDRSxtQkFBQTtFQ05KO0FBQ0Y7QURuSUE7RUE2SUksWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNQSjtBRHhJQTtFQW1KSSxZQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFlBOztFQUNFLDhCQUFBO0VDVEEsVUFBVTtBQUNaO0FEV0E7O0VBQ0UsOEJBQUE7RUNSQSxRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi92YXJpYWJsZXMnO1xuXG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XG4gIC5tZXNzYWdlLXN1Y2Nlc3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBwYWxldHRlLTM7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LTE7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktMTtcbiAgICB9XG5cbiAgICBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDgwJTtcblxuICAgICAgQG1lZGlhIEBtb2JpbGUge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRhY3QtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHBhbGV0dGUtMztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktMTtcblxuICAgIEBtZWRpYSBAbW9iaWxlIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB3aWR0aDogODAlO1xuXG4gICAgICBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiBAcGFsZXR0ZS0xO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLmNvbnRhY3QtZm9ybSA+IGZvcm0ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktMjtcbiAgfVxuXG4gIGgxIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIEBwYWxldHRlLTQ7XG5cbiAgICBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tZWxlbWVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIEBtZWRpYSBAbW9iaWxlIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICY6bGFzdC1vZi10eXBlID4gc3BhbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tZWxlbWVudCA+IHNwYW4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgQHBhbGV0dGUtNDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICB9XG5cbiAgLmZvcm0tZWxlbWVudCA+IGlucHV0IHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogNDIwcHg7XG5cbiAgICBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tZWxlbWVudCA+IHRleHRhcmVhIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktMjtcblxuICAgIEBtZWRpYSBAbW9iaWxlIHtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICB9XG4gIH1cblxuICAuc2VuZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgQHBhbGV0dGUtMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcGFsZXR0ZS0yO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgIEBtZWRpYSBAbW9iaWxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgLnNlbmQ6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBAcGFsZXR0ZS00O1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBwYWxldHRlLTQ7XG4gIH1cblxuICAuZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG59XG5cbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKS5uZy1kaXJ0eSwgLm5nLWludmFsaWQ6bm90KGZvcm0pLm5nLXRvdWNoZWQgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cbn1cbiIsIi5jb250YWN0LWZvcm0tY29udGFpbmVyIC5tZXNzYWdlLXN1Y2Nlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlBMjc1QTtcbiAgcGFkZGluZzogMjVweDtcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciAubWVzc2FnZS1zdWNjZXNzIGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhY3QtZm9ybS1jb250YWluZXIgLm1lc3NhZ2Utc3VjY2VzcyB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuLmNvbnRhY3QtZm9ybS1jb250YWluZXIgLm1lc3NhZ2Utc3VjY2VzcyBwIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA4MCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWN0LWZvcm0tY29udGFpbmVyIC5tZXNzYWdlLXN1Y2Nlc3MgcCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59XG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciAuY29udGFjdC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlBMjc1QTtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFjdC1mb3JtLWNvbnRhaW5lciAuY29udGFjdC1mb3JtIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciAuY29udGFjdC1mb3JtIHAge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhY3QtZm9ybS1jb250YWluZXIgLmNvbnRhY3QtZm9ybSBwIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cbi5jb250YWN0LWZvcm0tY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOWViO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciAuY29udGFjdC1mb3JtID4gZm9ybSB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuLmNvbnRhY3QtZm9ybS1jb250YWluZXIgaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNERTg4Nzk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWN0LWZvcm0tY29udGFpbmVyIGgxIHtcbiAgICBtYXJnaW46IDAgMCAyMHB4IDEwcHg7XG4gIH1cbn1cbi5jb250YWN0LWZvcm0tY29udGFpbmVyIC5mb3JtLWVsZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWN0LWZvcm0tY29udGFpbmVyIC5mb3JtLWVsZW1lbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmNvbnRhY3QtZm9ybS1jb250YWluZXIgLmZvcm0tZWxlbWVudDpsYXN0LW9mLXR5cGUgPiBzcGFuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciAuZm9ybS1lbGVtZW50ID4gc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNERTg4Nzk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAyMXB4O1xufVxuLmNvbnRhY3QtZm9ybS1jb250YWluZXIgLmZvcm0tZWxlbWVudCA+IGlucHV0IHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA0MjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhY3QtZm9ybS1jb250YWluZXIgLmZvcm0tZWxlbWVudCA+IGlucHV0IHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbn1cbi5jb250YWN0LWZvcm0tY29udGFpbmVyIC5mb3JtLWVsZW1lbnQgPiB0ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhY3QtZm9ybS1jb250YWluZXIgLmZvcm0tZWxlbWVudCA+IHRleHRhcmVhIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbn1cbi5jb250YWN0LWZvcm0tY29udGFpbmVyIC5zZW5kIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMkUzQztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMkUzQztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFjdC1mb3JtLWNvbnRhaW5lciAuc2VuZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuLmNvbnRhY3QtZm9ybS1jb250YWluZXIgLnNlbmQ6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNERTg4Nzk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERTg4Nzk7XG59XG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciAuZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjg7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4ubmctdmFsaWRbcmVxdWlyZWRdLFxuLm5nLXZhbGlkLnJlcXVpcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xuICAvKiBncmVlbiAqL1xufVxuLm5nLWludmFsaWQ6bm90KGZvcm0pLm5nLWRpcnR5LFxuLm5nLWludmFsaWQ6bm90KGZvcm0pLm5nLXRvdWNoZWQge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XG4gIC8qIHJlZCAqL1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_models_Languages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Languages */ "./src/app/models/Languages.ts");





var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(languageService, http) {
        this.languageService = languageService;
        this.http = http;
        this.submitting = false;
        this.error = false;
        this.submitted = false;
        this.name = '';
        this.emailFrom = '';
        this.phoneNumber = '';
        this.description = '';
        this.headerMessage = 'Have any questions or want to know about pricing? Send us a quick message and we will get back to you as soon as we can.';
        this.contactTitle = 'Send a Message';
        this.nameTitle = 'Name';
        this.emailTitle = 'Email';
        this.phoneTitle = 'Phone Number';
        this.descriptionTitle = 'Description';
        this.sendTitle = 'SEND';
        this.errorMsg = 'There was an error. Try submitting again.';
        this.successMsg = 'Thank you for reaching out. We will contact you as early as possible. We look forward to your business!';
        this.sendAnotherMessageTitle = 'Send another message';
    }
    ContactusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toggleLanguage(this.languageService.getSelectedLanguage());
        this.languageToggle$ = this.languageService.languageToggle.subscribe(function (language) { return _this.toggleLanguage(language); });
    };
    ContactusComponent.prototype.onSubmit = function () {
        var _this = this;
        this.error = false;
        var data = JSON.stringify({
            name: this.name,
            email: this.emailFrom,
            phoneNumber: this.phoneNumber,
            message: this.description
        });
        this.http.post('contactus.php', data)
            .subscribe(function (response) {
            if (response['success']) {
                _this.submitting = false;
                _this.submitted = true;
            }
            else {
                _this.submitting = false;
                _this.submitted = false;
                _this.error = true;
            }
        });
    };
    ContactusComponent.prototype.sendAnotherMessage = function () {
        this.clearForm();
        this.submitted = false;
        this.submitting = false;
    };
    ContactusComponent.prototype.clearForm = function () {
        this.name = '';
        this.emailFrom = '';
        this.phoneNumber = '';
        this.description = '';
    };
    ContactusComponent.prototype.toggleLanguage = function (language) {
        switch (language) {
            case src_app_models_Languages__WEBPACK_IMPORTED_MODULE_4__["Language"].English:
                this.headerMessage = 'Have any questions or want to know about pricing? Send us a quick message and we will get back to you as soon as we can.';
                this.contactTitle = 'Send a Message';
                this.nameTitle = 'Name';
                this.emailTitle = 'Email';
                this.phoneTitle = 'Phone Number';
                this.descriptionTitle = 'Description';
                this.sendTitle = 'SEND';
                this.errorMsg = 'There was an error. Try submitting again.';
                this.successMsg = 'Thank you for reaching out. We will contact you as early as possible. We look forward to your business!';
                this.sendAnotherMessageTitle = 'Send another message';
                break;
            case src_app_models_Languages__WEBPACK_IMPORTED_MODULE_4__["Language"].Spanish:
                this.headerMessage = '¿Tienes preguntas o quieres una cotizacion? Mandanos un mensaje y te contestaremos lo mas rapido posible.';
                this.contactTitle = 'Mandanos un mensaje';
                this.nameTitle = 'Nombre';
                this.emailTitle = 'Correo Electronico';
                this.phoneTitle = 'Numero telefonico';
                this.descriptionTitle = 'Descripcion';
                this.sendTitle = 'ENVIA';
                this.errorMsg = 'Hubo un error. Intentalo de nuevo.';
                this.successMsg = 'Gracias por contactarnos. Te llamaremos lo mas pronto posible. ¡Apreciamos tu negocio!';
                this.sendAnotherMessageTitle = 'Manda otro mensaje';
                break;
        }
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'sp-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/components/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.less */ "./src/app/components/contactus/contactus.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_language_service__WEBPACK_IMPORTED_MODULE_1__["LanguageService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\">\r\n  <div class=\"company-info\">\r\n    <span>M&JJI Paradise LLC</span>\r\n    <span>Est. 2019</span>\r\n  </div>\r\n  <div class=\"social\">\r\n    <a href=\"https://www.facebook.com/MJI-Paradise-113375543747499\" target=\"_blank\">\r\n      <fa-icon [icon]=\"['fab', 'facebook-square']\"></fa-icon>\r\n    </a>\r\n\r\n    <a [href]=\"'https://wa.me/' + waPhoneNumber + '/?text=' + waMessage\">\r\n      <fa-icon href=\"#whatsapp\" [icon]=\"['fab', 'whatsapp']\"></fa-icon>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 30px 45px;\n  font-family: 'Oswald', sans-serif;\n  color: #DE8879;\n}\n@media only screen and (max-width: 768px) {\n  .footer-container {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n}\n.footer-container .company-info {\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n}\n@media only screen and (max-width: 768px) {\n  .footer-container .company-info {\n    align-items: center;\n  }\n}\n.footer-container .social a {\n  color: #DE8879;\n}\n.footer-container .social fa-icon {\n  font-size: 35px;\n  margin: 0 5px 0 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzovVXNlcnMvYXJ0dXIvQ29kZS9NamklMjBQYXJhZGlzZS9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNERjtBREdFO0VBQUE7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUNBRjtBQUNGO0FEWEE7RUFjSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQUo7QURFSTtFQUFBO0lBQ0UsbUJBQUE7RUNDSjtBQUNGO0FEckJBO0VBeUJNLGNBQUE7QUNETjtBRHhCQTtFQTZCTSxlQUFBO0VBQ0EsbUJBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3ZhcmlhYmxlcyc7XG5cbi5mb290ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAzMHB4IDQ1cHg7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktMTtcbiAgY29sb3I6IEBwYWxldHRlLTQ7XG5cbiAgQG1lZGlhIEBtb2JpbGUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5jb21wYW55LWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5zb2NpYWwge1xuICAgIGEge1xuICAgICAgY29sb3I6IEBwYWxldHRlLTQ7XG4gICAgfVxuXG4gICAgZmEtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICBtYXJnaW46IDAgNXB4IDAgNXB4O1xuICAgIH1cbiAgfVxufVxuIiwiLmZvb3Rlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMwcHggNDVweDtcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI0RFODg3OTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvb3Rlci1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuLmZvb3Rlci1jb250YWluZXIgLmNvbXBhbnktaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvb3Rlci1jb250YWluZXIgLmNvbXBhbnktaW5mbyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLmZvb3Rlci1jb250YWluZXIgLnNvY2lhbCBhIHtcbiAgY29sb3I6ICNERTg4Nzk7XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuc29jaWFsIGZhLWljb24ge1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbjogMCA1cHggMCA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.waMessage = 'Hello. I would like to inquire about a service you offer. Please give me a call at your earliest convenience.';
        this.waPhoneNumber = +8324708866;
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.less */ "./src/app/components/footer/footer.component.less")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\r\n  <div class=\"logo-container\">\r\n    <img class=\"logo-img\" src=\"assets/images/logo2.png\">\r\n    <div class=\"motto\">\"Don't stress, We'll handle the mess\"</div>\r\n  </div>\r\n\r\n  <div class=\"links\"\r\n       [ngClass]=\"{ 'menu-links-active' : mobileMenuOpen}\">\r\n    <div class=\"top-link-container\">\r\n      <div class=\"top-links\" *ngIf=\"topLinks.length\">\r\n        <a *ngFor=\"let link of topLinks\"\r\n           class=\"link\"\r\n           [href]=\"link.href\">\r\n           <span [class.link-active]=\"(link.name == 'Services' || link.name == 'Servicios') && servicesRouteActive\">\r\n             {{link.name}}\r\n           </span>\r\n        </a>\r\n      </div>\r\n      <div class=\"top-extra\">\r\n        <div class=\"call-buttons\">\r\n          <a href=\"tel:+8324708866\"\r\n            class=\"contact-button call\">\r\n           <fa-icon [icon]=\"['fa', 'phone']\"></fa-icon>\r\n           <span>8324708866</span>\r\n         </a>\r\n         <a [href]=\"'https://wa.me/' + waPhoneNumber + '/?text=' + waMessage\"\r\n                   class=\"contact-button wapp\">\r\n            <fa-icon [icon]=\"['fab', 'whatsapp']\"></fa-icon>\r\n            <span>{{messageHeader}}</span>\r\n          </a>\r\n        </div>\r\n        <sp-toggle-button class=\"language-toggle\"\r\n          [checked]=\"languageMode\"\r\n          [leftLabel]=\"'EN'\"\r\n          [rightLabel]=\"'ES'\"\r\n          (toggled)=\"toggleLanguage($event)\">\r\n        </sp-toggle-button>\r\n      </div>\r\n    </div>\r\n    <div class=\"bottom-links\">\r\n      <a *ngFor=\"let link of bottomLinks\"\r\n         [routerLink]=\"[link.link]\"\r\n         class=\"link\"\r\n         (click)=\"mobileMenuOpen = false\"\r\n         [routerLinkActive]=\"['link-active']\">\r\n         <span [class.link-active]=\"(link.name == 'Services' || link.name == 'Servicios') && servicesRouteActive\">\r\n           {{link.name}}\r\n         </span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <fa-icon [icon]=\"['fa', 'bars']\"\r\n           *ngIf=\"!mobileMenuOpen\"\r\n           (click)=\"mobileMenuOpen = !mobileMenuOpen\"\r\n           class=\"mobile-menu-button\">\r\n  </fa-icon>\r\n  <fa-icon [icon]=\"['fa', 'times']\"\r\n           *ngIf=\"mobileMenuOpen\"\r\n           (click)=\"mobileMenuOpen = !mobileMenuOpen\"\r\n           class=\"mobile-menu-button\">\r\n</fa-icon>\r\n\r\n  <div class=\"mobile-links-background\" *ngIf=\"mobileMenuOpen\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  font-family: 'Oswald', sans-serif;\n}\n.link {\n  color: white;\n  text-decoration: none;\n}\n.link:hover {\n  color: #DE8879;\n  text-decoration: none;\n}\n.link-active {\n  color: #DE8879;\n}\n@media only screen and (max-width: 768px) {\n  .header-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #CCEFAB;\n    margin-bottom: 80px;\n  }\n  .header-container .logo-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 15px 0;\n    -webkit-animation: logo-hover-down;\n            animation: logo-hover-down;\n    -webkit-animation-duration: 0.7s;\n            animation-duration: 0.7s;\n  }\n  .header-container .logo-container .logo-img {\n    width: 200px;\n  }\n  .header-container .logo-container .motto {\n    color: #DE8879;\n    margin-top: 15px;\n    font-family: 'Yanone Kaffeesatz', sans-serif;\n    font-size: 20px;\n  }\n  @-webkit-keyframes logo-hover-down {\n    from {\n      margin-top: -300px;\n    }\n    to {\n      margin-top: 15px;\n    }\n  }\n  @keyframes logo-hover-down {\n    from {\n      margin-top: -300px;\n    }\n    to {\n      margin-top: 15px;\n    }\n  }\n  .header-container .mobile-menu-button {\n    font-size: 40px;\n    position: absolute;\n    top: 1vh;\n    right: 7vw;\n    color: #DE8879;\n    z-index: 100;\n    -webkit-animation: menu-button-click;\n            animation: menu-button-click;\n    -webkit-animation-duration: 0.2s;\n            animation-duration: 0.2s;\n  }\n  @-webkit-keyframes menu-button-click {\n    from {\n      font-size: 40px;\n    }\n    to {\n      font-size: 37px;\n    }\n  }\n  @keyframes menu-button-click {\n    from {\n      font-size: 40px;\n    }\n    to {\n      font-size: 37px;\n    }\n  }\n  .header-container .mobile-links-background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    opacity: 0.8;\n  }\n  .header-container .links {\n    position: absolute;\n    top: 177px;\n    width: 100%;\n  }\n  .header-container .links .top-link-container {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n  }\n  .header-container .links .top-link-container .top-links {\n    display: flex;\n    justify-content: center;\n    flex-grow: 1;\n  }\n  .header-container .links .top-link-container .top-links .link {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 25px;\n    color: #DE8879;\n    border: 2px solid #DE8879;\n    height: 50px;\n    border-radius: 5px;\n    width: 180px;\n  }\n  .header-container .links .top-link-container .top-extra {\n    flex-grow: 1;\n  }\n  .header-container .links .top-link-container .top-extra .call-buttons {\n    display: flex;\n    justify-content: space-around;\n  }\n  .header-container .links .top-link-container .top-extra .call-buttons .contact-button {\n    font-size: 22px;\n    border-radius: 5px;\n    height: 50px;\n    width: 155px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid #DE8879;\n    color: #DE8879;\n    text-decoration: none;\n  }\n  .header-container .links .top-link-container .top-extra .call-buttons .contact-button fa-icon {\n    margin-right: 5px;\n  }\n  .header-container .links .top-link-container .top-extra .call-buttons .contact-button.call fa-icon {\n    font-size: 21px;\n  }\n  .header-container .links .top-link-container .top-extra .language-toggle {\n    display: none;\n  }\n  .header-container .links.menu-links-active .top-link-container .top-extra .language-toggle {\n    display: block;\n    position: absolute;\n    top: -11vh;\n    left: 7vw;\n    z-index: 105;\n  }\n  .header-container .links.menu-links-active .bottom-links {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    -webkit-animation: links-appear;\n            animation: links-appear;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n  }\n  .header-container .links .bottom-links {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: none;\n    font-size: 50px;\n    font-weight: 900;\n    color: white;\n    z-index: 100;\n  }\n  @-webkit-keyframes links-appear {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  @keyframes links-appear {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  .header-container .covid-banner {\n    border: 1px solid #DE8879;\n    border-radius: 6px;\n    padding: 0 10px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #DE8879;\n    cursor: pointer;\n    margin: 0 auto 15px auto;\n  }\n  .header-container .covid-banner fa-icon {\n    color: yellow;\n    font-size: 30px;\n    margin-right: 10px;\n  }\n  .header-container .covid-banner span {\n    color: white;\n    font-size: 22px;\n  }\n}\n@media only screen and (min-width: 769px) {\n  .header-container {\n    background-color: #CCEFAB;\n    display: flex;\n    margin: 10px 0 10px 0;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 45px;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n  }\n  .header-container .logo-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .header-container .logo-container .logo-img {\n    width: 250px;\n  }\n  .header-container .logo-container .motto {\n    color: #DE8879;\n    margin-top: 15px;\n    font-family: 'Yanone Kaffeesatz', sans-serif;\n    font-size: 20px;\n  }\n  .header-container .links {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-self: stretch;\n    align-items: flex-end;\n    color: white;\n    font-weight: 900;\n    padding: 10px 0;\n  }\n  .header-container .top-link-container {\n    display: flex;\n  }\n  .header-container .top-link-container .top-links {\n    display: flex;\n    align-items: center;\n    font-size: 25px;\n    margin-right: 15px;\n  }\n  .header-container .top-link-container .top-links a {\n    color: #DE8879;\n  }\n  .header-container .top-link-container .top-links a:hover {\n    text-decoration: underline;\n    cursor: pointer;\n  }\n  .header-container .top-link-container .top-extra {\n    display: flex;\n    align-items: center;\n  }\n  .header-container .top-link-container .top-extra .call-buttons {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    flex-grow: 1;\n  }\n  .header-container .top-link-container .top-extra .call-buttons .contact-button {\n    color: #DE8879;\n    font-size: 25px;\n    border: 2px solid #DE8879;\n    border-radius: 5px;\n    height: 50px;\n    width: 185px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #CCEFAB;\n    text-decoration: none;\n    margin-right: 15px;\n  }\n  .header-container .top-link-container .top-extra .call-buttons .contact-button:hover {\n    background-color: #DE8879;\n    color: white;\n  }\n  .header-container .top-link-container .top-extra .call-buttons .contact-button fa-icon {\n    margin-right: 5px;\n  }\n  .header-container .bottom-links {\n    font-size: 22px;\n    display: flex;\n    width: 500px;\n  }\n  .header-container .bottom-links .link {\n    flex-grow: 1;\n    text-align: right;\n  }\n  .covid-banner {\n    position: absolute;\n    top: 150px;\n    right: 550px;\n    border: 1px solid #DE8879;\n    border-radius: 6px;\n    width: 400px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #DE8879;\n    cursor: pointer;\n  }\n  .covid-banner fa-icon {\n    color: yellow;\n    font-size: 30px;\n    margin-right: 10px;\n  }\n  .covid-banner span {\n    color: white;\n    font-size: 22px;\n  }\n  .mobile-menu-button {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzovVXNlcnMvYXJ0dXIvQ29kZS9NamklMjBQYXJhZGlzZS9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9DOi9Vc2Vycy9hcnR1ci9Db2RlL01qaSUyMFBhcmFkaXNlL3NyYy92YXJpYWJsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlDQUFBO0FDREY7QURJQTtFRVdFLFlBQUE7RUFDQSxxQkFBQTtBRFpGO0FDY0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QURaSjtBREFBO0VBQ0UsY0FBQTtBQ0VGO0FEQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSx5QkFBQTtJQUNBLG1CQUFBO0VDQ0Y7RURQQTtJQVNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxnQ0FBQTtZQUFBLHdCQUFBO0VDQ0o7RURmQTtJQWlCTSxZQUFBO0VDQ047RURsQkE7SUFxQk0sY0FBQTtJQUNBLGdCQUFBO0lBQ0EsNENBQUE7SUFDQSxlQUFBO0VDQU47RURJRTtJQUNFO01BQU8sa0JBQUE7SUNEVDtJREVFO01BQUssZ0JBQUE7SUNDUDtFQUNGO0VESkU7SUFDRTtNQUFPLGtCQUFBO0lDRFQ7SURFRTtNQUFLLGdCQUFBO0lDQ1A7RUFDRjtFRGhDQTtJQWtDSSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUNDSjtFREVFO0lBQ0U7TUFBTyxlQUFBO0lDQ1Q7SURBRTtNQUFLLGVBQUE7SUNHUDtFQUNGO0VETkU7SUFDRTtNQUFPLGVBQUE7SUNDVDtJREFFO01BQUssZUFBQTtJQ0dQO0VBQ0Y7RURsREE7SUFrREksZUFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFLQSx1QkFBQTtJQUNBLFlBQUE7RUNESjtFRDNEQTtJQWdFSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VDRko7RURoRUE7SUFxRU0sYUFBQTtJQUNBLDZCQUFBO0lBQ0EsbUJBQUE7RUNGTjtFRHJFQTtJQTBFUSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0VDRlI7RUQxRUE7SUErRVUsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQ0ZWO0VEckZBO0lBNEZRLFlBQUE7RUNKUjtFRHhGQTtJQStGVSxhQUFBO0lBQ0EsNkJBQUE7RUNKVjtFRDVGQTtJQW1HWSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7RUNKWjtFRHhHQTtJQStHYyxpQkFBQTtFQ0pkO0VET1k7SUFFSSxlQUFBO0VDTmhCO0VEOUdBO0lBMkhVLGFBQUE7RUNWVjtFRGVJO0lBSVEsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0VDaEJaO0VEUUk7SUFjSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsK0JBQUE7WUFBQSx1QkFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUNuQlI7RURoSUE7SUFrREksZUFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFtR0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VDakJOO0VEcUJFO0lBQ0U7TUFBTyxVQUFBO0lDbEJUO0lEbUJFO01BQUssVUFBQTtJQ2hCUDtFQUNGO0VEYUU7SUFDRTtNQUFPLFVBQUE7SUNsQlQ7SURtQkU7TUFBSyxVQUFBO0lDaEJQO0VBQ0Y7RURwSkE7SUF1S0kseUJBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtFQ2hCSjtFRGhLQTtJQW1MTSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDaEJOO0VEcktBO0lBeUxNLFlBQUE7SUFDQSxlQUFBO0VDakJOO0FBQ0Y7QURzQkE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsYUFBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUVBLGtCQUFBO0lBQ0Esd0JBQUE7SUFBQSxnQkFBQTtJQUNBLE1BQUE7RUNyQkY7RURZQTtJQVlJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VDckJKO0VET0E7SUFpQk0sWUFBQTtFQ3JCTjtFRElBO0lBcUJNLGNBQUE7SUFDQSxnQkFBQTtJQUNBLDRDQUFBO0lBQ0EsZUFBQTtFQ3RCTjtFREZBO0lBNkJJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLDZCQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUN4Qko7RURaQTtJQXdDTSxhQUFBO0VDekJOO0VEZkE7SUEyQ1EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDekJSO0VEckJBO0lBaURVLGNBQUE7RUN6QlY7RUQyQlU7SUFDRSwwQkFBQTtJQUNBLGVBQUE7RUN6Qlo7RUQ1QkE7SUEyRFEsYUFBQTtJQUNBLG1CQUFBO0VDNUJSO0VEaENBO0lBK0RVLGFBQUE7SUFDQSw4QkFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtFQzVCVjtFRHRDQTtJQXFFWSxjQUFBO0lBQ0EsZUFBQTtJQUNBLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0VDNUJaO0VEOEJZO0lBQ0UseUJBQUE7SUFDQSxZQUFBO0VDNUJkO0VEeERBO0lBd0ZjLGlCQUFBO0VDN0JkO0VEM0RBO0lBZ0dNLGVBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFQ2xDTjtFRGhFQTtJQXFHUSxZQUFBO0lBQ0EsaUJBQUE7RUNsQ1I7RUR1Q0U7SUFDRSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGVBQUE7RUNyQ0o7RUR5QkU7SUFlSSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDckNOO0VEb0JFO0lBcUJJLFlBQUE7SUFDQSxlQUFBO0VDdENOO0VEMENFO0lBQ0UsYUFBQTtFQ3hDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vdmFyaWFibGVzJztcblxuZGl2IHtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseS0xO1xufVxuXG4ubGluayB7XG4gIEBsaW5rLWNvbG9yLXN0eWxlKCk7XG59XG5cbi5saW5rLWFjdGl2ZSB7XG4gIGNvbG9yOiBAcGFsZXR0ZS00O1xufVxuXG5AbWVkaWEgQG1vYmlsZSB7XG4gIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAaGVhZGVyLWJhY2tncm91bmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcblxuICAgIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgIGFuaW1hdGlvbjogbG9nby1ob3Zlci1kb3duO1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuN3M7XG5cbiAgICAgIC5sb2dvLWltZyB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIH1cblxuICAgICAgLm1vdHRvIHtcbiAgICAgICAgY29sb3I6IEBwYWxldHRlLTQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnWWFub25lIEthZmZlZXNhdHonLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBsb2dvLWhvdmVyLWRvd24ge1xuICAgICAgZnJvbSB7IG1hcmdpbi10b3A6IC0zMDBweCB9XG4gICAgICB0byB7IG1hcmdpbi10b3A6IDE1cHggfVxuICAgIH1cblxuICAgIC5tb2JpbGUtbWVudS1idXR0b24ge1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxdmg7XG4gICAgICByaWdodDogN3Z3O1xuICAgICAgY29sb3I6IEBwYWxldHRlLTQ7XG4gICAgICB6LWluZGV4OiAxMDA7XG4gICAgICBhbmltYXRpb246IG1lbnUtYnV0dG9uLWNsaWNrO1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBtZW51LWJ1dHRvbi1jbGljayB7XG4gICAgICBmcm9tIHsgZm9udC1zaXplOiA0MHB4OyB9XG4gICAgICB0byB7IGZvbnQtc2l6ZTogMzdweDsgfVxuICAgIH1cblxuICAgIEBtb2JpbGUtbWVudS1vcmllbnRhdGlvbjoge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5tb2JpbGUtbGlua3MtYmFja2dyb3VuZCB7XG4gICAgICBAbW9iaWxlLW1lbnUtb3JpZW50YXRpb24oKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cblxuICAgIC5saW5rcyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgdG9wOiAxNzdweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAudG9wLWxpbmstY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLnRvcC1saW5rcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgICAgICAubGluayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6IEBwYWxldHRlLTQ7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBAcGFsZXR0ZS00O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgLnRvcC1leHRyYSB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuXG4gICAgICAgICAgLmNhbGwtYnV0dG9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgXG4gICAgICAgICAgICAuY29udGFjdC1idXR0b24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTU1cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBAcGFsZXR0ZS00O1xuICAgICAgICAgICAgICBjb2xvcjogQHBhbGV0dGUtNDtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgXG4gICAgICAgICAgICAgIGZhLWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgJi5jYWxsIHtcbiAgICAgICAgICAgICAgICBmYS1pY29uIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IFxuICBcbiAgICAgICAgICAubGFuZ3VhZ2UtdG9nZ2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuICAgICAgfVxuXG4gICAgICAmLm1lbnUtbGlua3MtYWN0aXZlIHtcbiAgICAgICAgLnRvcC1saW5rLWNvbnRhaW5lciB7XG4gICAgICAgICAgLnRvcC1leHRyYSB7XG4gICAgICAgICAgICAubGFuZ3VhZ2UtdG9nZ2xlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAtMTF2aDtcbiAgICAgICAgICAgICAgbGVmdDogN3Z3O1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJvdHRvbS1saW5rc3tcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbmltYXRpb246IGxpbmtzLWFwcGVhcjtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IC41cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAuYm90dG9tLWxpbmtzIHtcbiAgICAgICAgQG1vYmlsZS1tZW51LW9yaWVudGF0aW9uKCk7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBsaW5rcy1hcHBlYXIge1xuICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICAgIHRvIHsgb3BhY2l0eTogMTsgfVxuICAgIH1cblxuICAgIC5jb3ZpZC1iYW5uZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgQHBhbGV0dGUtNDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcGFsZXR0ZS00O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMTVweCBhdXRvO1xuXG4gICAgICBmYS1pY29uIHtcbiAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIEBkZXNrdG9wIHtcbiAgLmhlYWRlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBoZWFkZXItYmFja2dyb3VuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBAaW1nLXdpZHRoOiAyNTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDQ1cHg7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG5cbiAgICAubG9nby1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAubG9nby1pbWcge1xuICAgICAgICB3aWR0aDogQGltZy13aWR0aDtcbiAgICAgIH1cblxuICAgICAgLm1vdHRvIHtcbiAgICAgICAgY29sb3I6IEBwYWxldHRlLTQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnWWFub25lIEthZmZlZXNhdHonLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxpbmtzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIH1cblxuICAgICAgLnRvcC1saW5rLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLnRvcC1saW5rcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IEBwYWxldHRlLTQ7XG4gIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRvcC1leHRyYSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgLmNhbGwtYnV0dG9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgXG4gICAgICAgICAgICAuY29udGFjdC1idXR0b24ge1xuICAgICAgICAgICAgICBjb2xvcjogQHBhbGV0dGUtNDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBAcGFsZXR0ZS00O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDE4NXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQGhlYWRlci1iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIFxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcGFsZXR0ZS00O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGZhLWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ib3R0b20tbGlua3Mge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiA1MDBweDtcblxuICAgICAgICAubGluayB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvdmlkLWJhbm5lciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDE1MHB4O1xuICAgICAgcmlnaHQ6IDU1MHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgQHBhbGV0dGUtNDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcGFsZXR0ZS00O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBmYS1pY29uIHtcbiAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9iaWxlLW1lbnUtYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9IiwiZGl2IHtcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xufVxuLmxpbmsge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNERTg4Nzk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5saW5rLWFjdGl2ZSB7XG4gIGNvbG9yOiAjREU4ODc5O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDRUZBQjtcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgYW5pbWF0aW9uOiBsb2dvLWhvdmVyLWRvd247XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAubG9nby1pbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLm1vdHRvIHtcbiAgICBjb2xvcjogI0RFODg3OTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnWWFub25lIEthZmZlZXNhdHonLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICBAa2V5ZnJhbWVzIGxvZ28taG92ZXItZG93biB7XG4gICAgZnJvbSB7XG4gICAgICBtYXJnaW4tdG9wOiAtMzAwcHg7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC5tb2JpbGUtbWVudS1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxdmg7XG4gICAgcmlnaHQ6IDd2dztcbiAgICBjb2xvcjogI0RFODg3OTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYW5pbWF0aW9uOiBtZW51LWJ1dHRvbi1jbGljaztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XG4gIH1cbiAgQGtleWZyYW1lcyBtZW51LWJ1dHRvbi1jbGljayB7XG4gICAgZnJvbSB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGZvbnQtc2l6ZTogMzdweDtcbiAgICB9XG4gIH1cbiAgLmhlYWRlci1jb250YWluZXIgLm1vYmlsZS1saW5rcy1iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAubGlua3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3N3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC5saW5rcyAudG9wLWxpbmstY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmhlYWRlci1jb250YWluZXIgLmxpbmtzIC50b3AtbGluay1jb250YWluZXIgLnRvcC1saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmhlYWRlci1jb250YWluZXIgLmxpbmtzIC50b3AtbGluay1jb250YWluZXIgLnRvcC1saW5rcyAubGluayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogI0RFODg3OTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjREU4ODc5O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC5saW5rcyAudG9wLWxpbmstY29udGFpbmVyIC50b3AtZXh0cmEge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAubGlua3MgLnRvcC1saW5rLWNvbnRhaW5lciAudG9wLWV4dHJhIC5jYWxsLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgLmhlYWRlci1jb250YWluZXIgLmxpbmtzIC50b3AtbGluay1jb250YWluZXIgLnRvcC1leHRyYSAuY2FsbC1idXR0b25zIC5jb250YWN0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDE1NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjREU4ODc5O1xuICAgIGNvbG9yOiAjREU4ODc5O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAubGlua3MgLnRvcC1saW5rLWNvbnRhaW5lciAudG9wLWV4dHJhIC5jYWxsLWJ1dHRvbnMgLmNvbnRhY3QtYnV0dG9uIGZhLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC5saW5rcyAudG9wLWxpbmstY29udGFpbmVyIC50b3AtZXh0cmEgLmNhbGwtYnV0dG9ucyAuY29udGFjdC1idXR0b24uY2FsbCBmYS1pY29uIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gIH1cbiAgLmhlYWRlci1jb250YWluZXIgLmxpbmtzIC50b3AtbGluay1jb250YWluZXIgLnRvcC1leHRyYSAubGFuZ3VhZ2UtdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC5saW5rcy5tZW51LWxpbmtzLWFjdGl2ZSAudG9wLWxpbmstY29udGFpbmVyIC50b3AtZXh0cmEgLmxhbmd1YWdlLXRvZ2dsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTExdmg7XG4gICAgbGVmdDogN3Z3O1xuICAgIHotaW5kZXg6IDEwNTtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAubGlua3MubWVudS1saW5rcy1hY3RpdmUgLmJvdHRvbS1saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYW5pbWF0aW9uOiBsaW5rcy1hcHBlYXI7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC5saW5rcyAuYm90dG9tLWxpbmtzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxuICBAa2V5ZnJhbWVzIGxpbmtzLWFwcGVhciB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAuY292aWQtYmFubmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREU4ODc5O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREU4ODc5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0byAxNXB4IGF1dG87XG4gIH1cbiAgLmhlYWRlci1jb250YWluZXIgLmNvdmlkLWJhbm5lciBmYS1pY29uIHtcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmhlYWRlci1jb250YWluZXIgLmNvdmlkLWJhbm5lciBzcGFuIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NFRkFCO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHggNDVweDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAubG9nby1pbWcge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLm1vdHRvIHtcbiAgICBjb2xvcjogI0RFODg3OTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnWWFub25lIEthZmZlZXNhdHonLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAubGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cbiAgLmhlYWRlci1jb250YWluZXIgLnRvcC1saW5rLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAudG9wLWxpbmstY29udGFpbmVyIC50b3AtbGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC50b3AtbGluay1jb250YWluZXIgLnRvcC1saW5rcyBhIHtcbiAgICBjb2xvcjogI0RFODg3OTtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAudG9wLWxpbmstY29udGFpbmVyIC50b3AtbGlua3MgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC50b3AtbGluay1jb250YWluZXIgLnRvcC1leHRyYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC50b3AtbGluay1jb250YWluZXIgLnRvcC1leHRyYSAuY2FsbC1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC50b3AtbGluay1jb250YWluZXIgLnRvcC1leHRyYSAuY2FsbC1idXR0b25zIC5jb250YWN0LWJ1dHRvbiB7XG4gICAgY29sb3I6ICNERTg4Nzk7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNERTg4Nzk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTg1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0VGQUI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAudG9wLWxpbmstY29udGFpbmVyIC50b3AtZXh0cmEgLmNhbGwtYnV0dG9ucyAuY29udGFjdC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERTg4Nzk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC50b3AtbGluay1jb250YWluZXIgLnRvcC1leHRyYSAuY2FsbC1idXR0b25zIC5jb250YWN0LWJ1dHRvbiBmYS1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAuYm90dG9tLWxpbmtzIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cbiAgLmhlYWRlci1jb250YWluZXIgLmJvdHRvbS1saW5rcyAubGluayB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gIC5jb3ZpZC1iYW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1MHB4O1xuICAgIHJpZ2h0OiA1NTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREU4ODc5O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREU4ODc5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuY292aWQtYmFubmVyIGZhLWljb24ge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuY292aWQtYmFubmVyIHNwYW4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgLm1vYmlsZS1tZW51LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiQHBhbGV0dGUtMTogI2U4ZTllYjtcbkBwYWxldHRlLTI6ICMzMzJFM0M7XG5AcGFsZXR0ZS0zOiAjOUEyNzVBO1xuQHBhbGV0dGUtNDogI0RFODg3OTtcbkBoZWFkZXItYmFja2dyb3VuZDogI0NDRUZBQjtcblxuQGJhY2tncm91bmQtZ3JheTogI0VDRjRGRTtcblxuQGZvbnQtZmFtaWx5LTE6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuQGZvbnQtZmFtaWx5LTI6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXG5AZGVza3RvcC13aWR0aDogMTYwMHB4O1xuXG5AbW9iaWxlOiB+XCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpXCI7XG5AZGVza3RvcDogflwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KVwiO1xuXG5AbGluay1jb2xvci1zdHlsZToge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogQHBhbGV0dGUtNDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn07XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Languages */ "./src/app/models/Languages.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/language.service */ "./src/app/services/language.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(languageService, router) {
        this.languageService = languageService;
        this.router = router;
        this.langueToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.servicesRouteActive = false;
        this.mobileMenuOpen = false;
        this.covidBannerText = 'COVID-19 Specific Cleaning Available';
        this.messageHeader = 'Send Message';
        this.waMessage = 'Hello. I would like to inquire about a service you offer. Please give me a call at your earliest convenience.';
        this.waPhoneNumber = +8324708866;
        this.bottomLinks = [
            { name: 'Home', link: '/home' },
            { name: 'Services', link: '/services/1' },
            { name: 'Contact', link: '/contactus' },
            { name: 'About Us', link: '/aboutus' },
            { name: 'Careers', link: '/careers' }
        ];
        this.topLinks = []; //[{ name: 'Request a Quote', link: 'contactus', href: '#'}];
        this.languageMode = _models_Languages__WEBPACK_IMPORTED_MODULE_3__["Language"].English;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.listenForRoute();
        this.toggleLanguage(this.languageService.getSelectedLanguage());
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.activeRoute$.unsubscribe();
    };
    HeaderComponent.prototype.sendToDeepCleaning = function () {
        this.router.navigate(['/services/7']);
    };
    HeaderComponent.prototype.toggleLanguage = function (language) {
        this.languageMode = language;
        var selectedLanguage = this.languageMode ? _models_Languages__WEBPACK_IMPORTED_MODULE_3__["Language"].Spanish : _models_Languages__WEBPACK_IMPORTED_MODULE_3__["Language"].English;
        switch (selectedLanguage) {
            case _models_Languages__WEBPACK_IMPORTED_MODULE_3__["Language"].English:
                this.messageHeader = 'Send Message';
                this.covidBannerText = 'COVID-19 Specific Cleaning Available';
                this.waMessage = 'Hello. I would like to inquire about a service you offer. Please give me a call at your earliest convenience.';
                this.bottomLinks = [
                    { name: 'Home', link: '/home' },
                    { name: 'Services', link: '/services/1' },
                    { name: 'Contact', link: '/contactus' },
                    { name: 'About Us', link: '/aboutus' },
                    { name: 'Careers', link: '/careers' }
                ];
                this.topLinks = []; //[{ name: 'Request a Quote', link: 'contactus', href: '#'}];
                break;
            case _models_Languages__WEBPACK_IMPORTED_MODULE_3__["Language"].Spanish:
                this.messageHeader = 'Mandar Mensaje';
                this.covidBannerText = 'Limpieza Especifica al COVID-19';
                this.waMessage = 'Hola. Me gustaria preguntar sobre uno de tus servicios. Por favor de comunicarte lo mas pronto posible.';
                this.bottomLinks = [
                    { name: 'Inicio', link: '/home' },
                    { name: 'Servicios', link: '/services/1' },
                    { name: 'Contáctanos', link: '/contactus' },
                    { name: 'Historia', link: '/aboutus' },
                    { name: 'Unete al Equipo', link: '/careers' }
                ];
                this.topLinks = []; //[{ name: 'Pide Su Cotizacion', link: 'contactus', href: '#'}];
                break;
        }
        this.languageService.toggleLanguage(selectedLanguage);
    };
    HeaderComponent.prototype.listenForRoute = function () {
        var _this = this;
        this.activeRoute$ = this.router
            .events
            .subscribe(function (event) {
            if (event['routerEvent']) {
                _this.servicesRouteActive = event['routerEvent']['url'].includes('services');
            }
            else
                _this.servicesRouteActive = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "langueToggle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'sp-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/components/header/header.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\r\n  <div class=\"intro\">\r\n    {{title}}\r\n  </div>\r\n\r\n  <div class=\"why-spartan\">\r\n    <span class=\"title\">{{whySpartanTitle}}</span>\r\n    <div class=\"reasons-container\">\r\n      <div *ngFor=\"let r of reasons\" class=\"reason\">\r\n        <div [class]=\"r.pictureClass\">\r\n          <img [src]=\"r.picture\">\r\n        </div>\r\n        <span>{{r.reason}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"services\">\r\n    <span class=\"title\">\r\n      {{servicesTitle}}\r\n    </span>\r\n    <div class=\"list\">\r\n      <div *ngFor=\"let service of services\"\r\n           [routerLink]=\"[service.link]\"\r\n           class=\"service\">\r\n           {{selectedLanguage == 0 ? service.name : service.nameES}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"service-area\">\r\n    <div class=\"title\">\r\n      <span>{{serviceAreaTitle}}</span>\r\n    </div>\r\n    <ul>\r\n      <li>Atascocita</li>\r\n      <li>Baytown</li>\r\n      <li>Bellaire</li>\r\n      <li>Channelview</li>\r\n      <li>Crosby</li>\r\n      <li>Deer Park</li>\r\n      <li>Galena Park</li>\r\n      <li>Harris County</li>\r\n      <li>Highlands</li>\r\n      <li>Houston</li>\r\n      <li>Humble</li>\r\n      <li>Katy</li>\r\n      <li>La Porte</li>\r\n      <li>Nassau Bay</li>\r\n      <li>Pasadena</li>\r\n      <li>Seabrook</li>\r\n      <li>South Houston</li>\r\n      <li>Spring</li>\r\n      <li>Tomball</li>\r\n      <li>Webster</li>\r\n      <li>West University Place</li>\r\n    </ul>\r\n    <span class=\"other-service-areas\">*{{otherServicesText}}</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.less":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-container {\n  display: flex;\n  flex-direction: column;\n  font-family: 'Oswald', sans-serif;\n}\n.home-container .intro {\n  color: white;\n  font-size: 4em;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-shadow: 0 0 40px black;\n  height: 840px;\n  align-items: flex-start;\n  background-image: url('/mji/assets/images/home-clean-bed.webp');\n  background-position: -150px 0;\n  padding-top: 60px;\n}\n@media only screen and (max-width: 768px) {\n  .home-container .intro {\n    font-size: 3em;\n    background-position: -680px 860px;\n    height: 800px;\n    text-align: center;\n  }\n}\n.home-container .why-spartan {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  background-color: #9A275A;\n  padding: 40px 0;\n  margin-top: 20px;\n}\n.home-container .why-spartan > .title {\n  font-size: 40px;\n  margin-bottom: 40px;\n}\n.home-container .why-spartan .reasons-container {\n  display: flex;\n  width: 65%;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 768px) {\n  .home-container .why-spartan .reasons-container {\n    width: 90%;\n  }\n}\n.home-container .why-spartan .reasons-container .reason {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 30px;\n  font-family: 'Roboto', sans-serif;\n  text-align: center;\n  margin-bottom: 20px;\n  width: 300px;\n}\n@media only screen and (max-width: 768px) {\n  .home-container .why-spartan .reasons-container .reason {\n    width: 250px;\n  }\n}\n.home-container .why-spartan .reasons-container .reason span {\n  width: 75%;\n}\n.home-container .why-spartan .reasons-container .reason .years-of-experience {\n  background-color: white;\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.home-container .why-spartan .reasons-container .reason .years-of-experience img {\n  width: 200px;\n}\n.home-container .why-spartan .reasons-container .reason .twentyfour-7-service img {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  margin-bottom: 20px;\n}\n.home-container .why-spartan .reasons-container .reason .attention-to-detail img {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  margin-bottom: 20px;\n}\n.home-container .why-spartan .reasons-container .reason .no-job-too-big-or-small img {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  margin-bottom: 20px;\n}\n.home-container .why-spartan .reasons-container .reason .knowledgeable-and-responsible img {\n  width: 200px;\n  height: 200px;\n  margin-bottom: 20px;\n}\n.home-container .why-spartan .reasons-container .reason .free-quote img {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  margin-bottom: 20px;\n}\n@media only screen and (max-width: 768px) {\n  .home-container .why-spartan {\n    padding: 20px;\n  }\n  .home-container .why-spartan > .title {\n    font-size: 30px;\n  }\n  .home-container .why-spartan ul {\n    font-size: 20px;\n  }\n}\n.home-container .services {\n  background-color: #332E3C;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 0;\n  margin-top: 30px;\n}\n@media only screen and (max-width: 768px) {\n  .home-container .services {\n    padding: 20px 0;\n  }\n}\n.home-container .services > .title {\n  font-size: 40px;\n  color: white;\n  width: 80%;\n  margin-bottom: 40px;\n}\n@media only screen and (max-width: 768px) {\n  .home-container .services > .title {\n    font-size: 30px;\n    margin-bottom: 10px;\n  }\n}\n.home-container .services > .list {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 65%;\n}\n@media only screen and (max-width: 768px) {\n  .home-container .services > .list {\n    width: 90%;\n  }\n}\n.home-container .services > .list .service {\n  color: #9A275A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #e8e9eb;\n  width: 200px;\n  height: 200px;\n  font-size: 25px;\n  font-weight: 700;\n  text-align: center;\n  border-radius: 50%;\n  flex-wrap: wrap;\n  cursor: pointer;\n  margin: 20px;\n}\n.home-container .services > .list .service:hover {\n  background-color: #DE8879;\n  color: white;\n}\n.home-container .service-area {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  background-color: #9A275A;\n  color: white;\n  padding-bottom: 20px;\n  margin-top: 40px;\n}\n.home-container .service-area > .title {\n  color: white;\n  font-size: 4em;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-shadow: 0 0 40px black;\n  height: 550px;\n  background-image: url('/mji/assets/images/houston-skyline-2.jpg');\n  background-position: -100px 720px;\n  width: 100%;\n}\n@media only screen and (max-width: 768px) {\n  .home-container .service-area > .title {\n    font-size: 3em;\n    height: 300px;\n    background-position: -470px 550px;\n    background-image: url('/mji/assets/images/houston-skyline.jpg');\n  }\n}\n.home-container .service-area > .title > span {\n  text-align: center;\n  width: 70%;\n}\n.home-container .service-area > ul {\n  -webkit-columns: 3;\n          columns: 3;\n  font-size: 30px;\n  font-family: 'Roboto', sans-serif;\n}\n@media only screen and (max-width: 768px) {\n  .home-container .service-area > ul {\n    width: 90%;\n    font-size: 23px;\n    -webkit-columns: 2;\n            columns: 2;\n  }\n}\n.home-container .service-area .other-service-areas {\n  justify-self: baseline;\n  font-size: 15px;\n  font-style: italic;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6L1VzZXJzL2FydHVyL0NvZGUvTWppJTIwUGFyYWRpc2Uvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtBQ1hGO0FEUUE7RUFURSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBVUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsK0RBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FDTEo7QURPSTtFQUFBO0lBQ0UsY0FBQTtJQUNBLGlDQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDSko7QUFDRjtBRGRBO0VBc0JJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTEo7QURPSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0xOO0FEM0JBO0VBb0NNLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDTk47QURRTTtFQUFBO0lBQ0UsVUFBQTtFQ0xOO0FBQ0Y7QUR0Q0E7RUE4Q1EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0xSO0FET1E7RUFBQTtJQUNFLFlBQUE7RUNKUjtBQUNGO0FEckRBO0VBNERVLFVBQUE7QUNKVjtBRHhEQTtFQWdFVSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0xWO0FEakVBO0VBd0VnQixZQUFBO0FDSmhCO0FEcEVBO0VBNkVZLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ05aO0FEMUVBO0VBc0ZZLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1RaO0FEaEZBO0VBK0ZZLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1paO0FEdEZBO0VBd0dZLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNmWjtBRDNGQTtFQWdIWSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNsQlo7QUR3Qkk7RUFBQTtJQUNFLGFBQUE7RUNyQko7RUR1Qkk7SUFDRSxlQUFBO0VDckJOO0VEaUJFO0lBUUksZUFBQTtFQ3RCTjtBQUNGO0FENUdBO0VBdUlJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDeEJKO0FEMEJJO0VBQUE7SUFDRSxlQUFBO0VDdkJKO0FBQ0Y7QUR5Qkk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ3ZCTjtBRHlCTTtFQUFBO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDdEJOO0FBQ0Y7QUR5Qkk7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDdkJOO0FEeUJNO0VBQUE7SUFDRSxVQUFBO0VDdEJOO0FBQ0Y7QURhSTtFQVlJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDdEJSO0FEd0JRO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDdEJWO0FEdEtBO0VBbU1JLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUMxQko7QUQ0Qkk7RUFyTkYsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQWlOSSxhQUFBO0VBQ0EsaUVBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7QUNwQk47QURzQk07RUFBQTtJQUNFLGNBQUE7SUFDQSxhQUFBO0lBQ0EsaUNBQUE7SUFDQSwrREFBQTtFQ25CTjtBQUNGO0FEcUJNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDbkJSO0FEdUJJO0VBQ0Usa0JBQUE7VUFBQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDckJOO0FEdUJNO0VBQUE7SUFDRSxVQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO1lBQUEsVUFBQTtFQ3BCTjtBQUNGO0FEck5BO0VBNk9NLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDckJOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi8uLi92YXJpYWJsZXMnO1xuXG5AdGl0bGUtYW5kLWJhY2tncm91bmQtaW1nOiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMCAwIDQwcHggYmxhY2s7XG59O1xuXG4uaG9tZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LTE7XG5cbiAgLmludHJvIHtcbiAgICBAdGl0bGUtYW5kLWJhY2tncm91bmQtaW1nKCk7XG4gICAgaGVpZ2h0OiA4NDBweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+L2Fzc2V0cy9pbWFnZXMvaG9tZS1jbGVhbi1iZWQud2VicFwiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTUwcHggMDtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcblxuICAgIEBtZWRpYSBAbW9iaWxlIHtcbiAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY4MHB4IDg2MHB4O1xuICAgICAgaGVpZ2h0OiA4MDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAud2h5LXNwYXJ0YW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcGFsZXR0ZS0zO1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgJiA+IC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cblxuICAgIC5yZWFzb25zLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDY1JTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICB9XG5cbiAgICAgIC5yZWFzb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktMjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB3aWR0aDogMzAwcHg7XG5cbiAgICAgICAgQG1lZGlhIEBtb2JpbGUge1xuICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIH1cblxuICAgICAgICAueWVhcnMtb2YtZXhwZXJpZW5jZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgICAgaW1nIHsgd2lkdGg6IDIwMHB4OyB9XG4gICAgICAgIH1cblxuICAgICAgICAudHdlbnR5Zm91ci03LXNlcnZpY2Uge1xuICAgICAgICAgIGltZyB7IFxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmF0dGVudGlvbi10by1kZXRhaWwge1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubm8tam9iLXRvby1iaWctb3Itc21hbGwge1xuICAgICAgICAgIGltZyB7IFxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmtub3dsZWRnZWFibGUtYW5kLXJlc3BvbnNpYmxlIHtcbiAgICAgICAgICBpbWcgeyBcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mcmVlLXF1b3RlIHtcbiAgICAgICAgICBpbWcgeyBcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBAbW9iaWxlIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgICYgPiAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zZXJ2aWNlcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHBhbGV0dGUtMjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgIEBtZWRpYSBAbW9iaWxlIHtcbiAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICB9XG5cbiAgICAmID4gLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gICAgICBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmID4gLmxpc3Qge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIHdpZHRoOiA2NSU7XG5cbiAgICAgIEBtZWRpYSBAbW9iaWxlIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIH1cblxuICAgICAgLnNlcnZpY2Uge1xuICAgICAgICBjb2xvcjogQHBhbGV0dGUtMztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBwYWxldHRlLTE7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbjogMjBweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcGFsZXR0ZS00O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG5cbiAgLnNlcnZpY2UtYXJlYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHBhbGV0dGUtMztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcblxuICAgICYgPiAudGl0bGUge1xuICAgICAgQHRpdGxlLWFuZC1iYWNrZ3JvdW5kLWltZygpO1xuICAgICAgaGVpZ2h0OiA1NTBweDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9ob3VzdG9uLXNreWxpbmUtMi5qcGdcIik7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwcHggNzIwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgQG1lZGlhIEBtb2JpbGUge1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ3MHB4IDU1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+L2Fzc2V0cy9pbWFnZXMvaG91c3Rvbi1za3lsaW5lLmpwZ1wiKTtcbiAgICAgIH1cblxuICAgICAgJiA+IHNwYW4ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiA+IHVsIHtcbiAgICAgIGNvbHVtbnM6IDM7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LTI7XG5cbiAgICAgIEBtZWRpYSBAbW9iaWxlIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICBjb2x1bW5zOiAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5vdGhlci1zZXJ2aWNlLWFyZWFzIHtcbiAgICAgIGp1c3RpZnktc2VsZjogYmFzZWxpbmU7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuICB9XG59XG4iLCIuaG9tZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG59XG4uaG9tZS1jb250YWluZXIgLmludHJvIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDRlbTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAwIDAgNDBweCBibGFjaztcbiAgaGVpZ2h0OiA4NDBweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9ob21lLWNsZWFuLWJlZC53ZWJwXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTUwcHggMDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ob21lLWNvbnRhaW5lciAuaW50cm8ge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02ODBweCA4NjBweDtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmhvbWUtY29udGFpbmVyIC53aHktc3BhcnRhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlBMjc1QTtcbiAgcGFkZGluZzogNDBweCAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmhvbWUtY29udGFpbmVyIC53aHktc3BhcnRhbiA+IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5ob21lLWNvbnRhaW5lciAud2h5LXNwYXJ0YW4gLnJlYXNvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDY1JTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhvbWUtY29udGFpbmVyIC53aHktc3BhcnRhbiAucmVhc29ucy1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbi5ob21lLWNvbnRhaW5lciAud2h5LXNwYXJ0YW4gLnJlYXNvbnMtY29udGFpbmVyIC5yZWFzb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ob21lLWNvbnRhaW5lciAud2h5LXNwYXJ0YW4gLnJlYXNvbnMtY29udGFpbmVyIC5yZWFzb24ge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxufVxuLmhvbWUtY29udGFpbmVyIC53aHktc3BhcnRhbiAucmVhc29ucy1jb250YWluZXIgLnJlYXNvbiBzcGFuIHtcbiAgd2lkdGg6IDc1JTtcbn1cbi5ob21lLWNvbnRhaW5lciAud2h5LXNwYXJ0YW4gLnJlYXNvbnMtY29udGFpbmVyIC5yZWFzb24gLnllYXJzLW9mLWV4cGVyaWVuY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaG9tZS1jb250YWluZXIgLndoeS1zcGFydGFuIC5yZWFzb25zLWNvbnRhaW5lciAucmVhc29uIC55ZWFycy1vZi1leHBlcmllbmNlIGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5ob21lLWNvbnRhaW5lciAud2h5LXNwYXJ0YW4gLnJlYXNvbnMtY29udGFpbmVyIC5yZWFzb24gLnR3ZW50eWZvdXItNy1zZXJ2aWNlIGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmhvbWUtY29udGFpbmVyIC53aHktc3BhcnRhbiAucmVhc29ucy1jb250YWluZXIgLnJlYXNvbiAuYXR0ZW50aW9uLXRvLWRldGFpbCBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5ob21lLWNvbnRhaW5lciAud2h5LXNwYXJ0YW4gLnJlYXNvbnMtY29udGFpbmVyIC5yZWFzb24gLm5vLWpvYi10b28tYmlnLW9yLXNtYWxsIGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmhvbWUtY29udGFpbmVyIC53aHktc3BhcnRhbiAucmVhc29ucy1jb250YWluZXIgLnJlYXNvbiAua25vd2xlZGdlYWJsZS1hbmQtcmVzcG9uc2libGUgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmhvbWUtY29udGFpbmVyIC53aHktc3BhcnRhbiAucmVhc29ucy1jb250YWluZXIgLnJlYXNvbiAuZnJlZS1xdW90ZSBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhvbWUtY29udGFpbmVyIC53aHktc3BhcnRhbiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAuaG9tZS1jb250YWluZXIgLndoeS1zcGFydGFuID4gLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLmhvbWUtY29udGFpbmVyIC53aHktc3BhcnRhbiB1bCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG4uaG9tZS1jb250YWluZXIgLnNlcnZpY2VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMkUzQztcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHggMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhvbWUtY29udGFpbmVyIC5zZXJ2aWNlcyB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICB9XG59XG4uaG9tZS1jb250YWluZXIgLnNlcnZpY2VzID4gLnRpdGxlIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ob21lLWNvbnRhaW5lciAuc2VydmljZXMgPiAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG4uaG9tZS1jb250YWluZXIgLnNlcnZpY2VzID4gLmxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogNjUlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaG9tZS1jb250YWluZXIgLnNlcnZpY2VzID4gLmxpc3Qge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbi5ob21lLWNvbnRhaW5lciAuc2VydmljZXMgPiAubGlzdCAuc2VydmljZSB7XG4gIGNvbG9yOiAjOUEyNzVBO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZTllYjtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xufVxuLmhvbWUtY29udGFpbmVyIC5zZXJ2aWNlcyA+IC5saXN0IC5zZXJ2aWNlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RFODg3OTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmhvbWUtY29udGFpbmVyIC5zZXJ2aWNlLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlBMjc1QTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5ob21lLWNvbnRhaW5lciAuc2VydmljZS1hcmVhID4gLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDRlbTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAwIDAgNDBweCBibGFjaztcbiAgaGVpZ2h0OiA1NTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifi9hc3NldHMvaW1hZ2VzL2hvdXN0b24tc2t5bGluZS0yLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMHB4IDcyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhvbWUtY29udGFpbmVyIC5zZXJ2aWNlLWFyZWEgPiAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ3MHB4IDU1MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9ob3VzdG9uLXNreWxpbmUuanBnXCIpO1xuICB9XG59XG4uaG9tZS1jb250YWluZXIgLnNlcnZpY2UtYXJlYSA+IC50aXRsZSA+IHNwYW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA3MCU7XG59XG4uaG9tZS1jb250YWluZXIgLnNlcnZpY2UtYXJlYSA+IHVsIHtcbiAgY29sdW1uczogMztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ob21lLWNvbnRhaW5lciAuc2VydmljZS1hcmVhID4gdWwge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi5ob21lLWNvbnRhaW5lciAuc2VydmljZS1hcmVhIC5vdGhlci1zZXJ2aWNlLWFyZWFzIHtcbiAganVzdGlmeS1zZWxmOiBiYXNlbGluZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/services */ "./src/app/models/services.ts");
/* harmony import */ var _models_Languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Languages */ "./src/app/models/Languages.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/language.service */ "./src/app/services/language.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(languageService) {
        this.languageService = languageService;
        this.selectedLanguage = 0;
        this.services = _models_services__WEBPACK_IMPORTED_MODULE_2__["Services"].filter(function (s) { return [1, 3, 7, 4, 8].includes(s.id); }).concat([
            { id: -1, name: 'And More', nameES: 'Y Mas', link: '/services/1', }
        ]);
        this.title = 'Cleaning Services and More';
        this.serviceAreaTitle = 'Serving Houston and the Houston Greater Area';
        this.whySpartanTitle = 'Choose M&JI Paradise';
        this.reasons = [
            { reason: 'Years of residential and commercial experience', picture: 'assets/images/years-experience-icon.png', pictureClass: 'years-of-experience' },
            { reason: 'Day or night service', reasonES: '', picture: 'assets/images/24-7-service-icon.jpg', pictureClass: 'twentyfour-7-service' },
            { reason: 'We pay attention to detail', picture: 'assets/images/attention-to-detail.jpg', pictureClass: 'attention-to-detail' },
            { reason: 'No job is too big or too small', picture: 'assets/images/big-vs-small.jpg', pictureClass: 'no-job-too-big-or-small' },
            { reason: 'Knowledgeable and responsible', picture: 'assets/images/knowledgeable.png', pictureClass: 'knowledgeable-and-responsible' },
            { reason: 'Free no obligation quotes', picture: 'assets/images/free-quote.png', pictureClass: 'free-quote' }
        ];
        this.servicesTitle = 'Meticulous attention to every detail to ensure your satisfaction. We offer the following services:';
        this.otherServicesText = 'Contact us if your area is not listed';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toggleLanguage(this.languageService.getSelectedLanguage());
        this.languageToggle$ = this.languageService.languageToggle
            .subscribe(function (language) {
            _this.toggleLanguage(language);
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.languageToggle$.unsubscribe();
    };
    HomeComponent.prototype.toggleLanguage = function (language) {
        this.selectedLanguage = language;
        switch (language) {
            case _models_Languages__WEBPACK_IMPORTED_MODULE_3__["Language"].English:
                this.title = 'Cleaning Services and More';
                this.serviceAreaTitle = 'Serving Houston and the Houston Greater Area';
                this.whySpartanTitle = 'Choose M&JI Paradise';
                this.reasons = [
                    { reason: 'Years of residential and commercial experience', picture: 'assets/images/years-experience-icon.png', pictureClass: 'years-of-experience' },
                    { reason: 'Day or night service', picture: 'assets/images/24-7-service-icon.jpg', pictureClass: 'twentyfour-7-service' },
                    { reason: 'We pay attention to detail', picture: 'assets/images/attention-to-detail.jpg', pictureClass: 'attention-to-detail' },
                    { reason: 'No job is too big or too small', picture: 'assets/images/big-vs-small.jpg', pictureClass: 'no-job-too-big-or-small' },
                    { reason: 'Knowledgeable and responsible', picture: 'assets/images/knowledgeable.png', pictureClass: 'knowledgeable-and-responsible' },
                    { reason: 'Free no obligation quotes', picture: 'assets/images/free-quote.png', pictureClass: 'free-quote' }
                ];
                this.servicesTitle = 'Meticulous attention to every detail to ensure your satisfaction. We offer the following services:';
                this.otherServicesText = 'Contact us if your area is not listed';
                break;
            case _models_Languages__WEBPACK_IMPORTED_MODULE_3__["Language"].Spanish:
                this.title = 'Servicios de Limpieza y Más';
                this.serviceAreaTitle = 'Sirviendo a Houston y a su alrededor';
                this.whySpartanTitle = 'Escoge M&JI Paradise';
                this.reasons = [
                    { reason: 'Años de experiencia residencial y comercial', picture: 'assets/images/years-experience-icon.png', pictureClass: 'years-of-experience' },
                    { reason: 'Día o noche. Tenemos horario flexible', picture: 'assets/images/24-7-service-icon.jpg', pictureClass: 'twentyfour-7-service' },
                    { reason: 'Prestamos atención a detalles', picture: 'assets/images/attention-to-detail.jpg', pictureClass: 'attention-to-detail' },
                    { reason: 'Ningún trabajo es demasiado grande o chico', picture: 'assets/images/big-vs-small.jpg', pictureClass: 'no-job-too-big-or-small' },
                    { reason: 'Informados y responsables', picture: 'assets/images/knowledgeable.png', pictureClass: 'knowledgeable-and-responsible' },
                    { reason: 'Cotizaciónes grátis', picture: 'assets/images/free-quote.png', pictureClass: 'free-quote' }
                ];
                this.otherServicesText = 'Contáctanos si tu area no esta escrita';
                this.servicesTitle = 'Meticulosa atencion a cada detalle del trabajo para aseguar su satisfacción. Ofrecemos los siguientes ' +
                    'servicios:';
                break;
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/components/home/home.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/img-spotlight/img-spotlight.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/img-spotlight/img-spotlight.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spotlight-background\"></div>\r\n\r\n<div class=\"img-container\">\r\n    <img [src]=\"imgSrc\">\r\n</div>\r\n\r\n<div class=\"navigation\">\r\n  <fa-icon [icon]=\"['fas', 'chevron-circle-left']\"\r\n           (click)=\"scrollImage.emit('left')\">\r\n  </fa-icon>\r\n  <fa-icon [icon]=\"['fas', 'chevron-circle-right']\"\r\n           (click)=\"scrollImage.emit('right')\">\r\n  </fa-icon>\r\n</div>\r\n\r\n<fa-icon [icon]=\"['fas', 'times-circle']\"\r\n         class=\"close-spotlight\"\r\n         (click)=\"exitSpotlight.emit()\">\r\n</fa-icon>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/img-spotlight/img-spotlight.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/components/img-spotlight/img-spotlight.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spotlight-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 0.8;\n  background-color: black;\n  z-index: 100;\n  width: 100%;\n  height: 100%;\n}\n.img-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 110;\n  width: 100%;\n  height: 100%;\n}\n.img-container img {\n  border-radius: 5px;\n  width: 75%;\n  -webkit-animation: fade-in 0.5s;\n          animation: fade-in 0.5s;\n}\n@media only screen and (max-width: 768px) {\n  .img-container img {\n    width: 90%;\n  }\n}\nfa-icon {\n  cursor: pointer;\n}\nfa-icon:hover {\n  opacity: 0.9;\n}\n.navigation {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 40px;\n  z-index: 120;\n  color: white;\n  width: 100%;\n  height: 100%;\n}\n.navigation fa-icon:first-of-type {\n  padding-left: 20px;\n}\n.navigation fa-icon:last-of-type {\n  padding-right: 20px;\n}\n@media only screen and (max-width: 768px) {\n  .navigation {\n    height: 85vh;\n    margin: 0 auto;\n    font-size: 60px;\n    align-items: flex-end;\n    justify-content: space-evenly;\n  }\n}\n.close-spotlight {\n  position: fixed;\n  top: 0;\n  left: 0;\n  color: white;\n  font-size: 40px;\n  z-index: 120;\n  top: 1em;\n  left: 90vw;\n}\n@media only screen and (max-width: 768px) {\n  .close-spotlight {\n    left: 85vw;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWctc3BvdGxpZ2h0L0M6L1VzZXJzL2FydHVyL0NvZGUvTWppJTIwUGFyYWRpc2Uvc3JjL2FwcC9jb21wb25lbnRzL2ltZy1zcG90bGlnaHQvaW1nLXNwb3RsaWdodC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbWctc3BvdGxpZ2h0L2ltZy1zcG90bGlnaHQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFMRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFLQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNMRjtBRFFBO0VBZEUsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBY0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNKRjtBREhBO0VBVUksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQ0pKO0FETUk7RUFBQTtJQUNFLFVBQUE7RUNISjtBQUNGO0FET0E7RUFDRSxlQUFBO0FDTEY7QURPRTtFQUNFLFlBQUE7QUNMSjtBRFNBO0VBMUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQTBDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTEY7QURKQTtFQVlJLGtCQUFBO0FDTEo7QURQQTtFQWdCSSxtQkFBQTtBQ05KO0FEU0U7RUFBQTtJQUNFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBQ0EsNkJBQUE7RUNORjtBQUNGO0FEU0E7RUF0RUUsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBc0VBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDTEY7QURPRTtFQUFBO0lBQ0UsVUFBQTtFQ0pGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ltZy1zcG90bGlnaHQvaW1nLXNwb3RsaWdodC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uLy4uL3ZhcmlhYmxlcyc7XG5cbkBjb250YWluZXItb3JpZW50YXRpb246IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59O1xuXG4uc3BvdGxpZ2h0LWJhY2tncm91bmQge1xuICBAY29udGFpbmVyLW9yaWVudGF0aW9uKCk7XG4gIG9wYWNpdHk6IDAuODtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmltZy1jb250YWluZXIge1xuICBAY29udGFpbmVyLW9yaWVudGF0aW9uKCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMTA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBhbmltYXRpb246IGZhZGUtaW4gLjVzO1xuXG4gICAgQG1lZGlhIEBtb2JpbGUge1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG4gIH1cbn1cblxuZmEtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbn1cblxuLm5hdmlnYXRpb24ge1xuICBAY29udGFpbmVyLW9yaWVudGF0aW9uKCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB6LWluZGV4OiAxMjA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBmYS1pY29uOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxuXG4gIGZhLWljb246bGFzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG5cbiAgQG1lZGlhIEBtb2JpbGUge1xuICAgIGhlaWdodDogODV2aDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5XG4gIH1cbn1cblxuLmNsb3NlLXNwb3RsaWdodCB7XG4gIEBjb250YWluZXItb3JpZW50YXRpb24oKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHotaW5kZXg6IDEyMDtcbiAgdG9wOiAxZW07XG4gIGxlZnQ6IDkwdnc7XG5cbiAgQG1lZGlhIEBtb2JpbGUge1xuICAgIGxlZnQ6IDg1dnc7XG4gIH1cbn1cbiIsIi5zcG90bGlnaHQtYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwLjg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW1nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTEwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmltZy1jb250YWluZXIgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNzUlO1xuICBhbmltYXRpb246IGZhZGUtaW4gMC41cztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmltZy1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG5mYS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuZmEtaWNvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbi5uYXZpZ2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB6LWluZGV4OiAxMjA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5uYXZpZ2F0aW9uIGZhLWljb246Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5uYXZpZ2F0aW9uIGZhLWljb246bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmlnYXRpb24ge1xuICAgIGhlaWdodDogODV2aDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG59XG4uY2xvc2Utc3BvdGxpZ2h0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB6LWluZGV4OiAxMjA7XG4gIHRvcDogMWVtO1xuICBsZWZ0OiA5MHZ3O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2xvc2Utc3BvdGxpZ2h0IHtcbiAgICBsZWZ0OiA4NXZ3O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/img-spotlight/img-spotlight.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/img-spotlight/img-spotlight.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImgSpotlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgSpotlightComponent", function() { return ImgSpotlightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ImgSpotlightComponent = /** @class */ (function () {
    function ImgSpotlightComponent() {
        this.scrollImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.exitSpotlight = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imgSrc = '';
    }
    ImgSpotlightComponent.prototype.ngOnInit = function () {
        this.startKeyboardListener();
    };
    ImgSpotlightComponent.prototype.ngOnChanges = function (changes) {
        if (changes.image)
            this.imgSrc = changes.image.currentValue.url;
    };
    ImgSpotlightComponent.prototype.ngOnDestroy = function () {
        this.keyboardInputSubscription$.unsubscribe();
    };
    ImgSpotlightComponent.prototype.startKeyboardListener = function () {
        var _this = this;
        var keyboardInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            document.addEventListener('keydown', function (event) { return observer.next(event); });
        });
        this.keyboardInputSubscription$ = keyboardInput$
            .subscribe(function (keydown) {
            switch (keydown.keyCode) {
                case 37:
                    _this.scrollImage.emit('left');
                    break;
                case 39:
                    _this.scrollImage.emit('right');
                    break;
                case 27:
                    _this.exitSpotlight.emit();
                    break;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImgSpotlightComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ImgSpotlightComponent.prototype, "scrollThroughImages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImgSpotlightComponent.prototype, "scrollImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImgSpotlightComponent.prototype, "exitSpotlight", void 0);
    ImgSpotlightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-img-spotlight',
            template: __webpack_require__(/*! ./img-spotlight.component.html */ "./src/app/components/img-spotlight/img-spotlight.component.html"),
            styles: [__webpack_require__(/*! ./img-spotlight.component.less */ "./src/app/components/img-spotlight/img-spotlight.component.less")]
        })
    ], ImgSpotlightComponent);
    return ImgSpotlightComponent;
}());



/***/ }),

/***/ "./src/app/components/join-the-team/join-the-team.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/join-the-team/join-the-team.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"join-the-team-container\">\r\n  <p *ngIf=\"selectedLanguage == 0\" \r\n     class=\"message\">\r\n    We're always looking for new team members. If you're interested in employment, give us a call at  \r\n    <a href=\"tel:+18324708866\"class=\"faux-link\"><span>8324708866</span></a> \r\n    or <a class=\"faux-link\" [routerLink]=\"['/contactus']\">contact us</a>.\r\n  </p>\r\n\r\n  <p *ngIf=\"selectedLanguage == 1\" \r\n     class=\"message\">\r\n    ¿Quieres unirte al equipo? Siempre estamos en busca de nuevos miembros. Contactanos al\r\n    <a href=\"tel:+18324708866\"class=\"faux-link\"><span>8324708866</span></a> \r\n    ó <a class=\"faux-link\" [routerLink]=\"['/contactus']\">mandanos un mensaje</a>.\r\n  </p>\r\n</div>"

/***/ }),

/***/ "./src/app/components/join-the-team/join-the-team.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/components/join-the-team/join-the-team.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".join-the-team-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Oswald', sans-serif;\n  background-color: #9A275A;\n  height: 250px;\n}\n.join-the-team-container .message {\n  color: white;\n  font-size: 40px;\n  width: 80%;\n}\n@media only screen and (max-width: 768px) {\n  .join-the-team-container .message {\n    font-size: 30px;\n  }\n}\n.join-the-team-container .message .faux-link {\n  color: white;\n  text-decoration: none;\n  color: #DE8879;\n}\n.join-the-team-container .message .faux-link:hover {\n  color: #DE8879;\n  text-decoration: none;\n}\n@media only screen and (max-width: 768px) {\n  .join-the-team-container {\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qb2luLXRoZS10ZWFtL0M6L1VzZXJzL2FydHVyL0NvZGUvTWppJTIwUGFyYWRpc2Uvc3JjL2FwcC9jb21wb25lbnRzL2pvaW4tdGhlLXRlYW0vam9pbi10aGUtdGVhbS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9qb2luLXRoZS10ZWFtL2pvaW4tdGhlLXRlYW0uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvam9pbi10aGUtdGVhbS9DOi9Vc2Vycy9hcnR1ci9Db2RlL01qaSUyMFBhcmFkaXNlL3NyYy92YXJpYWJsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0RGO0FETkE7RUFVSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNESjtBREdJO0VBQUE7SUFDRSxlQUFBO0VDQUo7QUFDRjtBRGhCQTtFRWVFLFlBQUE7RUFDQSxxQkFBQTtFRklJLGNBQUE7QUNDTjtBQ0hFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FES0o7QURERTtFQUFBO0lBQ0UsMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0VDSUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9pbi10aGUtdGVhbS9qb2luLXRoZS10ZWFtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vdmFyaWFibGVzJztcblxuLmpvaW4tdGhlLXRlYW0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogQHBhbGV0dGUtMztcbiAgaGVpZ2h0OiAyNTBweDtcblxuICAubWVzc2FnZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB3aWR0aDogODAlO1xuXG4gICAgQG1lZGlhIEBtb2JpbGUge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cblxuICAgIC5mYXV4LWxpbmsge1xuICAgICAgQGxpbmstY29sb3Itc3R5bGUoKTtcbiAgICAgIGNvbG9yOiBAcGFsZXR0ZS00O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBAbW9iaWxlIHtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICB9XG59IiwiLmpvaW4tdGhlLXRlYW0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlBMjc1QTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi5qb2luLXRoZS10ZWFtLWNvbnRhaW5lciAubWVzc2FnZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB3aWR0aDogODAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuam9pbi10aGUtdGVhbS1jb250YWluZXIgLm1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuLmpvaW4tdGhlLXRlYW0tY29udGFpbmVyIC5tZXNzYWdlIC5mYXV4LWxpbmsge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNERTg4Nzk7XG59XG4uam9pbi10aGUtdGVhbS1jb250YWluZXIgLm1lc3NhZ2UgLmZhdXgtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjREU4ODc5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5qb2luLXRoZS10ZWFtLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgfVxufVxuIiwiQHBhbGV0dGUtMTogI2U4ZTllYjtcbkBwYWxldHRlLTI6ICMzMzJFM0M7XG5AcGFsZXR0ZS0zOiAjOUEyNzVBO1xuQHBhbGV0dGUtNDogI0RFODg3OTtcbkBoZWFkZXItYmFja2dyb3VuZDogI0NDRUZBQjtcblxuQGJhY2tncm91bmQtZ3JheTogI0VDRjRGRTtcblxuQGZvbnQtZmFtaWx5LTE6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuQGZvbnQtZmFtaWx5LTI6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXG5AZGVza3RvcC13aWR0aDogMTYwMHB4O1xuXG5AbW9iaWxlOiB+XCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpXCI7XG5AZGVza3RvcDogflwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KVwiO1xuXG5AbGluay1jb2xvci1zdHlsZToge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogQHBhbGV0dGUtNDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn07XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/join-the-team/join-the-team.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/join-the-team/join-the-team.component.ts ***!
  \*********************************************************************/
/*! exports provided: JoinTheTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinTheTeamComponent", function() { return JoinTheTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");



var JoinTheTeamComponent = /** @class */ (function () {
    function JoinTheTeamComponent(languageService) {
        this.languageService = languageService;
        this.selectedLanguage = 0;
    }
    JoinTheTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageService.languageToggle.subscribe(function (language) { return _this.selectedLanguage = language; });
    };
    JoinTheTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-join-the-team',
            template: __webpack_require__(/*! ./join-the-team.component.html */ "./src/app/components/join-the-team/join-the-team.component.html"),
            styles: [__webpack_require__(/*! ./join-the-team.component.less */ "./src/app/components/join-the-team/join-the-team.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]])
    ], JoinTheTeamComponent);
    return JoinTheTeamComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-not-found-container\">\r\n  <p>It looks like you're doing some exploring...</p>\r\n  <p>Nothing to see here.</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-not-found-container {\n  background-color: #332E3C;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.page-not-found-container p {\n  font-family: 'Oswald', sans-serif;\n  font-size: 40px;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9DOi9Vc2Vycy9hcnR1ci9Db2RlL01qaSUyMFBhcmFkaXNlL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RGO0FESkE7RUFRSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vdmFyaWFibGVzJztcblxuLnBhZ2Utbm90LWZvdW5kLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBwYWxldHRlLTI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktMTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG4iLCIucGFnZS1ub3QtZm91bmQtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMkUzQztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucGFnZS1ub3QtZm91bmQtY29udGFpbmVyIHAge1xuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.less */ "./src/app/components/page-not-found/page-not-found.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/services/services.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"services-container\">\r\n  <div class=\"services-list\">\r\n    <span *ngIf=\"selectedLanguage == 0\">Our services include:</span>\r\n    <span *ngIf=\"selectedLanguage == 1\">Nuestros servicios incluyen:</span>\r\n    <div class=\"list\">\r\n      <div *ngFor=\"let service of services\"\r\n           class=\"service\"\r\n           [ngClass]=\"{ 'selected': service === selectedService }\"\r\n          (click)=\"selectService(service)\">\r\n        {{selectedLanguage == 0 ? service.name : service.nameES}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"service-description\">\r\n    <span class=\"title\">{{selectedLanguage == 0 ? selectedService?.name : selectedService?.nameES}}</span>\r\n    <div class=\"service-card\">\r\n      <div>{{selectedLanguage == 0 ? selectedService?.description : selectedService?.descriptionES}}</div>\r\n      <div #imagesRef [attr.data-src]=\"selectedService?.images[0].url\" [attr.data-img-width]=\"selectedService?.images[0].imageWidth\" class=\"img-holder\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<sp-img-spotlight *ngIf=\"selectedImg\"\r\n               [image]=\"selectedImg\"\r\n               [scrollThroughImages]=\"selectedService.images.length > 0\"\r\n               (scrollImage)=\"feedNextImage($event)\"\r\n               (exitSpotlight)=\"exitSpotlight()\">\r\n</sp-img-spotlight>\r\n"

/***/ }),

/***/ "./src/app/components/services/services.component.less":
/*!*************************************************************!*\
  !*** ./src/app/components/services/services.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".services-container {\n  font-family: 'Oswald', sans-serif;\n}\n.services-container .services-list {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #9A275A;\n  padding: 20px 0;\n}\n.services-container .services-list span {\n  color: white;\n  font-size: 40px;\n  font-family: 'Oswald', sans-serif;\n  margin-bottom: 10px;\n}\n@media only screen and (max-width: 768px) {\n  .services-container .services-list span {\n    font-size: 30px;\n  }\n}\n.services-container .services-list .list {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 74%;\n  margin-bottom: 10px;\n}\n.services-container .services-list .list .service {\n  color: #9A275A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #e8e9eb;\n  width: 200px;\n  height: 200px;\n  font-size: 25px;\n  font-weight: 700;\n  text-align: center;\n  border-radius: 50%;\n  flex-wrap: wrap;\n  cursor: pointer;\n  margin: 20px 0 20px;\n}\n.services-container .services-list .list .service.selected {\n  background-color: #DE8879;\n  color: white;\n}\n.services-container .services-list .list .service:hover {\n  background-color: #DE8879;\n  color: white;\n}\n.services-container .service-description {\n  display: flex;\n  flex-direction: column;\n  background-color: #332E3C;\n  padding: 20px 0;\n  margin-top: 20px;\n}\n.services-container .service-description .service-card {\n  display: flex;\n  justify-content: space-around;\n  min-height: 350px;\n  padding: 10px;\n}\n.services-container .service-description .service-card div:first-of-type {\n  font-size: 30px;\n  width: 45%;\n  display: flex;\n  align-items: center;\n  color: white;\n}\n.services-container .service-description .service-card div:last-of-type {\n  width: 45%;\n}\n@media only screen and (max-width: 768px) {\n  .services-container .service-description .service-card {\n    flex-direction: column-reverse;\n    padding: 30px;\n  }\n  .services-container .service-description .service-card div:first-of-type {\n    width: 100%;\n  }\n  .services-container .service-description .service-card div:last-of-type {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .services-container .service-description {\n    align-items: center;\n  }\n}\n.services-container .service-description span.title {\n  color: white;\n  font-size: 40px;\n  margin-left: 0;\n  font-family: 'Oswald', sans-serif;\n  padding-left: 50px;\n}\n@media only screen and (max-width: 768px) {\n  .services-container .service-description span.title {\n    font-size: 30px;\n    padding: 0;\n  }\n}\n.services-container .service-description p {\n  color: white;\n  font-size: 30px;\n  margin-left: 0;\n  font-family: 'Roboto', sans-serif;\n  padding-left: 65px;\n  width: 80%;\n}\n@media only screen and (max-width: 768px) {\n  .services-container .service-description p {\n    width: 90%;\n    font-size: 22px;\n    padding: 0;\n    text-align: center;\n  }\n}\n.services-container .service-description span.gallery {\n  color: white;\n  font-size: 20px;\n  margin-left: 0;\n  font-family: 'Oswald', sans-serif;\n  padding-left: 50px;\n}\n@media only screen and (max-width: 768px) {\n  .services-container .service-description span.gallery {\n    padding: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9DOi9Vc2Vycy9hcnR1ci9Db2RlL01qaSUyMFBhcmFkaXNlL3NyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlDQUFBO0FDREY7QURBQTtFQUlJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDREo7QURQQTtFQVdNLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQ0ROO0FER007RUFBQTtJQUNFLGVBQUE7RUNBTjtBQUNGO0FEbEJBO0VBc0JNLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0ROO0FEMUJBO0VBOEJRLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0RSO0FEUVE7RUFKRSx5QkFBQTtFQUNBLFlBQUE7QUNEVjtBRFFRO0VBUkUseUJBQUE7RUFDQSxZQUFBO0FDR1Y7QURsREE7RUE4REksYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRHpEQTtFQXFFTSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNUTjtBRC9EQTtFQTJFUSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNUUjtBRHRFQTtFQW1GUSxVQUFBO0FDVlI7QURhTTtFQUFBO0lBQ0UsOEJBQUE7SUFDQSxhQUFBO0VDVk47RURRSTtJQUtJLFdBQUE7RUNWUjtFREtJO0lBU0ksV0FBQTtJQUNBLG1CQUFBO0VDWFI7QUFDRjtBRGVJO0VBQUE7SUFDRSxtQkFBQTtFQ1pKO0FBQ0Y7QUQzRkE7RUEwR00sWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQ1pOO0FEY007RUFBQTtJQUNFLGVBQUE7SUFDQSxVQUFBO0VDWE47QUFDRjtBRHhHQTtFQXVITSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ1pOO0FEY007RUFBQTtJQUNFLFVBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0VDWE47QUFDRjtBRHhIQTtFQXVJTSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FDWk47QURjTTtFQUFBO0lBQ0UsVUFBQTtFQ1hOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vdmFyaWFibGVzJztcblxuLnNlcnZpY2VzLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktMTtcblxuICAuc2VydmljZXMtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHBhbGV0dGUtMztcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktMTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgIEBtZWRpYSBAbW9iaWxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5saXN0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB3aWR0aDogNzQlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgLnNlcnZpY2Uge1xuICAgICAgICBjb2xvcjogQHBhbGV0dGUtMztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBwYWxldHRlLTE7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbjogMjBweCAwIDIwcHg7XG5cbiAgICAgICAgQGhvdmVyOiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHBhbGV0dGUtNDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH07XG5cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgQGhvdmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgIEBob3ZlcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcGFsZXR0ZS0yO1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgLnNlcnZpY2UtY2FyZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgIGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIGRpdjpsYXN0LW9mLXR5cGUge1xuICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgcGFkZGluZzogMzBweDtcblxuICAgICAgICBkaXY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGRpdjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIHNwYW4udGl0bGUge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LTE7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG5cbiAgICAgIEBtZWRpYSBAbW9iaWxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHAge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LTI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDY1cHg7XG4gICAgICB3aWR0aDogODAlO1xuXG4gICAgICBAbWVkaWEgQG1vYmlsZSB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNwYW4uZ2FsbGVyeSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktMTtcbiAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcblxuICAgICAgQG1lZGlhIEBtb2JpbGUge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLnNlcnZpY2VzLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbn1cbi5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2VzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUEyNzVBO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4uc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlcy1saXN0IHNwYW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlcy1saXN0IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZXMtbGlzdCAubGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiA3NCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlcy1saXN0IC5saXN0IC5zZXJ2aWNlIHtcbiAgY29sb3I6ICM5QTI3NUE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOWViO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDIwcHggMCAyMHB4O1xufVxuLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZXMtbGlzdCAubGlzdCAuc2VydmljZS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERTg4Nzk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2VzLWxpc3QgLmxpc3QgLnNlcnZpY2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREU4ODc5O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlLWRlc2NyaXB0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMkUzQztcbiAgcGFkZGluZzogMjBweCAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZS1kZXNjcmlwdGlvbiAuc2VydmljZS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZS1kZXNjcmlwdGlvbiAuc2VydmljZS1jYXJkIGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB3aWR0aDogNDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlLWRlc2NyaXB0aW9uIC5zZXJ2aWNlLWNhcmQgZGl2Omxhc3Qtb2YtdHlwZSB7XG4gIHdpZHRoOiA0NSU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UtZGVzY3JpcHRpb24gLnNlcnZpY2UtY2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gIH1cbiAgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZS1kZXNjcmlwdGlvbiAuc2VydmljZS1jYXJkIGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlLWRlc2NyaXB0aW9uIC5zZXJ2aWNlLWNhcmQgZGl2Omxhc3Qtb2YtdHlwZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlLWRlc2NyaXB0aW9uIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4uc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlLWRlc2NyaXB0aW9uIHNwYW4udGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlLWRlc2NyaXB0aW9uIHNwYW4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4uc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlLWRlc2NyaXB0aW9uIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy1sZWZ0OiA2NXB4O1xuICB3aWR0aDogODAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlLWRlc2NyaXB0aW9uIHAge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlLWRlc2NyaXB0aW9uIHNwYW4uZ2FsbGVyeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UtZGVzY3JpcHRpb24gc3Bhbi5nYWxsZXJ5IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/services */ "./src/app/models/services.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");





var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(route, router, languageService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.languageService = languageService;
        this.selectedLanguage = 0;
        this.selectedService = undefined;
        this.serviceImages = [];
        this.services = _models_services__WEBPACK_IMPORTED_MODULE_3__["Services"];
        this.hoveredImg = undefined;
        this.selectedImg = undefined;
        this.showOnlySix = true;
        this.imagesLoaded = false;
        this.selectService = function (service) { _this.router.navigateByUrl(service.link); };
        this.exitSpotlight = function () { _this.selectedImg = undefined; };
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initSelectedServiceObserver();
        this.languageService.languageToggle.subscribe(function (language) { return _this.selectedLanguage = language; });
    };
    ServicesComponent.prototype.ngAfterViewInit = function () {
        var imageLoadCount = this.getServiceImgLoadCount();
        this.asyncImageLoad(imageLoadCount);
    };
    ServicesComponent.prototype.feedNextImage = function (direction) {
        if (direction === 'left')
            this.selectedImg = this.getImageToTheLeft();
        if (direction === 'right')
            this.selectedImg = this.getImageToTheRight();
    };
    ServicesComponent.prototype.showMore = function () {
        var _this = this;
        this.showOnlySix = false;
        var imgLoadCount = this.selectedService.images.length;
        setTimeout(function () { return _this.asyncImageLoad(imgLoadCount); }, 100);
    };
    ServicesComponent.prototype.getServiceImgLoadCount = function () {
        return this.selectedService.images.length > 6 ? 6 : this.selectedService.images.length;
    };
    ServicesComponent.prototype.getImageToTheLeft = function () {
        var _this = this;
        var indexToReturn;
        var imgIndex = this.selectedService.images.findIndex(function (img) { return img === _this.selectedImg; });
        var maxIndex = this.selectedService.images.length - 1;
        if (imgIndex === 0) {
            indexToReturn = maxIndex;
        }
        else {
            indexToReturn = imgIndex - 1;
        }
        return this.selectedService.images[indexToReturn];
    };
    ServicesComponent.prototype.getImageToTheRight = function () {
        var _this = this;
        var indexToReturn;
        var imgIndex = this.selectedService.images.findIndex(function (img) { return img === _this.selectedImg; });
        var maxIndex = this.selectedService.images.length - 1;
        if (imgIndex === maxIndex) {
            indexToReturn = 0;
        }
        else {
            indexToReturn = imgIndex + 1;
        }
        return this.selectedService.images[indexToReturn];
    };
    ServicesComponent.prototype.initSelectedServiceObserver = function () {
        var _this = this;
        this.route
            .paramMap
            .subscribe(function (params) {
            _this.showOnlySix = true;
            var id = params.get('id');
            if (!id)
                id = 1;
            _this.selectedService = _this.services.find(function (s) { return s.id === +id; });
            var imageLoadCount = _this.getServiceImgLoadCount();
            setTimeout(function () { return _this.asyncImageLoad(imageLoadCount); }, 50);
        });
    };
    ServicesComponent.prototype.asyncImageLoad = function (loadCount) {
        var _this = this;
        var count = 0;
        this.imagesRef.forEach(function (imgRef) {
            var imgHolder = imgRef.nativeElement;
            var imageUrl = imgHolder.getAttribute('data-src');
            var imageWidth = imgHolder.getAttribute('data-img-width');
            var img = new Image();
            img.src = imageUrl;
            img.style.borderRadius = '5px';
            img.style.width = imageWidth ? imageWidth + "%" : '95%';
            img.style.animation = 'fade-in .5s';
            img.onload = function () {
                imgHolder.innerHTML = '';
                imgHolder.appendChild(img);
            };
            ++count;
            _this.imagesLoaded = count === loadCount;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('imagesRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], ServicesComponent.prototype, "imagesRef", void 0);
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/components/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.less */ "./src/app/components/services/services.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/ui/toggle-button/toggle-button.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/ui/toggle-button/toggle-button.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toggle-button-container\">\r\n  <span>{{leftLabel}}</span>\r\n\r\n  <label class=\"switch\">\r\n      <input type=\"checkbox\"\r\n            [checked]=\"checked\"\r\n            (change)=\"toggle()\">\r\n      <span class=\"slider round\"></span>\r\n  </label>\r\n\r\n    <span>{{rightLabel}}</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/ui/toggle-button/toggle-button.component.less":
/*!**************************************************************************!*\
  !*** ./src/app/components/ui/toggle-button/toggle-button.component.less ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toggle-button-container {\n  display: flex;\n  align-items: center;\n  /* Rounded sliders */\n}\n.toggle-button-container span {\n  color: white;\n  font-family: 'Oswald', sans-serif;\n}\n.toggle-button-container span:first-of-type {\n  margin-right: 5px;\n}\n.toggle-button-container span:last-of-type {\n  margin-left: 5px;\n}\n.toggle-button-container .switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 20px;\n}\n.toggle-button-container .switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-button-container .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n.toggle-button-container .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 24px;\n  width: 24px;\n  bottom: -2px;\n  background-color: white;\n  transition: 0.4s;\n}\n.toggle-button-container input:checked + .slider {\n  background-color: #ccc;\n}\n.toggle-button-container input:focus + .slider {\n  box-shadow: 0 0 1px #ccc;\n}\n.toggle-button-container .slider:before {\n  background-color: #DE8879;\n}\n.toggle-button-container input:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n.toggle-button-container .slider.round {\n  border-radius: 34px;\n}\n.toggle-button-container .slider.round:before {\n  border-radius: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS90b2dnbGUtYnV0dG9uL0M6L1VzZXJzL2FydHVyL0NvZGUvTWppJTIwUGFyYWRpc2Uvc3JjL2FwcC9jb21wb25lbnRzL3VpL3RvZ2dsZS1idXR0b24vdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy91aS90b2dnbGUtYnV0dG9uL3RvZ2dsZS1idXR0b24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUNEQSxvQkFBb0I7QUFDdEI7QURGQTtFQUtJLFlBQUE7RUFDQSxpQ0FBQTtBQ0FKO0FESUk7RUFDRSxpQkFBQTtBQ0ZOO0FES0k7RUFDRSxnQkFBQTtBQ0hOO0FEWkE7RUFvQkksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTEo7QURsQkE7RUEyQkksVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDTko7QUR2QkE7RUFpQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7QUNQSjtBRGxDQTtFQTZDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUVBLGdCQUFBO0FDUko7QUQ1Q0E7RUF3REksc0JBQUE7QUNUSjtBRC9DQTtFQTRESSx3QkFBQTtBQ1ZKO0FEbERBO0VBZ0VJLHlCQUFBO0FDWEo7QURyREE7RUFvRUksbUNBQUE7RUFFQSwyQkFBQTtBQ1pKO0FEMURBO0VBMkVJLG1CQUFBO0FDZEo7QUQ3REE7RUErRUksa0JBQUE7QUNmSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdWkvdG9nZ2xlLWJ1dHRvbi90b2dnbGUtYnV0dG9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vLi4vLi4vdmFyaWFibGVzJztcblxuLnRvZ2dsZS1idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBzcGFuIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseS0xO1xuXG4gICAgQHNwYWNlLWJldHdlZW4tdG9nZ2xlOiA1cHg7XG5cbiAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UtYmV0d2Vlbi10b2dnbGVcbiAgICB9XG5cbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tbGVmdDogIEBzcGFjZS1iZXR3ZWVuLXRvZ2dsZTtcbiAgICB9XG4gIH1cblxuICAuc3dpdGNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxuXG4gIC5zd2l0Y2ggaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG5cbiAgLnNsaWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gIH1cblxuICAuc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGJvdHRvbTogLTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gIH1cblxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgfVxuXG4gIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjY2NjO1xuICB9XG5cbiAgLnNsaWRlcjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBwYWxldHRlLTQ7XG4gIH1cblxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICB9XG5cbiAgLyogUm91bmRlZCBzbGlkZXJzICovXG4gIC5zbGlkZXIucm91bmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gIH1cblxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG59XG4iLCIudG9nZ2xlLWJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cbn1cbi50b2dnbGUtYnV0dG9uLWNvbnRhaW5lciBzcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG59XG4udG9nZ2xlLWJ1dHRvbi1jb250YWluZXIgc3BhbjpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4udG9nZ2xlLWJ1dHRvbi1jb250YWluZXIgc3BhbjpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnRvZ2dsZS1idXR0b24tY29udGFpbmVyIC5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi50b2dnbGUtYnV0dG9uLWNvbnRhaW5lciAuc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cbi50b2dnbGUtYnV0dG9uLWNvbnRhaW5lciAuc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLnRvZ2dsZS1idXR0b24tY29udGFpbmVyIC5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBib3R0b206IC0ycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4udG9nZ2xlLWJ1dHRvbi1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuLnRvZ2dsZS1idXR0b24tY29udGFpbmVyIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggI2NjYztcbn1cbi50b2dnbGUtYnV0dG9uLWNvbnRhaW5lciAuc2xpZGVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERTg4Nzk7XG59XG4udG9nZ2xlLWJ1dHRvbi1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cbi50b2dnbGUtYnV0dG9uLWNvbnRhaW5lciAuc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cbi50b2dnbGUtYnV0dG9uLWNvbnRhaW5lciAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/ui/toggle-button/toggle-button.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/ui/toggle-button/toggle-button.component.ts ***!
  \************************************************************************/
/*! exports provided: ToggleButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonComponent", function() { return ToggleButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToggleButtonComponent = /** @class */ (function () {
    function ToggleButtonComponent() {
        this.toggled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ToggleButtonComponent.prototype.toggle = function () {
        this.checked = !this.checked;
        this.toggled.emit(this.checked);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ToggleButtonComponent.prototype, "checked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ToggleButtonComponent.prototype, "leftLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ToggleButtonComponent.prototype, "rightLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToggleButtonComponent.prototype, "toggled", void 0);
    ToggleButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sp-toggle-button',
            template: __webpack_require__(/*! ./toggle-button.component.html */ "./src/app/components/ui/toggle-button/toggle-button.component.html"),
            styles: [__webpack_require__(/*! ./toggle-button.component.less */ "./src/app/components/ui/toggle-button/toggle-button.component.less")]
        })
    ], ToggleButtonComponent);
    return ToggleButtonComponent;
}());



/***/ }),

/***/ "./src/app/models/Languages.ts":
/*!*************************************!*\
  !*** ./src/app/models/Languages.ts ***!
  \*************************************/
/*! exports provided: Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
var Language;
(function (Language) {
    Language[Language["English"] = 0] = "English";
    Language[Language["Spanish"] = 1] = "Spanish";
})(Language || (Language = {}));



/***/ }),

/***/ "./src/app/models/services.ts":
/*!************************************!*\
  !*** ./src/app/models/services.ts ***!
  \************************************/
/*! exports provided: Services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
var Services = [
    {
        id: 7,
        name: 'Deep Cleaning',
        nameES: 'Limpieza Profunda',
        link: '/services/7',
        description: 'Get your home or business sanitized. We are closely monitoring state and federal guidelines along with recommendations from the Centers For Disease Control (CDC) relating to COVID-19 to ensure the safest service for you. We\'re using recommended disinfectants, practicing social distancing and keeping the safety of you and our employees in mind.',
        descriptionES: 'Disinfecta tu casa ó negocio. Estamos siguiendo el desarollo de noticias sobre el COVID-19 al nivel estatal y federal para asegurarnos de ofrecer el mejor y mas seguro servicio posible. Prestamos atencion a las recomendanciones por el Centers For Disease Control (CDC) y practicamos el distancimiento social para asegurar el bien estar de nuestros clientes y empleados. ',
        images: [
            { url: 'assets/images/deep-cleaning.jpg', description: '' }
        ]
    },
    {
        id: 1,
        name: 'Regular Cleaning',
        nameES: 'Limpieza Regular',
        link: '/services/1',
        description: "We can help you keep tidy or do it all for you. Scheduled and repeating cleaning services available. Just ask us.",
        descriptionES: 'Podemos ayudarte a organizar unas cuantas cosas ó darle una limpieza total a tu casa. Citas y servicio rutinal disponible. Solo pregunta.',
        images: [
            { url: 'assets/images/regular-cleaning.jpg', description: '' }
        ]
    },
    {
        id: 5,
        name: 'Apartment Cleaning',
        nameES: 'Limpieza de Departamento',
        link: '/services/5',
        description: "Meet the highest standard of clean and prevent any extra charges from your complex for not meeting their ridiculously high standards. \n    If you're on the complex side of things, let us give your brand new tenant a spotless new home.",
        descriptionES: 'Adquiere el mas alto nivel de limpieza y previene sobrecargos de tu edificio residencial por no limpiar como ellos quieren. Si eres el edificio residencial, prepara tu apartamento para el siguiente inquilino.',
        images: [
            { url: 'assets/images/apartment-cleaning.jpg', description: '' }
        ]
    },
    {
        id: 3,
        name: 'Move In/Out Cleaning',
        nameES: 'Limpieza de Mudanza',
        link: '/services/3',
        description: "Prepare a home for a new tenant or clear a room after a messy tenant. It's all the same to us.",
        descriptionES: 'Preparamos la casa para un nuevo inquilino o limpiamos despues de un inquilino sucio. Es lo mismo para nosotros',
        images: [
            { url: 'assets/images/moving-out-or-in.jpg', description: '' }
        ]
    },
    {
        id: 6,
        name: 'Floor Care',
        nameES: 'Limpieza y Cuidado de Piso',
        link: '/services/6',
        description: "We're equipped clean and sanatize tile, wood, laminate, carpets and many other surfaces.",
        descriptionES: 'Somos capaces de limpiar y desinfectar mosaico, madera, laminado, carpeta y muchas otras superficies.',
        images: [
            { url: 'assets/images/floor-care.jpeg', description: '' }
        ]
    },
    {
        id: 2,
        name: 'Window Cleaning',
        nameES: 'Limpieza de Ventanas',
        link: '/services/2',
        description: "Residential window cleaning available. Talk to us about installing tint to lower home energy costs.",
        descriptionES: 'Limpieza de ventanas residencial disponsible. Habla con nosotros sobre polarizar tus ventanas para disminuir costos energeticos.',
        images: [
            { url: 'assets/images/window-cleaning.jpg', description: '' }
        ]
    },
    {
        id: 4,
        name: 'Special Event Cleaning',
        nameES: 'Limpieza para Eventos Especiales',
        link: '/services/4',
        description: 'Have a presenation in which nothing can go wrong? Let us tidy up the space and prepare it for a clean setup!',
        descriptionES: 'No te preocupes por limpiar despues de tu evento. Limpieza detallada para todos tus eventos especiales (antes y despues).',
        images: [
            { url: 'assets/images/event-cleaning.jpg', description: '' },
        ]
    },
    {
        id: 8,
        name: 'Aftermath Cleaning',
        nameES: 'Aftermath Cleaning',
        link: '/services/8',
        description: "Offering professional cleaning and disinfecting solutions for homicides, crime scenes, natural deaths, suicides, \n    blood cleanup and other biological hazard situations. We are certified in handling these kind of events and can help with these traumatic experiences.",
        descriptionES: "Ofrecemos soluciones profesionales para limpiar y desinfectar escena de crimen, homicidios, muertes naturales, suicidios,\n    derrame de sangre o otros riesgos biologicos.",
        images: [
            { url: 'assets/images/aftermath-cleaning.jpeg', description: '', imageWidth: '75' }
        ]
    }
];



/***/ }),

/***/ "./src/app/services/language.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_Languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Languages */ "./src/app/models/Languages.ts");




var LanguageService = /** @class */ (function () {
    function LanguageService() {
        var _this = this;
        this.languageToggle = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.selectedLanguage = this.getFromLocalStorage();
        this.getSelectedLanguage = function () { return _this.selectedLanguage; };
    }
    LanguageService.prototype.toggleLanguage = function (language) {
        this.saveInLocalStorage(language);
        this.selectedLanguage = language;
        this.languageToggle.next(language);
    };
    LanguageService.prototype.saveInLocalStorage = function (language) {
        window.localStorage.setItem('language', language.toString());
    };
    LanguageService.prototype.getFromLocalStorage = function () {
        var language = window.localStorage.getItem('language');
        if (language == _models_Languages__WEBPACK_IMPORTED_MODULE_3__["Language"].Spanish.toString())
            return _models_Languages__WEBPACK_IMPORTED_MODULE_3__["Language"].Spanish;
        return _models_Languages__WEBPACK_IMPORTED_MODULE_3__["Language"].English;
    };
    LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\artur\Code\Mji%20Paradise\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map