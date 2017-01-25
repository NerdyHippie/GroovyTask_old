import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../shared/_services/authentication.service";

export interface ResetModel {
	email: string
}

@Component({
    moduleId: module.id,
    selector: 'reset-password',
    templateUrl: 'reset-password.component.html'
})

export class ResetPasswordComponent implements OnInit {
		model:ResetModel = {email:''};
	
    constructor(
    	private authenticationService:AuthenticationService,
			private router:Router
		) { }

    ngOnInit() { }
    
    resetPassword(model:ResetModel) {
    	console.log('reset password',model);
    	this.authenticationService.resetPassword(model.email).then((data:any) => {
    		console.log('reset data',data);
				this.router.navigate(['/login']);
			}).catch((error:any) => console.error('reset error',error));
		}
    
}
