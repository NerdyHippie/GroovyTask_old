import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
//import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
    {
        path: ''
        ,component: HomeComponent
    }/*,{
        path: 'admin'
        ,component: AdminComponent
    }*/
];

export const AppRoutingComponents = [HomeComponent]; //, AdminComponent
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
