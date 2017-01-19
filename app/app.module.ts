// Vendor modules
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'primeng/primeng';

// App Routing
import { AppRouting,AppRoutingComponents } from './app.routing';

// GroovyTask Modules
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';

// Components
import { AppComponent }  from './app.component';
import { NavBarComponent }  from './core/nav-bar/nav-bar.component';

// Global Services
import { AlertService,AuthenticationService,Logger,UserService } from './shared/_services/index';

// Environment Config
//noinspection TypeScriptCheckImport
import { FirebaseConfig,myFirebaseAuthConfig } from 'firebaseConfig';

// TODO: Create Core Module
// Concatenate the Core Components here for readability
export const CoreComponents: Array<any> = [NavBarComponent];


@NgModule({
	imports:      [
		BrowserModule,
		FormsModule,
		HttpModule,
		AngularFireModule.initializeApp(FirebaseConfig,myFirebaseAuthConfig),
		NgbModule.forRoot()
		,CalendarModule
		,AppRouting
		,SharedModule
		,AdminModule
	],
	declarations: [
		AppComponent,
		CoreComponents,
		AppRoutingComponents
	],
	
	providers: [
		AlertService,
		AuthenticationService,
		Logger,
		UserService
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
