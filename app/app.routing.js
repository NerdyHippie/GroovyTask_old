"use strict";
var router_1 = require('@angular/router');
var auth_guard_1 = require('./shared/_guards/auth.guard');
var home_component_1 = require('./core/home/home.component');
var calendar_component_1 = require('./core/calendar/calendar.component');
var login_component_1 = require('./core/login/login.component');
var logout_component_1 = require('./core/logout/logout.component');
var register_component_1 = require('./core/register/register.component');
var reset_request_component_1 = require('./core/reset-request/reset-request.component');
var email_action_component_1 = require('./core/email-action/email-action.component');
var user_detail_component_1 = require('./admin/user-detail/user-detail.component');
var user_editor_component_1 = require('./admin/user-editor/user-editor.component');
var print_test_component_1 = require('./core/print-test/print-test.component');
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
        component: reset_request_component_1.ResetRequestComponent
    }, {
        path: 'emailAction',
        component: email_action_component_1.EmailActionComponent,
        pathMatch: 'prefix'
    }, {
        path: 'profile/:id',
        component: user_detail_component_1.UserDetailComponent
    }, {
        path: 'profile/edit/:id',
        component: user_editor_component_1.UserEditorComponent
    }, {
        path: 'print-test',
        component: print_test_component_1.PrintTestComponent
    }
];
exports.AppRoutingComponents = [home_component_1.HomeComponent, calendar_component_1.CalendarComponent, login_component_1.LoginComponent, logout_component_1.LogoutComponent, register_component_1.RegisterComponent, reset_request_component_1.ResetRequestComponent, email_action_component_1.EmailActionComponent, print_test_component_1.PrintTestComponent];
exports.AppRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map