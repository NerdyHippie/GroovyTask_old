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
var alert_service_1 = require("../../shared/_services/alert.service");
var user_service_1 = require('../../shared/_services/user.service');
var firebase = require('firebase');
var LinkAccountComponent = (function () {
    function LinkAccountComponent(userService, alertService) {
        this.userService = userService;
        this.alertService = alertService;
        this.selectedProviders = [];
    }
    LinkAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser.subscribe(function (data) {
            _this.currentUser = data;
            _this.selectedProviders.push(data.providerId);
        });
    };
    LinkAccountComponent.prototype.isConnected = function (provider) {
        return this.currentUser.providers[provider];
        //return this.selectedProviders.indexOf(provider) != -1;
    };
    LinkAccountComponent.prototype.connectToPassword = function () {
        alert('not yet implented');
    };
    LinkAccountComponent.prototype.connectToGoogle = function () {
        this.linkToProvider = new firebase.auth.GoogleAuthProvider();
        this.linkAccount();
    };
    LinkAccountComponent.prototype.connectToFacebook = function () {
        this.linkToProvider = new firebase.auth.FacebookAuthProvider();
        this.linkAccount();
    };
    LinkAccountComponent.prototype.connectToTwitter = function () {
        this.linkToProvider = new firebase.auth.TwitterAuthProvider();
        this.linkAccount();
    };
    LinkAccountComponent.prototype.connectToGithub = function () {
        this.linkToProvider = new firebase.auth.GithubAuthProvider();
        this.linkAccount();
    };
    LinkAccountComponent.prototype.linkAccount = function () {
        var _this = this;
        firebase.auth().currentUser.linkWithPopup(this.linkToProvider)
            .then(function (result) { return firebase.auth().signInWithCredential(result.credential); })
            .catch(function (error) { return _this.alertService.error(error); });
    };
    LinkAccountComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'link-account',
            templateUrl: 'link-account.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, alert_service_1.AlertService])
    ], LinkAccountComponent);
    return LinkAccountComponent;
}());
exports.LinkAccountComponent = LinkAccountComponent;
//# sourceMappingURL=link-account.component.js.map