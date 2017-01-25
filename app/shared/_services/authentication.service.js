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
var router_1 = require("@angular/router");
var angularfire2_1 = require('angularfire2');
var alert_service_1 = require('./alert.service');
var user_service_1 = require('./user.service');
var logger_service_1 = require("./logger.service");
var firebase = require('firebase');
require('rxjs/add/operator/map');
var AuthenticationService = (function () {
    function AuthenticationService(af, router, usrSvc, alertService, logger) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.usrSvc = usrSvc;
        this.alertService = alertService;
        this.logger = logger;
        this.auth = af.auth;
        af.auth.subscribe(function (authData) {
            logger.log('authData in authenticationService', authData);
            if (authData) {
                _this.handleAuthSuccess(authData);
            }
            else {
                logger.log('nav to logout');
                var returnUrl = _this.router.routerState.snapshot.url;
                _this.router.navigate(['/logout'], { queryParams: { returnUrl: returnUrl } });
            }
        });
    }
    ;
    AuthenticationService.prototype.loginWithEmail = function (username, password) {
        return this.af.auth.login({ email: username, password: password }, {
            provider: angularfire2_1.AuthProviders.Password,
            method: angularfire2_1.AuthMethods.Password,
        });
    };
    AuthenticationService.prototype.loginWithFacebook = function () {
        return this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Facebook,
            method: angularfire2_1.AuthMethods.Popup,
        });
    };
    AuthenticationService.prototype.loginWithGoogle = function () {
        //console.log('login with Google');
        return this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Google,
            method: angularfire2_1.AuthMethods.Popup,
        });
    };
    AuthenticationService.prototype.handleAuthSuccess = function (authData) {
        this.logger.log('firing handleAuthSuccess', authData);
        this.usrSvc.setUserAccount(authData);
        this.usrSvc.loadCurrentUser(authData);
    };
    AuthenticationService.prototype.logout = function () {
        this.af.auth.logout();
        return this.af.auth;
    };
    AuthenticationService.prototype.requestReset = function (email) {
        return firebase.auth().sendPasswordResetEmail(email);
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, router_1.Router, user_service_1.UserService, alert_service_1.AlertService, logger_service_1.Logger])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map