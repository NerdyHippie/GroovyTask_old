import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
	moduleId: module.id,
	selector: 'user-editor',
	templateUrl: 'user-editor.component.html'
})
export class UserEditorComponent implements OnInit {
  editUser: User = {firstName:'',lastName:'',username:''};
	id: String;
	userRef: any;
	sub: any;
	
	constructor(private route:ActivatedRoute,private us:UserService) { }
	
  ngOnInit() {
		this.sub = this.route.params.subscribe(this.loadUser);
	}
	
	loadUser(params:any) {
		console.log('loadUser',params);
		if (params['id']) {
			console.log('id exists, load data');
			this.id = params['id'];
			this.userRef = this.us.getUser(this.id);
			this.userRef.subscribe(this.popUser);
		}
		
		
	}
	
	popUser(usrData:any) {
		console.log('popusr',usrData);
		this.editUser = usrData;
	}
	
	ngOnDestroy() {
		if (this.sub) {
			console.log('unsub sub');
			this.sub.unsubscribe();
		}
		if (this.userRef) {
			console.log('unsub usrRef');
			this.userRef.unsubscribe();
		}
	}
    
}
