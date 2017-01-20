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
var NavBarComponent = (function () {
    function NavBarComponent(authSvc, af, router) {
        this.authSvc = authSvc;
        this.af = af;
        this.router = router;
        this.loggedIn = false;
        this.isCollapsed = true;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.af.auth.subscribe(function (auth) { return _this.loggedIn = auth ? true : false; });
        //this.setLoggedIn.bind(this)
    };
    /*setLoggedIn(auth:any) {
    console.log('set this.loggedIn in navbar',auth);
        this.loggedIn = auth ? true : false;
    }*/
    NavBarComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    NavBarComponent.prototype.collapseNav = function () {
        this.isCollapsed = true;
    };
    NavBarComponent.prototype.logout = function () {
        //console.log('navbar logout',this.route,this.route.url);
        var returnUrl = this.router.routerState.snapshot.url;
        //this.route.url //.take(1).subscribe( (e) => returnUrl = e );
        console.log('routerState.stanpshot', returnUrl);
        // TODO: Maybe we chage this up so that it is a route - /logout and we can get the previous route parants, do the logout, then redirect back to prior route params (which should produce login with a valid returnUrl to page you were viewing)
        this.router.navigate(['/logout'], { queryParams: { returnUrl: returnUrl } });
        this.collapseNav();
        /*
        *
        * Get current URL from router here (in navbar)
        * This logout() should navigate to /logout and pass returnURL as queryParam (just like in login)
        * CollapseNav() after or before?  does it matter?  try after first for readability
        *
        * LogoutComponent will then do the firebase logout, then send the user back to the returnUrl it got in the queryParams
        *
        * */
        /*console.log('logout from navbar');
        this.authSvc.logout().subscribe(auth => { console.log('auth changed',auth);
        if (!auth) {
            console.log('bounce to admin');
            this.router.navigate(['/admin']);
            this.collapseNav();
            } })*/
    };
    NavBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nav-bar',
            templateUrl: './nav-bar.component.html'
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, angularfire2_1.AngularFire, router_1.Router])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav-bar.component.js.map