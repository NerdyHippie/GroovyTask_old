import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavBarComponent }  from './core/nav-bar/nav-bar.component';
import { AppRouting,AppRoutingComponents } from './app.routing';

import { FirebaseConfig } from '../environments/dev.environment.js';
import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRouting,
		AngularFireModule.initializeApp(FirebaseConfig),
		NgbModule.forRoot()
	],
  declarations: [ AppComponent, NavBarComponent, AppRoutingComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
