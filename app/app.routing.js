"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./core/home/home.component');
var calendar_component_1 = require('./core/calendar/calendar.component');
var login_component_1 = require('./core/login/login.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    }, {
        path: 'calendar',
        component: calendar_component_1.CalendarComponent
    }, {
        path: 'login',
        component: login_component_1.LoginComponent
    } /*,{
        path: 'calendar'
        ,component: CalendarComponent
    }*/
];
exports.AppRoutingComponents = [home_component_1.HomeComponent, calendar_component_1.CalendarComponent, login_component_1.LoginComponent];
exports.AppRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map