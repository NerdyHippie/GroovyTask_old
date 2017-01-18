import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
    moduleId: module.id,
    selector: 'user-manager',
    templateUrl: 'user-manager.component.html'
})
export class UserManagerComponent implements OnInit {
		users: Array<User>;
		
    constructor(private us:UserService) { }

    ngOnInit() {
    	this.us.userRef.subscribe(data => this.users = data);
   		
		}
    
}
