import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
    moduleId: module.id,
    selector: 'user-detail',
    templateUrl: 'user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
	
	routeParams$: any;
	
	one: String;
	two: String;
	three: String;
	
	constructor(private usrSvc:UserService,private route:ActivatedRoute) {
		console.log('constructor',usrSvc);  // defined here
		this.one = usrSvc.getTest('this is one');  // works correctly
	}
	
	ngOnInit() {
		console.log('ngOnInit',this.usrSvc);  // also defined here
		this.two = this.usrSvc.getTest('this is two');  // also works correctly
		this.routeParams$ = this.route.params.subscribe(value => this.loadUser(value));
		//this.loadUser({});
	}
	
	loadUser(params:any) {
		console.log('loadUser',params);   // undefined!!
		this.three = this.usrSvc.getTest('this is three');  // BOOM
	}
	
	ngOnDestroy() {
		if (this.routeParams$) {
			console.log('unsub routeParams$ in detail');
			this.routeParams$.unsubscribe();
		}
	}
}
