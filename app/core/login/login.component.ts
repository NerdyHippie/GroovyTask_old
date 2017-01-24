import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../../shared/_services/index';
import { Subscription} from "rxjs";

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model:any = {};
    loading:Boolean = false;
    returnUrl: string;
    loginSubscription$: Subscription;

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
        this.loginSubscription$ = this.authenticationService.auth.subscribe(this.handleLoginSuccess.bind(this),this.handleLoginError.bind(this));
    }
    
    ngOnDestroy() {
    	this.loginSubscription$.unsubscribe();
		}

    loginWithEmail() {
        this.loading = true;
        this.authenticationService.loginWithEmail(this.model.username, this.model.password);
            
    }
    
    loginWithFacebook() {
			this.loading = true;
			this.authenticationService.loginWithFacebook();
				//.subscribe(this.handleLoginSuccess.bind(this),this.handleLoginError.bind(this));
		}
		loginWithGoogle() {
			this.loading = true;
			this.authenticationService.loginWithGoogle();
				//.subscribe(this.handleLoginSuccess.bind(this),this.handleLoginError.bind(this));
		}
		
		private handleLoginSuccess(data:any) {
    	console.log('login success, data = ',data);
    	this.router.navigate([this.returnUrl]);
			this.loading = false;
		}
		private handleLoginError(error:any) {
    	console.log('login error', error);
			this.alertService.error(error);
			this.loading = false;
		}
}
