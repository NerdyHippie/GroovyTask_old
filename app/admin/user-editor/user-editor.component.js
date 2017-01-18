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
    function UserEditorComponent(route, us) {
        this.route = route;
        this.us = us;
        this.editUser = { firstName: '', lastName: '', username: '' };
    }
    UserEditorComponent.prototype.ngOnInit = function () {
        this.sub = this.route.params.subscribe(this.loadUser);
    };
    UserEditorComponent.prototype.loadUser = function (params) {
        console.log('loadUser', params);
        if (params['id']) {
            console.log('id exists, load data');
            this.id = params['id'];
            this.userRef = this.us.getUser(this.id);
            this.userRef.subscribe(this.popUser);
        }
    };
    UserEditorComponent.prototype.popUser = function (usrData) {
        console.log('popusr', usrData);
        this.editUser = usrData;
    };
    UserEditorComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            console.log('unsub sub');
            this.sub.unsubscribe();
        }
        if (this.userRef) {
            console.log('unsub usrRef');
            this.userRef.unsubscribe();
        }
    };
    UserEditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-editor',
            templateUrl: 'user-editor.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, user_service_1.UserService])
    ], UserEditorComponent);
    return UserEditorComponent;
}());
exports.UserEditorComponent = UserEditorComponent;
//# sourceMappingURL=user-editor.component.js.map