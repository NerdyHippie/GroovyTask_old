"use strict";
var router_1 = require('@angular/router');
var admin_component_1 = require('./admin.component');
var user_manager_component_1 = require('./user-manager/user-manager.component');
var user_editor_component_1 = require('./user-editor/user-editor.component');
var AdminRoutes = [
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        children: [
            {
                path: 'users',
                component: user_manager_component_1.UserManagerComponent
            }, {
                path: 'users/:id',
                component: user_editor_component_1.UserEditorComponent
            }
        ]
    }
];
exports.AdminRouteComponents = [admin_component_1.AdminComponent, user_manager_component_1.UserManagerComponent, user_editor_component_1.UserEditorComponent]; //,AdminHomeComponent
exports.AdminRouting = router_1.RouterModule.forChild(AdminRoutes);
//# sourceMappingURL=admin.routing.js.map