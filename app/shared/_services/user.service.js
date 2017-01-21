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
var core_1 = require("@angular/core");
var angularfire2_1 = require('angularfire2');
var UserService = (function () {
    function UserService(af) {
        this.af = af;
        this.apples = 'Oranges';
        this.initialize();
    }
    UserService.prototype.initialize = function () {
        this.userList$ = this.af.database.list('/users');
    };
    UserService.prototype.getTest = function (input) {
        return "Test " + input;
    };
    UserService.prototype.cleanObj = function (input) {
        var invalidProps = ['$key', '$exists'];
        for (var _i = 0, invalidProps_1 = invalidProps; _i < invalidProps_1.length; _i++) {
            var prop = invalidProps_1[_i];
            delete input[prop];
        }
        return input;
    };
    UserService.prototype.getUser = function (userId) {
        //console.log('get user',userId);
        var path = '/users/' + userId;
        return this.af.database.object(path);
    };
    UserService.prototype.createUserAccount = function (userData) {
        var uid = userData.uid;
        delete userData.uid;
        var usr = this.af.database.object('/users/' + uid);
        return usr.set(userData);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map