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
		users$: any;
		
    constructor(private us:UserService) { }

    ngOnInit() {
    	this.users$ = this.us.userList$.subscribe(this.bindUsers.bind(this));
		}
		
		bindUsers(data:any) {
    	console.log('binding users',data);
			this.users = data
		}
		
		ngOnDestroy() {
    	this.users$.unsubscribe();
		}
    
}
