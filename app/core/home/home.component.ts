import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseObjectObservable,AuthProviders,AuthMethods } from 'angularfire2';

import { AuthenticationService } from '../../shared/_services/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(private af: AngularFire,private authSvc: AuthenticationService ) { }
		
    ngOnInit() {
    	
		}
    
    /*info: any;
    ref: FirebaseObjectObservable<any>;
    
    uid: any;
    authObj: any;
    
    ngOnInit() {
    	/!*this.ref = this.af.database.object('/');
    	this.ref.subscribe(data => this.info = data);*!/
    	
    	//this.af.auth.subscribe(data => this.testFunc(data));
    	
    	this.uid = this.authSvc.uid;
    	this.authObj = this.authSvc.uid;
		}
	
		testFunc(data:any) {
    	console.log('authState data',data);
		}
	
		login() {
    	this.authSvc.login();
		}
		logout() {
    	this.authSvc.logout();
		}*/
    
}
