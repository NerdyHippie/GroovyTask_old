import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../../shared/_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    loginWithEmail() {
        this.loading = true;
        this.authenticationService.loginWithEmail(this.model.username, this.model.password)
            .subscribe(this.handleLoginSuccess.bind(this),this.handleLoginError.bind(this));
    }
    
    loginWithFacebook() {
			//this.loading = true;
			this.authenticationService.loginWithFacebook()
				.subscribe(this.handleLoginSuccess.bind(this),this.handleLoginError.bind(this));
		}
		loginWithGoogle() {
			//this.loading = true;
			this.authenticationService.loginWithGoogle()
				.subscribe(this.handleLoginSuccess.bind(this),this.handleLoginError.bind(this));
		}
		
		private handleLoginSuccess(data:any) {
    	this.router.navigate([this.returnUrl]);
		}
		private handleLoginError(error:any) {
			this.alertService.error(error);
			this.loading = false;
		}
}
