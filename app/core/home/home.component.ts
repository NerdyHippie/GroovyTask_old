import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/_services/index'
import {User} from "../../shared/_models/user.model";

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
		,styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
		currentUser$: any;
		currentUser: User = {email:''};
    constructor(private userService:UserService) { }
		
    ngOnInit() {
    	//this.currentUser$ = this.;
    	this.userService.currentUser.subscribe((data:any) => {
    		this.currentUser = data;
			});
		}
		
    
    
    
}
