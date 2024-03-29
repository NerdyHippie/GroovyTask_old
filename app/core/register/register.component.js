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
var index_1 = require('../../shared/_services/index');
var RegisterComponent = (function () {
    function RegisterComponent(router, af, alertService, usrSvc) {
        this.router = router;
        this.af = af;
        this.alertService = alertService;
        this.usrSvc = usrSvc;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function (f) {
        console.log('firing register', f);
        if (f.valid) {
            console.log('form is valid');
            this.loading = true;
            var regData = {
                email: this.model.email,
                password: this.model.password
            };
            this.af.auth.createUser(regData)
                .then(this.registerSuccess.bind(this), this.registerFailure.bind(this));
        }
        else {
            console.log('not valid');
        }
    };
    RegisterComponent.prototype.registerSuccess = function (data) {
        var _this = this;
        console.log('firebase reg success!', data);
        data.auth.firstName = this.model.firstName;
        data.auth.lastName = this.model.lastName;
        this.usrSvc.setUserAccount(data).then(function () {
            console.log('acct created, reg finished');
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/']);
        });
    };
    RegisterComponent.prototype.registerFailure = function (error) {
        console.error('GroovyTask: Registration Failed', error);
        this.alertService.error(error);
        this.loading = false;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'register.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, angularfire2_1.AngularFire, index_1.AlertService, index_1.UserService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map