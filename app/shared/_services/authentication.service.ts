import { Injectable } from '@angular/core';
import { AngularFire,AngularFireAuth,AuthProviders,AuthMethods } from 'angularfire2';
import { AlertService } from './alert.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
		auth:AngularFireAuth;
	
    constructor(private af:AngularFire,private usrSvc:UserService,private alertService:AlertService) {
    	this.auth = af.auth
    };
	
		loginWithEmail(username:string,password:string) {
			this.af.auth.login({email:username,password:password},
				{
					provider: AuthProviders.Password,
					method: AuthMethods.Password,
				})
				.then((authData:any) => this.handleAuthSuccess(authData))
				.catch((authError:any) => this.handleAuthError(authError));
			
			return this.af.auth;
		}
		
		loginWithFacebook() {
			this.af.auth.login(
				{
					provider: AuthProviders.Facebook,
					method: AuthMethods.Popup,
				})
				.then((authData:any) => this.handleAuthSuccess(authData))
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
				.then((authData:any) => this.handleAuthSuccess(authData))
				.catch((authError:any) => this.handleAuthError(authError));
			
			return this.af.auth;
		}
		
		handleAuthSuccess(authData:any) {
			console.log('firing handleAuthSuccess',authData);
			
			this.usrSvc.setUserAccount(authData);
			this.usrSvc.loadCurrentUser(authData);
		}
		handleAuthError(authError:any) {
			this.alertService.error(authError);
			console.error('GroovyTask: Error authenticating user',authError);
		}
		
		logout() {
			this.af.auth.logout();
			return this.af.auth;
		}
}
