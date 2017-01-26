import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/_services/user.service';
import { User } from '../../shared/_models/user.model';

@Component({
    moduleId:    module.id,
    selector:    'link-account',
    templateUrl: 'link-account.component.html'
})
export class LinkAccountComponent implements OnInit {
		currentUser:User;
	
    constructor(private userService:UserService) { }

    ngOnInit() {
			this.userService.currentUser.subscribe((data:any) => this.currentUser = data);
		}
		
		
    
}
