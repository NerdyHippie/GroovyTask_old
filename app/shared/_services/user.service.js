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
var logger_service_1 = require('./logger.service');
var moment = require('moment');
var ReplaySubject_1 = require('rxjs/ReplaySubject');
require('rxjs/add/operator/map');
require('rxjs/add/operator/take');
var UserService = (function () {
    function UserService(af, logger) {
        this.af = af;
        this.logger = logger;
        this.currentUser = new ReplaySubject_1.ReplaySubject(1);
        this.initialize();
    }
    UserService.prototype.initialize = function () {
        this.userList$ = this.af.database.list('/users');
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
        var path = '/users/' + userId;
        return this.af.database.object(path);
    };
    UserService.prototype.loadCurrentUser = function (authData) {
        var _this = this;
        this.getUser(authData.uid).subscribe(function (usrData) {
            _this.logger.log('set currentUser', usrData);
            _this.currentUser.next(usrData);
        });
        return this.currentUser;
    };
    UserService.prototype.makeProviderObj = function (providerData) {
        var ret = {};
        for (var _i = 0, providerData_1 = providerData; _i < providerData_1.length; _i++) {
            var item = providerData_1[_i];
            ret[item.providerId.replace('.com', '')] = item.uid;
        }
        console.log('makeProviderObj', ret);
        return ret;
    };
    UserService.prototype.setUserAccount = function (authData) {
        var _this = this;
        this.logger.log('set account', authData);
        var providerData = authData.auth.providerData; //[0];
        var userData = {
            uid: authData.uid,
            email: authData.auth.email,
            lastLogin: moment().format(),
            providers: this.makeProviderObj(authData.auth.providerData),
            photoURL: authData.auth.photoURL || 'http://simpleicon.com/wp-content/uploads/user1.png',
            displayName: authData.auth.displayName
        };
        /* Ended up not needing this, but it's handy to know...
        let providerMap:any = {
            '2': 'facebook'
            ,'3': 'google'
            ,'4': 'firebase'
        };*/
        if (authData.auth.firstName)
            userData.firstName = authData.auth.firstName;
        if (authData.auth.lastName)
            userData.lastName = authData.auth.lastName;
        var usr = this.getUser(userData.uid);
        var usr$ = usr.subscribe(function (user) {
            _this.logger.log('usr exists?', user.$exists(), usr);
            if (!user.$exists() || !user.dateCreated) {
                _this.logger.log('add dateCreated', moment().format());
                userData.dateCreated = moment().format();
                usr.set(userData);
            }
            usr$.unsubscribe();
        });
        return usr.update(userData);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, logger_service_1.Logger])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map