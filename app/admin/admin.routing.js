"use strict";
var router_1 = require('@angular/router');
var admin_component_1 = require('./admin.component');
//import { AdminHomeComponent } from './admin-home/admin-home.component';
var user_manager_component_1 = require('./user-manager/user-manager.component');
var AdminRoutes = [
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        children: [
            /* {
                 path: '/'
                 ,component: AdminHomeComponent
             },*/
            {
                path: 'users',
                component: user_manager_component_1.UserManagerComponent
            }
        ]
    }
];
exports.AdminRouteComponents = [admin_component_1.AdminComponent, user_manager_component_1.UserManagerComponent]; //,AdminHomeComponent
exports.AdminRouting = router_1.RouterModule.forChild(AdminRoutes);
//# sourceMappingURL=admin.routing.js.map