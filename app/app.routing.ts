import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AuthGuard } from './shared/_guards/auth.guard'

import { HomeComponent } from './core/home/home.component';
import { CalendarComponent } from './core/calendar/calendar.component';
import { LoginComponent} from './core/login/login.component';
import { LogoutComponent} from './core/logout/logout.component';

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
    }
];

export const AppRoutingComponents = [HomeComponent,CalendarComponent,LoginComponent,LogoutComponent];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
