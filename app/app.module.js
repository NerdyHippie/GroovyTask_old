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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var angularfire2_1 = require('angularfire2');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var app_routing_1 = require('./app.routing');
var admin_module_1 = require('./admin/admin.module');
var shared_module_1 = require('./shared/shared.module');
var app_component_1 = require('./app.component');
var nav_bar_component_1 = require('./core/nav-bar/nav-bar.component');
var user_service_1 = require('./shared/user.service');
var logger_service_1 = require('./shared/logger.service');
//noinspection TypeScriptCheckImport
var firebaseConfig_1 = require('firebaseConfig');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
                angularfire2_1.AngularFireModule.initializeApp(firebaseConfig_1.FirebaseConfig), ng_bootstrap_1.NgbModule.forRoot(),
                app_routing_1.AppRouting, shared_module_1.SharedModule, admin_module_1.AdminModule
            ],
            declarations: [app_component_1.AppComponent, nav_bar_component_1.NavBarComponent, app_routing_1.AppRoutingComponents],
            providers: [user_service_1.UserService, logger_service_1.Logger],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map