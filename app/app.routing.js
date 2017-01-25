"use strict";
var router_1 = require('@angular/router');
var auth_guard_1 = require('./shared/_guards/auth.guard');
var home_component_1 = require('./core/home/home.component');
var calendar_component_1 = require('./core/calendar/calendar.component');
var login_component_1 = require('./core/login/login.component');
var logout_component_1 = require('./core/logout/logout.component');
var register_component_1 = require('./core/register/register.component');
var reset_password_component_1 = require('./core/reset-password/reset-password.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        canActivate: [auth_guard_1.AuthGuard]
    }, {
        path: 'calendar',
        component: calendar_component_1.CalendarComponent,
        canActivate: [auth_guard_1.AuthGuard]
    }, {
        path: 'login',
        component: login_component_1.LoginComponent
    }, {
        path: 'logout',
        component: logout_component_1.LogoutComponent
    }, {
        path: 'register',
        component: register_component_1.RegisterComponent
    }, {
        path: 'reset',
        component: reset_password_component_1.ResetPasswordComponent
    }
];
exports.AppRoutingComponents = [home_component_1.HomeComponent, calendar_component_1.CalendarComponent, login_component_1.LoginComponent, logout_component_1.LogoutComponent, register_component_1.RegisterComponent, reset_password_component_1.ResetPasswordComponent];
exports.AppRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map