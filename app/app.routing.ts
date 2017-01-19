import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { CalendarComponent } from './core/calendar/calendar.component';

const appRoutes: Routes = [
    {
        path: ''
        ,component: HomeComponent
    },{
        path: 'calendar'
        ,component: CalendarComponent
    }
];

export const AppRoutingComponents = [HomeComponent,CalendarComponent];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
