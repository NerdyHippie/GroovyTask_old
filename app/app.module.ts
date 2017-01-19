import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CalendarModule} from 'primeng/primeng';

import { AppRouting,AppRoutingComponents } from './app.routing';

import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent }  from './app.component';
import { NavBarComponent }  from './core/nav-bar/nav-bar.component';


import { UserService } from './shared/user.service';
import { Logger } from './shared/logger.service';

//noinspection TypeScriptCheckImport
import { FirebaseConfig } from 'firebaseConfig';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
		AngularFireModule.initializeApp(FirebaseConfig), NgbModule.forRoot()
		,CalendarModule
		, AppRouting, SharedModule, AdminModule
	],
  declarations: [ AppComponent, NavBarComponent, AppRoutingComponents ],
	
	providers: [ UserService,Logger ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
