import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserService } from '../../shared/_services/user.service';

@Component({
	moduleId: module.id,
	selector: 'user-editor',
	templateUrl: 'user-editor.component.html'
})
export class UserEditorComponent extends UserDetailComponent implements OnInit,OnDestroy {
  savedUser: any;
	
	constructor(usrSvc:UserService,route:ActivatedRoute,router:Router) {
  	super(usrSvc,route,router);
	}
	
	saveUser() {
		this.user.$key ? this.updateUser() : this.createUser();
	}
	
	cancelEdit() {
		let path:string = '/admin/users';
		if (this.user.$key) {
			path += '/' + this.user.$key;
		}
		this.router.navigate([path]);
	}
	
	createUser() {
		this.savedUser = this.usrSvc.userList$.push(this.user);
		this.savedUser.then(this.openDetail.bind(this));
	}
	
	updateUser() {
		this.savedUser = { key: this.user.$key };
		this.usrSvc.getUser(this.user.$key).set(this.usrSvc.cleanObj(this.user)).then(this.openDetail.bind(this));
		
	}
	
	openDetail() {
		this.router.navigate(['/admin/users/'+this.savedUser.key]);
	}
	
	archiveUser() {
  	// TODO: Archive User
	}
	
	restoreUser() {
  	// TODO: Restore User
	}
	
	
    
}
