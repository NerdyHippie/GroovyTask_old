import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavBarComponent }  from './core/nav-bar/nav-bar.component';
import { AppRouting,AppRoutingComponents } from './app.routing';

@NgModule({
  imports:      [ BrowserModule,FormsModule,AppRouting ],
  declarations: [ AppComponent,NavBarComponent,AppRoutingComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
