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
var user_service_1 = require('../../shared/_services/user.service');
var UserDetailComponent = (function () {
    function UserDetailComponent(usrSvc, activatedRoute, router) {
        this.usrSvc = usrSvc;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Pass the routeParams data over to loadUser()
        this.routeParams$ = this.activatedRoute.params.subscribe(function (params) { return _this.loadUser(params); });
    };
    UserDetailComponent.prototype.loadUser = function (params) {
        this.user = undefined; // Start out setting this.user to undefined so that the directive content disappears
        if (params['id'] && params['id'] != 'create') {
            this.id = params['id'];
            this.user$ = this.usrSvc.getUser(this.id); // Get the FirebaseObjectObservable reference here
            this.user$.subscribe(this.popUser.bind(this)); // Pass the user data to popUser.  Add .bind(this) to refer to the proper function scope
        }
        else {
            // TODO: Figure out the proper way to do this - I think you're suppose to implement a Class that implements the Interface
            this.user = { firstName: '', lastName: '', email: '' }; // Make a new user
        }
    };
    UserDetailComponent.prototype.editUser = function () {
        this.router.navigate(['../edit/' + this.user.$key], { relativeTo: this.activatedRoute });
    };
    UserDetailComponent.prototype.popUser = function (usrData) {
        this.user = usrData;
    };
    UserDetailComponent.prototype.allowEdit = function () {
        var canEdit = false;
        if (1 == 1) {
            canEdit = true;
        }
        return canEdit;
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        if (this.routeParams$) {
            this.routeParams$.unsubscribe();
        }
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-detail',
            templateUrl: 'user-detail.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map