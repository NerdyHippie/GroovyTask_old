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
var UserEditorComponent = (function () {
    function UserEditorComponent(usrSvc, route) {
        this.usrSvc = usrSvc;
        this.route = route;
    }
    UserEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeParams$ = this.route.params.subscribe(function (params) { return _this.loadUser(params); });
    };
    UserEditorComponent.prototype.loadUser = function (params) {
        console.log('in loadUser', params);
        if (params['id']) {
            this.id = params['id'];
            this.user$ = this.usrSvc.getUser(this.id);
            this.user$.subscribe(this.popUser.bind(this));
        }
        else {
            this.user = { firstName: '', lastName: '', username: '' };
        }
    };
    UserEditorComponent.prototype.popUser = function (usrData) {
        this.user = usrData;
    };
    UserEditorComponent.prototype.saveUser = function () {
        console.log('save the user!');
    };
    UserEditorComponent.prototype.ngOnDestroy = function () {
        console.log('destroy!');
        if (this.routeParams$) {
            console.log('unsub routeParams$ in editor');
            this.routeParams$.unsubscribe();
        }
        /*if (this.user$) {
            console.log('unsub usrRef',this.user$);
            this.user$.unsubscribe();
        }*/
    };
    UserEditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-editor',
            templateUrl: 'user-editor.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute])
    ], UserEditorComponent);
    return UserEditorComponent;
}());
exports.UserEditorComponent = UserEditorComponent;
//# sourceMappingURL=user-editor.component.js.map