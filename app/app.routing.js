"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./core/home/home.component');
//import { AdminComponent } from './admin/admin.component';
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    } /*,{
        path: 'admin'
        ,component: AdminComponent
    }*/
];
exports.AppRoutingComponents = [home_component_1.HomeComponent]; //, AdminComponent
exports.AppRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map