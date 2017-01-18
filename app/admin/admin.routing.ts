import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AdminComponent }   from './admin.component';
//import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserManagerComponent } from './user-manager/user-manager.component';

const AdminRoutes: Routes = [
    {
        path: 'admin'
        ,component: AdminComponent
        ,children: [
           /* {
                path: '/'
                ,component: AdminHomeComponent
            },*/
            {
                path: 'users'
                ,component: UserManagerComponent
            }
        ]
    }

];

export const AdminRouteComponents = [AdminComponent,UserManagerComponent];//,AdminHomeComponent
export const AdminRouting: ModuleWithProviders = RouterModule.forChild(AdminRoutes);
