import { Injectable } from '@angular/core';
import { AngularFire,AngularFireAuth,AuthProviders,AuthMethods } from 'angularfire2';
import { UserService } from './user.service';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
		auth:AngularFireAuth;
	
    constructor(private af:AngularFire,private usrSvc:UserService) { this.auth = af.auth };
	
		loginWithEmail(username:string,password:string) {
			this.af.auth.login({email:username,password:password},
				{
					provider: AuthProviders.Password,
					method: AuthMethods.Password,
				});
			
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
			console.log(authData);
			this.usrSvc.loadCurrentUser(authData);
		}
		handleAuthError(authError:any) {
			console.log(authError);
			alert('error logging into facebook');
		}
		
		logout() {
			this.af.auth.logout();
			return this.af.auth;
		}
}
