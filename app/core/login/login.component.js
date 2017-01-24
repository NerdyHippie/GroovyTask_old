"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var index_1 = require('../../shared/_services/index');
var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        //this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.loginSubscription$ = this.authenticationService.auth.subscribe(this.handleLoginSuccess.bind(this), this.handleLoginError.bind(this));
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.loginSubscription$.unsubscribe();
    };
    LoginComponent.prototype.loginWithEmail = function () {
        this.loading = true;
        this.authenticationService.loginWithEmail(this.model.username, this.model.password);
    };
    LoginComponent.prototype.loginWithFacebook = function () {
        this.loading = true;
        this.authenticationService.loginWithFacebook();
        //.subscribe(this.handleLoginSuccess.bind(this),this.handleLoginError.bind(this));
    };
    LoginComponent.prototype.loginWithGoogle = function () {
        this.loading = true;
        this.authenticationService.loginWithGoogle();
        //.subscribe(this.handleLoginSuccess.bind(this),this.handleLoginError.bind(this));
    };
    LoginComponent.prototype.handleLoginSuccess = function (data) {
        console.log('login success, data = ', data);
        this.router.navigate([this.returnUrl]);
        this.loading = false;
    };
    LoginComponent.prototype.handleLoginError = function (error) {
        console.log('login error', error);
        this.alertService.error(error);
        this.loading = false;
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, index_1.AuthenticationService, index_1.AlertService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map