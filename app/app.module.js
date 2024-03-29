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
// Vendor modules
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var angularfire2_1 = require('angularfire2');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var primeng_1 = require('primeng/primeng');
// App Routing
var app_routing_1 = require('./app.routing');
var index_1 = require('./shared/_guards/index');
// GroovyTask Modules
var admin_module_1 = require('./admin/admin.module');
var shared_module_1 = require('./shared/shared.module');
// Components
var app_component_1 = require('./app.component');
var nav_bar_component_1 = require('./core/nav-bar/nav-bar.component');
// Global Services
var index_2 = require('./shared/_services/index');
// Environment Config
//noinspection TypeScriptCheckImport
var firebaseConfig_1 = require('firebaseConfig');
// TODO: Create Core Module
// Concatenate the Core Components here for readability
exports.CoreComponents = [nav_bar_component_1.NavBarComponent];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                angularfire2_1.AngularFireModule.initializeApp(firebaseConfig_1.FirebaseConfig, firebaseConfig_1.myFirebaseAuthConfig),
                ng_bootstrap_1.NgbModule.forRoot(),
                primeng_1.CalendarModule,
                app_routing_1.AppRouting,
                shared_module_1.SharedModule,
                admin_module_1.AdminModule
            ],
            declarations: [
                app_component_1.AppComponent,
                exports.CoreComponents,
                app_routing_1.AppRoutingComponents
            ],
            providers: [
                index_1.AuthGuard,
                index_2.AlertService,
                index_2.AuthenticationService,
                index_2.Logger,
                index_2.UserService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map