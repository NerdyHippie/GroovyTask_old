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
var user_service_1 = require('../../shared/user.service');
var UserDetailComponent = (function () {
    function UserDetailComponent(usrSvc, route) {
        this.usrSvc = usrSvc;
        this.route = route;
        console.log('constructor', usrSvc); // defined here
        this.one = usrSvc.getTest('this is one'); // works correctly
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit', this.usrSvc); // also defined here
        this.two = this.usrSvc.getTest('this is two'); // also works correctly
        this.routeParams$ = this.route.params.subscribe(function (value) { return _this.loadUser(value); });
        //this.loadUser({});
    };
    UserDetailComponent.prototype.loadUser = function (params) {
        console.log('loadUser', params); // undefined!!
        this.three = this.usrSvc.getTest('this is three'); // BOOM
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        if (this.routeParams$) {
            console.log('unsub routeParams$ in detail');
            this.routeParams$.unsubscribe();
        }
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-detail',
            templateUrl: 'user-detail.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map