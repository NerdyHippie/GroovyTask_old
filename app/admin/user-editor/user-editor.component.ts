import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
	moduleId: module.id,
	selector: 'user-editor',
	templateUrl: 'user-editor.component.html'
})
export class UserEditorComponent implements OnInit,OnDestroy {
  user: User;
	id: String;
	user$: any;
	routeParams$: any;
	
	constructor(private usrSvc:UserService,private route:ActivatedRoute) {	}
	
	ngOnInit() {
		this.routeParams$ = this.route.params.subscribe(params => this.loadUser(params));
	}
	
	loadUser(params:any) {
		console.log('in loadUser',params);
		if (params['id']) {
			this.id = params['id'];
			this.user$ = this.usrSvc.getUser(this.id);
			this.user$.subscribe(this.popUser.bind(this));
		} else {
			this.user = {firstName:'',lastName:'',username:''};
		}
	}
	
	popUser(usrData:any) {
		this.user = usrData;
	}
	
	saveUser() {
		console.log('save the user!');
	}
	
	ngOnDestroy() {
		console.log('destroy!');
		if (this.routeParams$) {
			console.log('unsub routeParams$ in editor');
			this.routeParams$.unsubscribe();
		}
		/*if (this.user$) {
			console.log('unsub usrRef',this.user$);
			this.user$.unsubscribe();
		}*/
	}
    
}
