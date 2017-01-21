import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AuthGuard } from './shared/_guards/auth.guard'

import { HomeComponent } from './core/home/home.component';
import { CalendarComponent } from './core/calendar/calendar.component';
import { LoginComponent } from './core/login/login.component';
import { LogoutComponent } from './core/logout/logout.component';
import { RegisterComponent } from './core/register/register.component';

const appRoutes: Routes = [
    {
        path: ''
        ,component: HomeComponent
				,canActivate: [ AuthGuard ]
    },{
        path: 'calendar'
        ,component: CalendarComponent
				,canActivate: [ AuthGuard ]
    },{
        path: 'login'
        ,component: LoginComponent
    },{
        path: 'logout'
        ,component: LogoutComponent
    },{
        path: 'register'
        ,component: RegisterComponent
    }
];

export const AppRoutingComponents = [HomeComponent,CalendarComponent,LoginComponent,LogoutComponent,RegisterComponent];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
