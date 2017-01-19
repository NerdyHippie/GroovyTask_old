import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
    moduleId: module.id,
    selector: 'user-detail',
    templateUrl: 'user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
	user: User;
	id: String;
	user$: FirebaseObjectObservable<any>;
	routeParams$: any;
	
	constructor(public usrSvc:UserService,public route:ActivatedRoute,public router:Router) {	}
	
	ngOnInit() {
		// Pass the routeParams data over to loadUser()
		this.routeParams$ = this.route.params.subscribe(params => this.loadUser(params));
	}
	
	loadUser(params:any) {
		this.user = undefined; // Start out setting this.user to undefined so that the directive content disappears
		if (params['id'] && params['id'] != 'create') {  // Add the && != 'create" to catch just in case this is picked up with a route param of 'create'
			this.id = params['id'];
			this.user$ = this.usrSvc.getUser(this.id);  // Get the FirebaseObjectObservable reference here
			this.user$.subscribe(this.popUser.bind(this));  // Pass the user data to popUser.  Add .bind(this) to refer to the proper function scope
		} else {
			// TODO: Figure out the proper way to do this - I think you're suppose to implement a Class that implements the Interface
			this.user = {firstName:'',lastName:'',username:''}; // Make a new user
		}
	}
	
	editUser() {
		this.router.navigate(['/admin/users/edit/'+this.user.$key]);
	}
	
	popUser(usrData:any) {
		this.user = usrData;
	}
	
	ngOnDestroy() {
		if (this.routeParams$) {
			this.routeParams$.unsubscribe();
		}
	}
}
