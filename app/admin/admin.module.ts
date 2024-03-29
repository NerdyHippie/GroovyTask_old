import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { AngularFireModule }    from 'angularfire2';
import { SharedModule }         from '../shared/shared.module';

import { AdminRouting,AdminRouteComponents} from './admin.routing';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { LinkAccountComponent } from './link-account/link-account.component';

@NgModule({
    imports:      [ BrowserModule,CommonModule,FormsModule,AngularFireModule,AdminRouting
        ,SharedModule ],
    declarations: [ AdminRouteComponents,UserManagerComponent,LinkAccountComponent ],
    exports:      [
        BrowserModule,CommonModule, FormsModule ]
})
export class AdminModule { }
