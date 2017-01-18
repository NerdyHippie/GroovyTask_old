import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AdminComponent }   from './admin.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { UserEditorComponent } from './user-editor/user-editor.component'

const AdminRoutes: Routes = [
    {
        path: 'admin'
        ,component: AdminComponent
        ,children: [
           {
                path: 'users'
                ,component: UserManagerComponent
           },{
                path: 'users/:id'
                ,component: UserEditorComponent
           }
        ]
    }

];

export const AdminRouteComponents = [AdminComponent,UserManagerComponent,UserEditorComponent];//,AdminHomeComponent
export const AdminRouting: ModuleWithProviders = RouterModule.forChild(AdminRoutes);
