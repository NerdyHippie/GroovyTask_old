import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFire,AngularFireAuth,AuthProviders,AuthMethods } from 'angularfire2';
import { AlertService } from './alert.service';
import { UserService } from './user.service';
import { Logger } from "./logger.service";
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
		auth:AngularFireAuth;  // Store the AngularFire auth in a service variable so that we can use it in components, etc.
	
    constructor(private af:AngularFire,private router:Router,private usrSvc:UserService,private alertService:AlertService,private logger:Logger) {
    	this.auth = af.auth;
    	
			af.auth.subscribe((authData) => {
				logger.log('authData in authenticationService',authData);
				if (authData) {
					this.handleAuthSuccess(authData);
				} else {
					logger.log('nav to logout');
					let returnUrl:string = this.router.routerState.snapshot.url;
					
					this.router.navigate(['/logout'], { queryParams: { returnUrl: returnUrl }});
				}
			})
    };
	
		loginWithEmail(username:string,password:string) {
			this.af.auth.login({email:username,password:password},
				{
					provider: AuthProviders.Password,
					method: AuthMethods.Password,
				})
				//.then((authData:any) => { console.log('fire authsuccess from loginWIthEmail'); this.handleAuthSuccess(authData)})
				.catch((authError:any) => this.handleAuthError(authError));
			
			return this.af.auth;
		}
		
		loginWithFacebook() {
			this.af.auth.login(
				{
					provider: AuthProviders.Facebook,
					method: AuthMethods.Popup,
				})
				//.then((authData:any) => this.handleAuthSuccess(authData))
				.catch((authError:any) => this.handleAuthError(authError));
			
			return this.af.auth;
		}
		loginWithGoogle() {
			console.log('login with Google');
			this.af.auth.login(
				{
					provider: AuthProviders.Google,
					method: AuthMethods.Popup,
				})
				//.then((authData:any) => this.handleAuthSuccess(authData))
				.catch((authError:any) => this.handleAuthError(authError));
			
			return this.af.auth;
		}
		
		handleAuthSuccess(authData:any) {
			this.logger.log('firing handleAuthSuccess',authData);
			
			this.usrSvc.setUserAccount(authData);
			this.usrSvc.loadCurrentUser(authData);
		}
		handleAuthError(authError:any) {
			this.alertService.error(authError);
			this.logger.error('GroovyTask: Error authenticating user',authError);
		}
		
		logout() {
			this.af.auth.logout();
			return this.af.auth;
		}
}
