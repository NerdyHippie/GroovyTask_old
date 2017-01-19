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
var Observable_1 = require("rxjs/Observable");
var LoadingMessageComponent = (function () {
    function LoadingMessageComponent() {
        this.showLoadMessage = false;
    }
    LoadingMessageComponent.prototype.ngOnInit = function () { };
    LoadingMessageComponent.prototype.ngOnChanges = function (changes) {
        this.showLoadMessage = changes['waitFor'].currentValue;
    };
    LoadingMessageComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Observable_1.Observable)
    ], LoadingMessageComponent.prototype, "waitFor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Observable_1.Observable)
    ], LoadingMessageComponent.prototype, "message", void 0);
    LoadingMessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'loading-message',
            templateUrl: 'loading-message.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingMessageComponent);
    return LoadingMessageComponent;
}());
exports.LoadingMessageComponent = LoadingMessageComponent;
//# sourceMappingURL=loading-message.component.js.map