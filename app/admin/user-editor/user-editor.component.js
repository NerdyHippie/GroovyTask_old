"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var user_detail_component_1 = require('../user-detail/user-detail.component');
var user_service_1 = require('../../shared/user.service');
var UserEditorComponent = (function (_super) {
    __extends(UserEditorComponent, _super);
    function UserEditorComponent(usrSvc, route, router) {
        _super.call(this, usrSvc, route, router);
    }
    UserEditorComponent.prototype.saveUser = function () {
        this.user.$key ? this.updateUser() : this.createUser();
    };
    UserEditorComponent.prototype.cancelEdit = function () {
        var path = '/admin/users';
        if (this.user.$key) {
            path += '/' + this.user.$key;
        }
        this.router.navigate([path]);
    };
    UserEditorComponent.prototype.createUser = function () {
        this.savedUser = this.usrSvc.userList$.push(this.user);
        this.savedUser.then(this.openDetail.bind(this));
    };
    UserEditorComponent.prototype.updateUser = function () {
        this.savedUser = { key: this.user.$key };
        this.usrSvc.getUser(this.user.$key).set(this.usrSvc.cleanObj(this.user)).then(this.openDetail.bind(this));
    };
    UserEditorComponent.prototype.openDetail = function () {
        this.router.navigate(['/admin/users/' + this.savedUser.key]);
    };
    UserEditorComponent.prototype.archiveUser = function () {
        // TODO: Archive User
    };
    UserEditorComponent.prototype.restoreUser = function () {
        // TODO: Restore User
    };
    UserEditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-editor',
            templateUrl: 'user-editor.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router])
    ], UserEditorComponent);
    return UserEditorComponent;
}(user_detail_component_1.UserDetailComponent));
exports.UserEditorComponent = UserEditorComponent;
//# sourceMappingURL=user-editor.component.js.map