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
var router_1 = require("@angular/router");
var angularfire2_1 = require('angularfire2');
var alert_service_1 = require("../../shared/_services/alert.service");
var firebase = require('firebase');
var EmailActionComponent = (function () {
    function EmailActionComponent(af, activatedRoute, alertService, router) {
        this.af = af;
        this.activatedRoute = activatedRoute;
        this.alertService = alertService;
        this.router = router;
        this.model = { password: '' };
    }
    EmailActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth = firebase.auth();
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params['mode'])
                _this.mode = params['mode'];
            if (params['oobCode'])
                _this.actionCode = params['oobCode'];
            if (params['apiKey'])
                _this.apiKey = params['apiKey'];
            _this.handleAction();
        });
    };
    EmailActionComponent.prototype.handleAction = function () {
        switch (this.mode) {
            case 'resetPassword':
                this.handleResetPassword(); // Display reset password handler and UI.
                break;
            case 'recoverEmail':
                this.handleRecoverEmail(); // Display email recovery handler and UI.
                break;
            case 'verifyEmail':
                this.handleVerifyEmail(); // Display email verification handler and UI.
                break;
            default:
        }
    };
    EmailActionComponent.prototype.handleResetPassword = function () {
        var _this = this;
        this.auth.verifyPasswordResetCode(this.actionCode)
            .then(function (email) { return _this.accountEmail = email; })
            .catch(function (error) {
            _this.alertService.error(error.message);
            console.error('GroovyTask: Error in verifyPasswordResetCode', error);
        });
    };
    EmailActionComponent.prototype.doPasswordReset = function (newPassword) {
        var _this = this;
        // Save the new password.
        this.auth.confirmPasswordReset(this.actionCode, newPassword)
            .then(function (resp) { return _this.auth.signInWithEmailAndPassword(_this.accountEmail, newPassword)
            .then(_this.router.navigate(['/'])); })
            .catch(function (error) {
            _this.alertService.error(error.message);
            console.error('GroovyTask: Error in confirmPasswordReset', error);
        });
    };
    EmailActionComponent.prototype.handleRecoverEmail = function () {
        /*var restoredEmail = null;
        // Confirm the action code is valid.
        auth.checkActionCode(actionCode).then(function(info) {
            // Get the restored email address.
            restoredEmail = info['data']['email'];
            
            // Revert to the old email.
            return auth.applyActionCode(actionCode);
        }).then(function() {
            // Account email reverted to restoredEmail
            
            // TODO: Display a confirmation message to the user.
            
            // You might also want to give the user the option to reset their password
            // in case the account was compromised:
            auth.sendPasswordResetEmail(restoredEmail).then(function() {
                // Password reset confirmation sent. Ask user to check their email.
            }).catch(function(error) {
                // Error encountered while sending password reset code.
            });
        }).catch(function(error) {
            // Invalid code.
        });*/
    };
    EmailActionComponent.prototype.handleVerifyEmail = function () {
        /*// Try to apply the email verification code.
        auth.applyActionCode(actionCode).then(function(resp) {
            // Email address has been verified.
            
            // TODO: Display a confirmation message to the user.
            // You could also provide the user with a link back to the app.
        }).catch(function(error) {
            // Code is invalid or expired. Ask the user to verify their email address
            // again.
        });*/
    };
    EmailActionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'email-action',
            templateUrl: 'email-action.component.html'
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, router_1.ActivatedRoute, alert_service_1.AlertService, router_1.Router])
    ], EmailActionComponent);
    return EmailActionComponent;
}());
exports.EmailActionComponent = EmailActionComponent;
//# sourceMappingURL=email-action.component.js.map