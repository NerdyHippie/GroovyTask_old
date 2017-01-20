"use strict";
var router_1 = require('@angular/router');
var auth_guard_1 = require('../shared/_guards/auth.guard');
var admin_component_1 = require('./admin.component');
var user_manager_component_1 = require('./user-manager/user-manager.component');
var user_editor_component_1 = require('./user-editor/user-editor.component');
var user_detail_component_1 = require('./user-detail/user-detail.component');
var AdminRoutes = [
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'users',
                pathMatch: 'full'
            }, {
                path: 'users',
                component: user_manager_component_1.UserManagerComponent,
                children: [
                    {
                        path: 'create',
                        component: user_editor_component_1.UserEditorComponent
                    }, {
                        path: ':id',
                        component: user_detail_component_1.UserDetailComponent
                    }, {
                        path: 'edit/:id',
                        component: user_editor_component_1.UserEditorComponent
                    }
                ]
            }
        ]
    }
];
exports.AdminRouteComponents = [admin_component_1.AdminComponent, user_manager_component_1.UserManagerComponent, user_detail_component_1.UserDetailComponent, user_editor_component_1.UserEditorComponent]; //,AdminHomeComponent
exports.AdminRouting = router_1.RouterModule.forChild(AdminRoutes);
//# sourceMappingURL=admin.routing.js.map