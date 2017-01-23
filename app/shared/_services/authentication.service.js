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
var angularfire2_1 = require('angularfire2');
var user_service_1 = require('./user.service');
require('rxjs/add/operator/map');
var AuthenticationService = (function () {
    function AuthenticationService(af, usrSvc) {
        this.af = af;
        this.usrSvc = usrSvc;
        this.auth = af.auth;
    }
    ;
    AuthenticationService.prototype.loginWithEmail = function (username, password) {
        this.af.auth.login({ email: username, password: password }, {
            provider: angularfire2_1.AuthProviders.Password,
            method: angularfire2_1.AuthMethods.Password,
        });
        return this.af.auth;
    };
    AuthenticationService.prototype.loginWithFacebook = function () {
        var _this = this;
        this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Facebook,
            method: angularfire2_1.AuthMethods.Popup,
        })
            .then(function (authData) { return _this.handleAuthSuccess(authData); })
            .catch(function (authError) { return _this.handleAuthError(authError); });
        return this.af.auth;
    };
    AuthenticationService.prototype.loginWithGoogle = function () {
        var _this = this;
        console.log('login with Google');
        this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Google,
            method: angularfire2_1.AuthMethods.Popup,
        })
            .then(function (authData) { return _this.handleAuthSuccess(authData); })
            .catch(function (authError) { return _this.handleAuthError(authError); });
        return this.af.auth;
    };
    AuthenticationService.prototype.handleAuthSuccess = function (authData) {
        console.log(authData);
        this.usrSvc.loadCurrentUser(authData);
    };
    AuthenticationService.prototype.handleAuthError = function (authError) {
        console.log(authError);
        alert('error logging into facebook');
    };
    AuthenticationService.prototype.logout = function () {
        this.af.auth.logout();
        return this.af.auth;
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, user_service_1.UserService])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map