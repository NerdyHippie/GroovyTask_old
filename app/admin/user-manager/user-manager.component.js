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
var user_service_1 = require('../../shared/_services/user.service');
var UserManagerComponent = (function () {
    function UserManagerComponent(us) {
        this.us = us;
    }
    UserManagerComponent.prototype.ngOnInit = function () {
        this.users$ = this.us.userList$.subscribe(this.bindUsers.bind(this));
    };
    UserManagerComponent.prototype.bindUsers = function (data) {
        console.log('binding users', data);
        this.users = data;
    };
    UserManagerComponent.prototype.ngOnDestroy = function () {
        this.users$.unsubscribe();
    };
    UserManagerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-manager',
            templateUrl: 'user-manager.component.html',
            styleUrls: ['user-manager.component.css']
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserManagerComponent);
    return UserManagerComponent;
}());
exports.UserManagerComponent = UserManagerComponent;
//# sourceMappingURL=user-manager.component.js.map