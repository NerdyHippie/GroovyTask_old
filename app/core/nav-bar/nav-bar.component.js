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
var angularfire2_1 = require('angularfire2');
var authentication_service_1 = require('../../shared/_services/authentication.service');
var user_service_1 = require('../../shared/_services/user.service');
var NavBarComponent = (function () {
    function NavBarComponent(authSvc, userService, af, router) {
        this.authSvc = authSvc;
        this.userService = userService;
        this.af = af;
        this.router = router;
        this.loggedIn = false;
        this.isCollapsed = true;
        this.currentUser = null;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.af.auth.subscribe(function (auth) { return _this.loggedIn = auth ? true : false; });
        this.userService.currentUser.subscribe(function (data) { return _this.currentUser = data; });
    };
    NavBarComponent.prototype.getProfileLink = function () {
        return this.currentUser ? this.currentUser.uid : '';
    };
    NavBarComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    NavBarComponent.prototype.collapseNav = function () {
        this.isCollapsed = true;
    };
    NavBarComponent.prototype.logout = function () {
        var returnUrl = this.router.routerState.snapshot.url;
        this.router.navigate(['/logout'], { queryParams: { returnUrl: returnUrl } });
        this.collapseNav();
    };
    NavBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['nav-bar.component.css']
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, user_service_1.UserService, angularfire2_1.AngularFire, router_1.Router])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav-bar.component.js.map