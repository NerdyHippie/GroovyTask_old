"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./core/home/home.component');
var admin_component_1 = require('./admin/admin.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    }, {
        path: 'admin',
        component: admin_component_1.AdminComponent
    }
];
exports.AppRoutingComponents = [home_component_1.HomeComponent, admin_component_1.AdminComponent];
exports.AppRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map