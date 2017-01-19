import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseObjectObservable,AuthProviders,AuthMethods } from 'angularfire2';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(private af: AngularFire) { }
			
    info: any;
    ref: FirebaseObjectObservable<any>;
    ngOnInit() {
    	/*this.ref = this.af.database.object('/');
    	this.ref.subscribe(data => this.info = data);*/
    	
    	this.af.auth.subscribe(data => this.testFunc(data));
    	
    	
		}
	
		testFunc(data:any) {
    	console.log('authState data',data);
		}
	
	login() {
    	console.log('login');
			this.af.auth.login({email:'jorvis@nerdyhippie.com',password:'test123'},
				{
					provider: AuthProviders.Password,
					method: AuthMethods.Password,
				});
			console.log('login 2');
	}
	
	logout() {
		this.af.auth.logout();
	}
    
}
