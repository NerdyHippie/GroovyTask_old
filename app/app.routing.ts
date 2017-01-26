import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AuthGuard } from './shared/_guards/auth.guard'

import { HomeComponent } from './core/home/home.component';
import { CalendarComponent } from './core/calendar/calendar.component';
import { LoginComponent } from './core/login/login.component';
import { LogoutComponent } from './core/logout/logout.component';
import { RegisterComponent } from './core/register/register.component';
import { ResetRequestComponent } from './core/reset-request/reset-request.component';
import { EmailActionComponent } from './core/email-action/email-action.component';

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
    },{
        path: 'reset'
        ,component: ResetRequestComponent
    },{
        path: 'emailAction'
        ,component: EmailActionComponent
				,pathMatch: 'prefix'
    }
];

export const AppRoutingComponents = [HomeComponent,CalendarComponent,LoginComponent,LogoutComponent,RegisterComponent,ResetRequestComponent,EmailActionComponent];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
