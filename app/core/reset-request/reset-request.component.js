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
var authentication_service_1 = require("../../shared/_services/authentication.service");
var ResetRequestComponent = (function () {
    function ResetRequestComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.model = { email: '' };
    }
    ResetRequestComponent.prototype.ngOnInit = function () { };
    ResetRequestComponent.prototype.requestReset = function (model) {
        var _this = this;
        console.log('reset password', model);
        this.authenticationService.requestReset(model.email).then(function (data) {
            console.log('reset data', data);
            _this.router.navigate(['/login']);
        }).catch(function (error) { return console.error('reset error', error); });
    };
    ResetRequestComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'reset-request',
            templateUrl: 'reset-request.component.html'
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
    ], ResetRequestComponent);
    return ResetRequestComponent;
}());
exports.ResetRequestComponent = ResetRequestComponent;
//# sourceMappingURL=reset-request.component.js.map