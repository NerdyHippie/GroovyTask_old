"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./core/home/home.component');
var calendar_component_1 = require('./core/calendar/calendar.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    }, {
        path: 'calendar',
        component: calendar_component_1.CalendarComponent
    }
];
exports.AppRoutingComponents = [home_component_1.HomeComponent, calendar_component_1.CalendarComponent];
exports.AppRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map