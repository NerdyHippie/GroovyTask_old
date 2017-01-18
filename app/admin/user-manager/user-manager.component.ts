import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
    moduleId: module.id,
    selector: 'user-manager',
    templateUrl: 'user-manager.component.html'
})
export class UserManagerComponent implements OnInit {
		users: Array<User>;
		userSub: any;
		
    constructor(private us:UserService) { }

    ngOnInit() {
    	this.userSub = this.us.userListRef.subscribe(data => this.users = data);
		}
		
		ngOnDestroy() {
    	this.userSub.unsubscribe();
		}
    
}
