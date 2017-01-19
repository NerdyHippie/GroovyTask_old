import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { CalendarComponent } from './core/calendar/calendar.component';
import { LoginComponent} from './core/login/login.component';

const appRoutes: Routes = [
    {
        path: ''
        ,component: HomeComponent
    },{
        path: 'calendar'
        ,component: CalendarComponent
    },{
        path: 'login'
        ,component: LoginComponent
    }/*,{
        path: 'calendar'
        ,component: CalendarComponent
    }*/
];

export const AppRoutingComponents = [HomeComponent,CalendarComponent,LoginComponent];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
