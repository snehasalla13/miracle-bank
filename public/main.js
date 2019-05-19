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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-application/loan-application.component */ "./src/app/loan-application/loan-application.component.ts");
/* harmony import */ var _in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./in-progress/in-progress.component */ "./src/app/in-progress/in-progress.component.ts");
/* harmony import */ var _check_applications_check_applications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check-applications/check-applications.component */ "./src/app/check-applications/check-applications.component.ts");
/* harmony import */ var _success_form_success_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./success-form/success-form.component */ "./src/app/success-form/success-form.component.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _view_status_view_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-status/view-status.component */ "./src/app/view-status/view-status.component.ts");










var routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: 'loan', component: _loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_4__["LoanApplicationComponent"] },
    { path: 'success', component: _success_form_success_form_component__WEBPACK_IMPORTED_MODULE_7__["SuccessFormComponent"] },
    { path: 'check', component: _check_applications_check_applications_component__WEBPACK_IMPORTED_MODULE_6__["CheckApplicationsComponent"] },
    { path: 'inprogress', component: _in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_5__["InProgressComponent"] },
    { path: 'topbar', component: _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_8__["TopBarComponent"] },
    { path: 'view', component: _view_status_view_status_component__WEBPACK_IMPORTED_MODULE_9__["ViewStatusComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'loan-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loan-application/loan-application.component */ "./src/app/loan-application/loan-application.component.ts");
/* harmony import */ var _in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./in-progress/in-progress.component */ "./src/app/in-progress/in-progress.component.ts");
/* harmony import */ var _check_applications_check_applications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./check-applications/check-applications.component */ "./src/app/check-applications/check-applications.component.ts");
/* harmony import */ var _success_form_success_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./success-form/success-form.component */ "./src/app/success-form/success-form.component.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _view_status_view_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view-status/view-status.component */ "./src/app/view-status/view-status.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _loan_application_loan_application_component__WEBPACK_IMPORTED_MODULE_9__["LoanApplicationComponent"],
                _in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_10__["InProgressComponent"],
                _check_applications_check_applications_component__WEBPACK_IMPORTED_MODULE_11__["CheckApplicationsComponent"],
                _success_form_success_form_component__WEBPACK_IMPORTED_MODULE_12__["SuccessFormComponent"],
                _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_13__["TopBarComponent"],
                _view_status_view_status_component__WEBPACK_IMPORTED_MODULE_14__["ViewStatusComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAlertModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/check-applications/check-applications.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/check-applications/check-applications.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-bar></app-top-bar>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Customer #</th>\n      <th scope=\"col\">Loan #</th>\n      <th scope=\"col\">First Name</th>\n      <th scope=\"col\">Last Name</th>\n      <th scope=\"col\">Loan Submitted Date</th>\n      <th scope=\"col\">Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let customerDetail of customerDetails; let index= index\">\n      <td>{{customerDetail.cust_id}}</td>\n      <td>{{customerDetail.loan_id}}</td>\n      <td>{{customerDetail.first_name}}</td>\n      <td>{{customerDetail.last_name}}</td>\n      <td>{{customerDetail.loan_submitted_date | date: 'fullDate'}}</td>\n      <td><a class=\"highlight\" (click)=\"getDetails(customerDetail.cust_id, customerDetail.loan_id)\">{{customerDetail.status}}</a></td>\n    </tr>\n\n  </tbody>\n</table>\n\n"

/***/ }),

/***/ "./src/app/check-applications/check-applications.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/check-applications/check-applications.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: black;\n  cursor: pointer;\n}\na.highlight:hover {\n  color: #00b4ff;\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2stYXBwbGljYXRpb25zL0M6L1VzZXJzL1NuZWhhIFNhbGxhL0Rlc2t0b3AvTWlyYWNsZSBwcm9qZWN0cy9sb2FuLWFwcC9zcmMvYXBwL2NoZWNrLWFwcGxpY2F0aW9ucy9jaGVjay1hcHBsaWNhdGlvbnMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NoZWNrLWFwcGxpY2F0aW9ucy9jaGVjay1hcHBsaWNhdGlvbnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrLWFwcGxpY2F0aW9ucy9jaGVjay1hcHBsaWNhdGlvbnMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmEuaGlnaGxpZ2h0OmhvdmVyIHtcbiAgY29sb3I6IHJnYigwLCAxODAsIDI1NSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiIsImEge1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmEuaGlnaGxpZ2h0OmhvdmVyIHtcbiAgY29sb3I6ICMwMGI0ZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/check-applications/check-applications.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/check-applications/check-applications.component.ts ***!
  \********************************************************************/
/*! exports provided: CheckApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckApplicationsComponent", function() { return CheckApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loan.service */ "./src/app/loan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CheckApplicationsComponent = /** @class */ (function () {
    function CheckApplicationsComponent(loanService, router) {
        this.loanService = loanService;
        this.router = router;
    }
    CheckApplicationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loanService.getData().subscribe(function (res) {
            console.log(res);
            _this.customerDetails = res['Res'];
            // console.log(this.customerDetails);
        });
    };
    CheckApplicationsComponent.prototype.getDetails = function (cust_id, loan_id) {
        var _this = this;
        localStorage.setItem('cust_id', cust_id);
        localStorage.setItem('loan_id', loan_id);
        this.loanService.getCustomer(cust_id, loan_id).subscribe(function (res) {
            console.log(res);
            _this.loanService.setLoan(res);
        });
        this.router.navigate(['inprogress']);
    };
    CheckApplicationsComponent.prototype.onSubmit = function () {
        // console.log(test);
    };
    CheckApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-check-applications',
            template: __webpack_require__(/*! ./check-applications.component.html */ "./src/app/check-applications/check-applications.component.html"),
            styles: [__webpack_require__(/*! ./check-applications.component.less */ "./src/app/check-applications/check-applications.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loan_service__WEBPACK_IMPORTED_MODULE_2__["LoanService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CheckApplicationsComponent);
    return CheckApplicationsComponent;
}());



/***/ }),

/***/ "./src/app/in-progress/in-progress.component.html":
/*!********************************************************!*\
  !*** ./src/app/in-progress/in-progress.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-bar></app-top-bar>\n<form #f=ngForm>\n  <div class=\"container mt-4\">\n    <div class=\"card card-body shadow p-3 mb-4 rounded\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <span class=\"text-left text-capitalize heading\">\n            <h3 style=\"color: #00aae7\">Customer Details</h3>\n          </span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <span class=\"small text-muted\">First Name</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"First Name\" name=\"out_FN\"\n              [(ngModel)]=\"info.out_FN\" ngModel readonly>\n          </div>\n\n        </div>\n\n        <div class=\"col-md-6\">\n          <span class=\"small text-muted\">Last Name</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"Last Name\" name='out_LS' maxlength='30'\n              pattern=\"[a-zA-Z ]*\" [(ngModel)]=\"info.out_LS\" ngModel readonly>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <span class=\"small text-muted\">Email</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"email\" class=\"form-control static-field\" aria-label=\"email\" name='out_Email_ID'\n              [(ngModel)]=\"info.out_Email_ID\" ngModel email readonly #email=ngModel>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <span class=\"small text-muted\">Contact Number</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control static-field\" aria-label=\"phone\" name='out_PN'\n              [(ngModel)]=\"info.out_PN\" ngModel readonly>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <span class=\"small text-muted\">Street Name</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"Address\" name='out_A1' [(ngModel)]=\"info.out_A1\" ngModel\n              readonly>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <span class=\"small text-muted\">Apt #</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"Address 2\" name='out_A2' [(ngModel)]=\"info.out_A2\"\n              ngModel readonly>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <span class=\"small text-muted\">City</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"City\" name='out_City' pattern=\"[a-zA-Z ]*\"\n              [(ngModel)]=\"info.out_City\" ngModel readonly>\n          </div>\n        </div>\n\n        <div class=\"col-md-3\">\n          <span class=\"small text-muted\">State</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"state\" name='out_State' pattern=\"[a-zA-Z ]*\"\n              [(ngModel)]=\"info.out_State\" ngModel readonly>\n          </div>\n        </div>\n\n\n        <div class=\"col-md-3\">\n          <span class=\"small text-muted\">Country</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"Country\" name='out_Country'\n              [(ngModel)]=\"info.out_Country\" pattern=\"[a-zA-Z ]*\" ngModel readonly>\n          </div>\n        </div>\n\n        <div class=\"col-md-3\">\n          <span class=\"small text-muted\">Zip Code</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"Zip Code\" name='out_Zip' maxlength='5' minlength='5'\n              pattern=\"[0-9]*\" [(ngModel)]=\"info.out_Zip\" ngModel readonly>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <span class=\"small text-muted\">Date of Birth </span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"Date of Birth\" name='out_DOB' [(ngModel)]=\"info.out_DOB\"\n              ngModel readonly>\n          </div>\n        </div>\n\n        <div class=\"col-md-3\">\n          <span class=\"small text-muted\">SSN</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control static-field\" minlength='9' maxlength='9' pattern=\"[ 0-9 ]*\"\n              aria-label=\"ssn\" name='out_SSN' [(ngModel)]=\"info.out_SSN\" ngModel readonly>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <span class=\"small text-muted\">Credit History</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control static-field\" name='out_Credit_history'\n              [(ngModel)]=\"info.out_Credit_history\" ngModel readonly>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <span class=\"small text-muted\">Credit Score</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control static-field\" name='out_Credit_Score'\n              [(ngModel)]=\"info.out_Credit_Score\" ngModel readonly>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <span class=\"small text-muted\">Education </span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"education\" name='out_Education'\n              [(ngModel)]=\"info.out_Education\" ngModel readonly>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <span class=\"small text-muted\">Gender</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"Gender\" name='out_Gender' [(ngModel)]=\"info.out_Gender\"\n              ngModel readonly readonly>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <span class=\"small text-muted\">Martial Status </span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"Marital Status\" name='out_Marital_Status'\n              [(ngModel)]=\"info.out_Marital_Status\" ngModel readonly>\n          </div>\n        </div>\n\n        <div class=\"col-md-3\">\n          <span class=\"small text-muted\">Self- Employed </span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"Self Employed\" name='out_Self_Employed'\n              [(ngModel)]=\"info.out_Self_Employed\" ngModel readonly>\n          </div>\n        </div>\n\n\n\n      </div>\n\n\n      <div class=\"row\">\n        <!-- <div class=\"col-md-3\">\n                  <span class=\"small text-muted\">Years of Employment </span>\n                  <div class=\"input-group mb-3\">\n                    <input type=\"text\" class=\"form-control\" aria-label=\"Years of Employment\" name='in_Emp_Length'\n                       ngModel readonly>\n                  </div>\n            </div> -->\n        <div class=\"col-md-4\">\n          <span class=\"small text-muted\">Applicant Income</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"income\" name='out_App_Inc' pattern=\"[0-9]*\"\n              [(ngModel)]=\"info.out_App_Inc\" ngModel readonly>\n          </div>\n        </div>\n\n        <div class=\"col-md-4\">\n          <span class=\"small text-muted\">Co-Applicant Income</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"coincome\" name='out_Co_App_Inc' pattern=\"[0-9]*\"\n              [(ngModel)]=\"info.out_Co_App_Inc\" ngModel readonly>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <span class=\"small text-muted\">Dependents</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"Dependents\" name='out_Dependents'\n              [(ngModel)]=\"info.out_Dependents\" ngModel readonly>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <span class=\"small text-muted\">Loan Amount</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"loanamt\" name='out_Loan_Amount'\n              [(ngModel)]=\"info.out_Loan_Amount\" ngModel>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <span class=\"small text-muted\">Loan Type</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"loantype\" name='out_Loan_Type'\n              [(ngModel)]=\"info.out_Loan_Type\" ngModel readonly>\n          </div>\n        </div>\n\n\n        <div class=\"col-md-4\">\n          <span class=\"small text-muted\">Tenure(in months)</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"tenure\" name='out_Tenure' pattern=\"[0-9]*\"\n              [(ngModel)]=\"info.out_Tenure\" ngModel>\n          </div>\n        </div>\n        <!-- <div class=\"col-md-3\">\n                  <span class=\"small text-muted\">Home Ownership</span>\n                  <div class=\"input-group mb-3\">\n                    <input type=\"text\" class=\"form-control\" aria-label=\"home\" name='in_Home_Ownership'\n                      ngModel readonly>\n                  </div>\n                </div> -->\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <span class=\"small text-muted\">Loan Submitted Date</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"loansubdate\" name='out_Loan_Sub_Date'\n              [(ngModel)]=\"info.out_Loan_Sub_Date\" ngModel readonly>\n          </div>\n        </div>\n\n\n        <div class=\"col-md-6\">\n          <span class=\"small text-muted\">Expected Dispurse Date</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"tenure\" name='out_ExpDis_Date' pattern=\"[0-9]*\"\n              [(ngModel)]=\"info.out_ExpDis_Date\" ngModel readonly>\n          </div>\n        </div>\n        <!-- <div class=\"col-md-4\">\n                    <span class=\"small text-muted\">Home Ownership</span>\n                    <div class=\"input-group mb-3\">\n                      <input type=\"text\" class=\"form-control\" aria-label=\"home\" name='in_Home_Ownership' pattern=\"[0-9]*\"\n                        ngModel readonly>\n                    </div>\n                  </div> -->\n\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <span class=\"small text-muted\">Risk Category</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"riskcat\" name=\"out_ML_Risk_Category\"\n              [(ngModel)]=\"info.out_ML_Risk_Category\" ngModel readonly>\n          </div>\n        </div>\n\n\n        <div class=\"col-md-6\">\n          <span class=\"small text-muted\">Suggested APR</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"apr\" name='out_ML_Sugg_APR' pattern=\"[0-9]*\"\n              [(ngModel)]=\"info.out_ML_Sugg_APR\" ngModel readonly>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <span class=\"small text-muted\">Suggested Amount</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"suggamt\" name='out_ML_Sugg_Amt'\n              [(ngModel)]=\"info.out_ML_Sugg_Amt\" ngModel readonly>\n          </div>\n        </div>\n\n\n        <div class=\"col-md-4\">\n          <span class=\"small text-muted\">Suggested EMI</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"emi\" name='out_ML_Sugg_EMI' pattern=\"[0-9]*\"\n              [(ngModel)]=\"info.out_ML_Sugg_EMI\" ngModel readonly>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <span class=\"small text-muted\">Suggested Tenure</span>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"suggtenure\" name='out_ML_Sugg_Tenure' pattern=\"[0-9]*\"\n              [(ngModel)]=\"info.out_ML_Sugg_Tenure\" ngModel readonly>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n          <span class=\"col-md-12 small text-muted\">Comment</span>\n          <div class=\"input-group mb-3 px-3\">\n              <textarea class=\"form-control rounded-0\" id=\"comment\" name=\"out_Comment\"\n              [(ngModel)]=\"info.out_Comment\" ngModel></textarea>\n          </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n              <span class=\"small text-muted\">Home Ownership</span>\n              <div class=\"input-group mb-3\">\n                <input type=\"text\" class=\"form-control\" aria-label=\"home\" name='out_Home_Owner'\n                  [(ngModel)]=\"info.out_Home_Owner\" ngModel readonly>\n              </div>\n            </div>\n\n\n            <div class=\"col-md-4\">\n              <span class=\"small text-muted\">DTI</span>\n              <div class=\"input-group mb-3\">\n                <input type=\"text\" class=\"form-control\" aria-label=\"emi\" name='out_DTI' pattern=\"[0-9]*\"\n                  [(ngModel)]=\"info.out_DTI\" ngModel readonly>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <span class=\"small text-muted\">Fico</span>\n              <div class=\"input-group mb-3\">\n                <input type=\"text\" class=\"form-control\" aria-label=\"fico\" name='out_Fisco' pattern=\"[0-9]*\"\n                  [(ngModel)]=\"info.out_Fisco\" ngModel readonly>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\" *ngIf=\"approved\">\n            <div class=\"col-md-6\">\n              <span class=\"pt-5\">Do you want to generate agreement?</span>\n              <span class=\"ml-3\">\n                <button class=\"btn btn-primary\" (click)=\"getPDF()\">Generate</button>\n              </span>\n              <span class=\"ml-3\">\n                <button class=\"btn btn-primary\" (click)=\"goBack()\">Later</button>\n              </span>\n            </div>\n            </div>\n\n          <!-- <div class=\"row\" *ngIf=\"approved\">\n            <div class=\"pt-4\">\n              Do you want to generate PDF?<br>\n              <button class=\"btn btn-info\" (click)=\"generatePDF()\">Generate</button>\n            </div>\n          </div> -->\n\n    </div>\n    <div class=\"row mb-5\" style=\"float:right\">\n\n      <div class=\"mr-3\">\n        <button type=\"submit\" class=\"btn btn-secondary\" (click)=\"goBack()\">Back</button>\n      </div>\n      <div class=\"mr-3\" *ngIf=\"!approved\">\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"onStatus('Approved')\">Approve</button>\n      </div>\n      <div class=\"mr-3\" *ngIf=\"!approved\">\n        <button type=\"submit\" class=\"btn btn-danger\" (click)=\"onStatus('Rejected')\">Reject</button>\n      </div>\n      <div class=\"mr-3\" *ngIf=\"!approved\">\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Re-Run\n          Model</button>\n      </div>\n\n\n  </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/in-progress/in-progress.component.less":
/*!********************************************************!*\
  !*** ./src/app/in-progress/in-progress.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".desc-a {\n  border: 1px solid;\n  height: 605px;\n  border-radius: 7px;\n}\n.desc-b {\n  border: 1px solid;\n  height: 200px;\n  margin-bottom: 5px;\n  border-radius: 7px;\n}\n.desc-c {\n  border: 1px solid;\n  height: 400px;\n  border-radius: 7px;\n}\n.title {\n  color: #0d416b;\n  padding-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW4tcHJvZ3Jlc3MvQzovVXNlcnMvU25laGEgU2FsbGEvRGVza3RvcC9NaXJhY2xlIHByb2plY3RzL2xvYW4tYXBwL3NyYy9hcHAvaW4tcHJvZ3Jlc3MvaW4tcHJvZ3Jlc3MuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2luLXByb2dyZXNzL2luLXByb2dyZXNzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREdBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RGO0FER0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0RGO0FESUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2luLXByb2dyZXNzL2luLXByb2dyZXNzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2MtYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBoZWlnaHQ6IDYwNXB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG5cbn1cblxuLmRlc2MtYiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5kZXNjLWMge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4udGl0bGUge1xuICBjb2xvcjojMGQ0MTZiO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbiIsIi5kZXNjLWEge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgaGVpZ2h0OiA2MDVweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmRlc2MtYiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5kZXNjLWMge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLnRpdGxlIHtcbiAgY29sb3I6ICMwZDQxNmI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/in-progress/in-progress.component.ts":
/*!******************************************************!*\
  !*** ./src/app/in-progress/in-progress.component.ts ***!
  \******************************************************/
/*! exports provided: InProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InProgressComponent", function() { return InProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loan.service */ "./src/app/loan.service.ts");





var InProgressComponent = /** @class */ (function () {
    function InProgressComponent(router, loanService, route) {
        this.router = router;
        this.loanService = loanService;
        this.route = route;
        this.approved = false;
        this.train = {
            in_loan_amt: "",
            in_emp_length: "",
            in_home_ownership: "",
            in_annual_inc: "",
            in_DTI: "",
            in_loan_Type: "",
            in_fico: "",
            in_tenure: "",
            in_Cust_ID: "",
            in_Loan_ID: "",
            in_SSN: "",
            in_credit_score: "",
            in_Status: "",
            in_comments: ""
        };
        this.status = {
            in_Cust_ID: "",
            in_loan_ID: "",
            in_SSN: "",
            in_Credit_Score: "",
            in_Status: "",
            in_comments: "",
            in_app_apr: "",
            in_app_emi: "",
            in_app_tenure: "",
            in_Appr_amt: "",
            in_mod_amt: "",
            in_mod_tenure: "",
            in_mod_Risk: "",
            in_mod_apr: "",
            in_mod_emi: ""
        };
        // agreement = {
        //   loan : '',
        //   apr : '',
        //   firstname: '',
        //   lastname: "",
        //   phone: "",
        //   state: "",
        //   zipcode: "",
        //   city: ""
        // };
        this.agreement = {
            loan: '',
            fn: '',
            apr: '',
            ln: '',
            ph: '',
            ci: '',
            zi: '',
            st: ''
        };
    }
    InProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loanService
            .getCustomer(localStorage.getItem("cust_id"), localStorage.getItem("loan_id"))
            .subscribe(function (res) {
            console.log("Get ", res);
            var r = res;
            _this.loanService.setLoan(r);
            _this.loanService.loanInfo.subscribe(function (loan) {
                var l = loan;
                _this.info = l;
            });
        });
    };
    InProgressComponent.prototype.getPDF = function () {
        console.log(event);
        this.agreement.loan = '1000';
        this.agreement.apr = this.info.out_ML_Sugg_APR;
        this.agreement.fn = this.info.out_FN;
        this.agreement.ln = this.info.out_LS;
        this.agreement.st = this.info.out_State;
        this.agreement.ph = this.info.out_PN;
        this.agreement.zi = this.info.out_Zip;
        this.agreement.ci = this.info.out_City;
        console.log("agreement ", this.agreement);
        this.loanService.generateAgreement(this.agreement).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error ", err.url);
            alert("Congratulations! Your agreement has been successfully generated!");
            // this.pdf_url = err.url;
            // // this.router.navigateByUrl(this.pdf_url);
            // window.location.href = this.pdf_url;
        });
    };
    InProgressComponent.prototype.onStatus = function (status) {
        var _this = this;
        console.log(status);
        this.status.in_Cust_ID = localStorage.getItem("cust_id");
        this.status.in_loan_ID = localStorage.getItem("loan_id");
        this.status.in_SSN = this.info.out_SSN;
        this.status.in_Credit_Score = this.info.out_Credit_Score;
        this.status.in_Status = status;
        this.status.in_Appr_amt = this.info.out_ML_Sugg_Amt;
        this.status.in_app_tenure = this.info.out_Tenure;
        this.status.in_app_emi = this.info.out_ML_Sugg_EMI;
        this.status.in_app_apr = this.info.out_ML_Sugg_APR;
        this.status.in_mod_amt = this.info.out_ML_Sugg_Amt;
        this.status.in_mod_tenure = this.info.out_Tenure;
        this.status.in_mod_emi = this.info.out_ML_Sugg_EMI;
        this.status.in_mod_apr = this.info.out_ML_Sugg_APR;
        this.status.in_mod_Risk = this.info.out_ML_Risk_Category;
        this.loanService.getStatus(this.status).subscribe(function (res) {
            console.log("payload status ", _this.status);
            console.log("res for status ", res);
            var msg = res["Message"];
            console.log(msg);
            if (msg === "Success") {
                _this.approved = true;
            }
            else {
                _this.router.navigate(["check"]);
            }
        }, function (err) {
            console.log("err for sttaus ", err);
        });
    };
    InProgressComponent.prototype.goBack = function () {
        this.router.navigate(["check"]);
    };
    InProgressComponent.prototype.onSubmit = function () {
        //  console.log('bla',this.form.value);
        var _this = this;
        this.train.in_loan_amt = this.info.out_Loan_Amount;
        this.train.in_emp_length = this.info.out_Emp_Length;
        this.train.in_home_ownership = this.info.out_Home_Owner;
        this.train.in_annual_inc = this.info.out_App_Inc;
        this.train.in_DTI = this.info.out_DTI;
        this.train.in_loan_Type = this.info.out_Loan_Type;
        this.train.in_fico = this.info.out_Fisco;
        this.train.in_tenure = this.info.out_Tenure;
        this.train.in_Cust_ID = localStorage.getItem("cust_id");
        this.train.in_Loan_ID = localStorage.getItem("loan_id");
        this.train.in_SSN = this.info.out_SSN;
        this.train.in_credit_score = this.info.out_Credit_Score;
        this.train.in_Status = this.info.out_Status;
        this.train.in_comments = this.info.out_Comment;
        // console.log("train ",this.train);
        this.loanService.reRunModel(this.train).subscribe(function (res) {
            var trainedData = res;
            // console.log('info',this.info);
            // console.log("trainedData ", trainedData);
            _this.info.out_ML_Risk_Category = trainedData["out_risk_category"];
            _this.info.out_ML_Sugg_APR = trainedData["out_apr"];
            _this.info.out_ML_Sugg_Amt = trainedData["out_loan_amt"];
            _this.info.out_ML_Sugg_EMI = trainedData["out_emi"];
            _this.info.out_ML_Sugg_Tenure = trainedData["out_tenure"];
            _this.loanService.setLoan(_this.info);
            console.log("info", _this.info);
        });
    };
    InProgressComponent.prototype.ngOnDestroy = function () {
        localStorage.removeItem("cust_id");
        localStorage.removeItem("loan_id");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("f"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], InProgressComponent.prototype, "form", void 0);
    InProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-in-progress",
            template: __webpack_require__(/*! ./in-progress.component.html */ "./src/app/in-progress/in-progress.component.html"),
            styles: [__webpack_require__(/*! ./in-progress.component.less */ "./src/app/in-progress/in-progress.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _loan_service__WEBPACK_IMPORTED_MODULE_4__["LoanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], InProgressComponent);
    return InProgressComponent;
}());



/***/ }),

/***/ "./src/app/loan-application/loan-application.component.html":
/*!******************************************************************!*\
  !*** ./src/app/loan-application/loan-application.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-bar></app-top-bar>\n<div>\n  <form #f=ngForm>\n\n    <div class=\"container p-0\">\n      <div class=\"mb-3 mt-3\">\n        <span class=\"text-left text-capitalize heading\" style=\"color:#0d416b\">\n          <h2>LOAN APPLICATION FORM</h2>\n        </span>\n      </div>\n      <div class=\"card card-body shadow p-3 mb-4 rounded\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <span class=\"text-left text-capitalize heading\">\n              <h3 style=\"color: #00aae7\">Personal details</h3>\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <span class=\"small text-muted\">First Name<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control\" aria-label=\"First Name\" name=\"in_FirstName\"\n               maxlength='30'\n                pattern=\"[a-zA-Z ]*\" required ngModel>\n            </div>\n\n          </div>\n\n          <div class=\"col-md-6\">\n            <span class=\"small text-muted\">Last Name<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control\" aria-label=\"Last Name\" name='in_LastName' maxlength='30'\n               pattern=\"[a-zA-Z ]*\" required ngModel>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <span class=\"small text-muted\">Email<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n              <input type=\"email\" class=\"form-control static-field\" aria-label=\"email\" name='in_Email_ID' value='email'\n               ngModel email required\n              #email=ngModel>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <span class=\"small text-muted\">Contact Number<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control static-field\" aria-label=\"phone\" name='in_Phone'\n               value='phone' required ngModel>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <span class=\"small text-muted\">Street Name<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control\" aria-label=\"Address\" name='in_Address1' required ngModel>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <span class=\"small text-muted\">Apt #<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control\" aria-label=\"Address 2\" name='in_Address2' ngModel>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <span class=\"small text-muted\">City<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control\" aria-label=\"City\" name='in_City' pattern=\"[a-zA-Z ]*\" required\n                ngModel>\n            </div>\n          </div>\n\n          <div class=\"col-md-3\">\n            <span class=\"small text-muted\">State<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n                <input type=\"text\" class=\"form-control\" aria-label=\"state\"\n                name='in_State' pattern=\"[a-zA-Z ]*\" required\n                  ngModel>\n              </div>\n          </div>\n\n\n          <div class=\"col-md-3\">\n            <span class=\"small text-muted\">Country<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control\" aria-label=\"Country\" name='in_Country'\n                pattern=\"[a-zA-Z ]*\" required ngModel>\n            </div>\n          </div>\n\n          <div class=\"col-md-3\">\n            <span class=\"small text-muted\">Zip Code<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control\" aria-label=\"Zip Code\" name='in_ZipCode'\n                maxlength='5' minlength='5' pattern=\"[0-9]*\" required ngModel>\n            </div>\n          </div>\n        </div>\n         <div class=\"row\">\n          <div class=\"col-md-4\">\n            <span class=\"small text-muted\">Date of Birth<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n              <input type=\"date\" class=\"form-control static-field\" aria-label=\"dob\" name='in_DOB' value='dob'\n              required ngModel>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <span class=\"small text-muted\">SSN<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control static-field\" minlength='9' maxlength='9' pattern=\"[ 0-9 ]*\" aria-label=\"ssn\"\n                name='in_SSN' value='SSN' required ngModel>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                  <label class=\"small text-muted\">Credit History<sup class=\"text-danger\">*</sup></label><br>\n                  <div class=\"form-check-inline\">\n                    <label class=\"form-check-label\">\n                      <input type=\"radio\" class=\"form-check-input\" value=\"yes\" name=\"in_Credit_History\" ngModel>Yes\n                    </label>\n                  </div>\n                  <div class=\"form-check-inline\">\n                    <label class=\"form-check-label\">\n                      <input type=\"radio\" class=\"form-check-input\" value=\"no\" name=\"in_Credit_History\" ngModel>No\n                    </label>\n                  </div>\n                </div>\n            </div>\n        </div>\n         <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"small text-muted\">Gender<sup class=\"text-danger\">*</sup></label><br>\n              <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" value=\"male\" name=\"in_Gender\" ngModel>Male\n                </label>\n              </div>\n              <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" value=\"female\" name=\"in_Gender\" ngModel>Female\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"small text-muted\">Marital Status<sup class=\"text-danger\">*</sup></label><br>\n              <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" value=\"single\" name=\"in_Marital_Status\" ngModel>Single\n                </label>\n              </div>\n              <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" value=\"married\" name=\"in_Marital_Status\" ngModel>Married\n                </label>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n     <div class=\"container mt-5 mb-5 p-0\">\n\n      <div class=\"card card-body shadow p-3 mb-4 rounded\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <span class=\"text-left text-capitalize heading\">\n              <h3 style=\"color: #00aae7\">Employment Details</h3>\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"small text-muted\">Self-Employed<sup class=\"text-danger\">*</sup></label><br>\n              <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" name=\"in_Self_Employed\" value=\"yes\" ngModel>Yes\n                </label>\n              </div>\n              <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" name=\"in_Self_Employed\" value=\"no\" ngModel>No\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <span class=\"small text-muted\">Years of employment<sup class=\"text-danger\">*</sup></span>\n                <div class=\"input-group mb-3\">\n                    <select name=\"in_Emp_Length\" class=\"select-date form-control\" required ngModel>\n                      <option value=\"\" selected disabled>Please select</option>\n                      <option value='0'>Less than a year</option>\n                      <option value='1'>1 year</option>\n                      <option value='2'>2 years</option>\n                      <option value='3'>3 years</option>\n                      <option value='4'>4 years</option>\n                      <option value='5'>5 years</option>\n                      <option value='6'>6 years</option>\n                      <option value='7'>7 years</option>\n                      <option value='8'>8 years</option>\n                      <option value='9'>9 years</option>\n                      <option value='10'>More than 10 years</option>\n                    </select>\n              </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <span class=\"small text-muted\">Applicant Income<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control\" aria-label=\"income\" name='in_ApplicantIncome' pattern=\"[0-9]*\" required\n                ngModel>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <span class=\"small text-muted\">Co-Applicant Income<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control\" aria-label=\"coincome\" name='in_CoapplicantIncome' pattern=\"[0-9]*\" required\n                ngModel>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container mt-5 mb-5 p-0\">\n\n       <div class=\"card card-body shadow p-3 mb-4 rounded\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <span class=\"text-left text-capitalize heading\">\n              <h3 style=\"color: #00aae7\">Loan Details</h3>\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <span class=\"small text-muted\">Loan Amount<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control\" aria-label=\"loanamt\" name='in_Loan_Amount' pattern=\"[0-9]*\" required\n                ngModel>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <span class=\"small text-muted\">Loan Type<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n                <select name=\"in_Loan_Type\" class=\"select-date form-control\" required ngModel>\n                  <option value=\"\" selected disabled>Please select</option>\n                  <option value='medical'>Medical</option>\n                  <option value='car'>Car</option>\n                  <option value='credit'>Credit Card</option>\n                  <option value='debt'>Debt Consolidation</option>\n                  <option value='homeimprove'>Home Improvement</option>\n                  <option value='purchase'>Major Purchase</option>\n                  <option value='moving'>Moving</option>\n                  <option value='house'>House</option>\n                  <option value='education'>Education</option>\n                  <option value='renewable'>Renewable</option>\n                  <option value='business'>Small business</option>\n                  <option value='vacation'>Vacation</option>\n                  <option value='wedding'>Wedding</option>\n                  <option value='other'>Other</option>\n                </select>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n            <span class=\"small text-muted\">Tenure(in months)<sup class=\"text-danger\">*</sup></span>\n            <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control\" aria-label=\"tenure\" name='in_Tenure' pattern=\"[0-9]*\" required\n                ngModel>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col-md-6\">\n            <span class=\"small text-muted\">Home Ownership<sup class=\"text-danger\">*</sup></span>\n                <div class=\"input-group mb-3\">\n                  <select name=\"in_Home_Ownership\" class=\"select-date form-control\" required ngModel>\n                    <option value=\"\" selected disabled>Please select</option>\n                    <option value='own'>Owner</option>\n                    <option value='rent'>Tenant</option>\n                    <option value='mortgage'>Mortgage</option>\n                    <option value='other'>Other</option>\n                  </select>\n              </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"small text-muted\">Dependents<sup class=\"text-danger\">*</sup></label><br>\n              <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" name=\"in_Dependents\" value=\"yes\" ngModel>Yes\n                </label>\n              </div>\n              <div class=\"form-check-inline\">\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" name=\"in_Dependents\" value=\"no\" ngModel>No\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row mb-5\"  style=\"float: right\">\n          <button type=\"submit\" class=\"btn btn-primary\"\n          (click)= \"onSubmit()\" [disabled]=\"!f.valid\">Submit</button>\n       </div>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/loan-application/loan-application.component.less":
/*!******************************************************************!*\
  !*** ./src/app/loan-application/loan-application.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched,\nselect.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hbi1hcHBsaWNhdGlvbi9DOi9Vc2Vycy9TbmVoYSBTYWxsYS9EZXNrdG9wL01pcmFjbGUgcHJvamVjdHMvbG9hbi1hcHAvc3JjL2FwcC9sb2FuLWFwcGxpY2F0aW9uL2xvYW4tYXBwbGljYXRpb24uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2xvYW4tYXBwbGljYXRpb24vbG9hbi1hcHBsaWNhdGlvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFDRSxxQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbG9hbi1hcHBsaWNhdGlvbi9sb2FuLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLCBzZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuIiwiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/loan-application/loan-application.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/loan-application/loan-application.component.ts ***!
  \****************************************************************/
/*! exports provided: LoanApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanApplicationComponent", function() { return LoanApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loan.service */ "./src/app/loan.service.ts");





var LoanApplicationComponent = /** @class */ (function () {
    function LoanApplicationComponent(router, loanService) {
        this.router = router;
        this.loanService = loanService;
    }
    LoanApplicationComponent.prototype.ngOnInit = function () {
    };
    LoanApplicationComponent.prototype.onSubmit = function (custid) {
        console.log('bla', this.form.value);
        this.id = custid;
        //console.log('bla', JSON.stringify(this.form.value));
        this.loanService.addCustomer(this.form.value);
        //this.router.navigate(['/success']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoanApplicationComponent.prototype, "form", void 0);
    LoanApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loan-application',
            template: __webpack_require__(/*! ./loan-application.component.html */ "./src/app/loan-application/loan-application.component.html"),
            styles: [__webpack_require__(/*! ./loan-application.component.less */ "./src/app/loan-application/loan-application.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _loan_service__WEBPACK_IMPORTED_MODULE_4__["LoanService"]])
    ], LoanApplicationComponent);
    return LoanApplicationComponent;
}());



/***/ }),

/***/ "./src/app/loan.service.ts":
/*!*********************************!*\
  !*** ./src/app/loan.service.ts ***!
  \*********************************/
/*! exports provided: LoanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanService", function() { return LoanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var LoanService = /** @class */ (function () {
    function LoanService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" });
        this.loan = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]("");
        this.loanInfo = this.loan.asObservable();
    }
    LoanService.prototype.addCustomer = function (formData) {
        var _this = this;
        console.log("service", formData);
        this.http
            .post("https://flaskapi.azurewebsites.net/api/first", formData, {
            headers: this.headers
        })
            .subscribe(function (res) {
            // console.log('response', res);
            _this.message = res.Message;
            // console.log('msg', res.Message);
            _this.router.navigate(["/success"]);
        }, function (err) {
            console.log("error", err);
        });
    };
    LoanService.prototype.getCustomer = function (in_Cust_ID, in_Loan_ID) {
        var reqIds = { in_Cust_ID: in_Cust_ID, in_Loan_ID: in_Loan_ID };
        return this.http.post("https://flaskapi.azurewebsites.net/api/third", reqIds, { headers: this.headers });
    };
    LoanService.prototype.getData = function () {
        return this.http.post("https://flaskapi.azurewebsites.net/api/second", {
            headers: this.headers
        });
    };
    LoanService.prototype.getStatus = function (status) {
        return this.http.post("https://flaskapi.azurewebsites.net/api/fifth", status, { headers: this.headers });
    };
    LoanService.prototype.reRunModel = function (formData) {
        console.log("service", formData);
        return this.http.post("https://flaskapi.azurewebsites.net/api/fourth", formData, { headers: this.headers });
    };
    LoanService.prototype.generateAgreement = function (data) {
        console.log("HERE!");
        return this.http.post("http://127.0.0.1:5000/api/docusign", data, { headers: this.headers });
    };
    LoanService.prototype.setLoan = function (loan) {
        return this.loan.next(loan);
    };
    LoanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoanService);
    return LoanService;
}());



/***/ }),

/***/ "./src/app/success-form/success-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/success-form/success-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-bar></app-top-bar>\n<div class=\"container\">\n  <h3  class= \"description text-center\">{{ message }}<br></h3>\n</div>\n"

/***/ }),

/***/ "./src/app/success-form/success-form.component.less":
/*!**********************************************************!*\
  !*** ./src/app/success-form/success-form.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".description {\n  color: #0d416b;\n  font-size: 30px;\n  margin-top: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VjY2Vzcy1mb3JtL0M6L1VzZXJzL1NuZWhhIFNhbGxhL0Rlc2t0b3AvTWlyYWNsZSBwcm9qZWN0cy9sb2FuLWFwcC9zcmMvYXBwL3N1Y2Nlc3MtZm9ybS9zdWNjZXNzLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3N1Y2Nlc3MtZm9ybS9zdWNjZXNzLWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zdWNjZXNzLWZvcm0vc3VjY2Vzcy1mb3JtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICMwZDQxNmI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcCA6IDIwMHB4O1xufVxuIiwiLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICMwZDQxNmI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/success-form/success-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/success-form/success-form.component.ts ***!
  \********************************************************/
/*! exports provided: SuccessFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessFormComponent", function() { return SuccessFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loan.service */ "./src/app/loan.service.ts");



var SuccessFormComponent = /** @class */ (function () {
    function SuccessFormComponent(loanService) {
        this.loanService = loanService;
    }
    SuccessFormComponent.prototype.ngOnInit = function () {
        this.message = this.loanService.message;
        console.log(this.loanService.message);
    };
    SuccessFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success-form',
            template: __webpack_require__(/*! ./success-form.component.html */ "./src/app/success-form/success-form.component.html"),
            styles: [__webpack_require__(/*! ./success-form.component.less */ "./src/app/success-form/success-form.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loan_service__WEBPACK_IMPORTED_MODULE_2__["LoanService"]])
    ], SuccessFormComponent);
    return SuccessFormComponent;
}());



/***/ }),

/***/ "./src/app/top-bar/top-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/top-bar/top-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"container\">\n    <div class=\"navbar pr-10\">\n      <a class=\"navbar-brand\">\n        <img src=\"../../assets/img/Miracle-Logo-White.png\" class=\"img-center\" alt=\"\">\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.less":
/*!************************************************!*\
  !*** ./src/app/top-bar/top-bar.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-center {\n  width: 8em !important;\n}\n.wrapper {\n  background: black !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJhci9DOi9Vc2Vycy9TbmVoYSBTYWxsYS9EZXNrdG9wL01pcmFjbGUgcHJvamVjdHMvbG9hbi1hcHAvc3JjL2FwcC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHFCQUFBO0FDQUY7QURFQTtFQUNFLDRCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbWctY2VudGVye1xuICB3aWR0aDogOGVtICFpbXBvcnRhbnQ7XG59XG4ud3JhcHBlcntcbiAgYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbn1cbiIsIi5pbWctY2VudGVyIHtcbiAgd2lkdGg6IDhlbSAhaW1wb3J0YW50O1xufVxuLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopBarComponent = /** @class */ (function () {
    function TopBarComponent() {
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    TopBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-bar',
            template: __webpack_require__(/*! ./top-bar.component.html */ "./src/app/top-bar/top-bar.component.html"),
            styles: [__webpack_require__(/*! ./top-bar.component.less */ "./src/app/top-bar/top-bar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "./src/app/view-status/view-status.component.html":
/*!********************************************************!*\
  !*** ./src/app/view-status/view-status.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=ngForm>\n    <div class=\"container mt-4\">\n        <div class=\"card card-body shadow p-3 mb-4 rounded\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <span class=\"text-left text-capitalize heading\">\n                  <h3 style=\"color: #00aae7\">View Status</h3>\n                </span>\n              </div>\n            </div>\n              <div class=\"col-md-6\">\n                <span class=\"small text-muted\">Customer ID</span>\n                <div class=\"input-group mb-3\">\n                  <input type=\"text\" class=\"form-control\" aria-label=\"Customer ID\" name=\"custid\"\n                    ngModel readonly>\n                </div>\n              </div>\n\n              <div class=\"col-md-6\">\n                <span class=\"small text-muted\">Loan ID</span>\n                <div class=\"input-group mb-3\">\n                  <input type=\"text\" class=\"form-control\" aria-label=\"Last Name\" name='loanid'\n                   ngModel readonly>\n                </div>\n              </div>\n\n                  <div class=\"row pl-2\">\n                      <button type=\"submit\" class=\"btn btn-secondary\" style=\"float: right\"\n                       >Submit</button>\n                   </div>\n\n                </div>\n\n              </div>\n              </form>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/view-status/view-status.component.less":
/*!********************************************************!*\
  !*** ./src/app/view-status/view-status.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctc3RhdHVzL3ZpZXctc3RhdHVzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/view-status/view-status.component.ts":
/*!******************************************************!*\
  !*** ./src/app/view-status/view-status.component.ts ***!
  \******************************************************/
/*! exports provided: ViewStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewStatusComponent", function() { return ViewStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewStatusComponent = /** @class */ (function () {
    function ViewStatusComponent() {
    }
    ViewStatusComponent.prototype.ngOnInit = function () {
    };
    ViewStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-status',
            template: __webpack_require__(/*! ./view-status.component.html */ "./src/app/view-status/view-status.component.html"),
            styles: [__webpack_require__(/*! ./view-status.component.less */ "./src/app/view-status/view-status.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewStatusComponent);
    return ViewStatusComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Sneha Salla\Desktop\Miracle projects\loan-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map