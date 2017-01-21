import { Injectable } from '@angular/core';
import { AngularFire,AuthProviders,AuthMethods } from 'angularfire2';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
		auth:any;
	
    constructor(private af:AngularFire) { this.auth = af };
	
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
				});
			
			return this.af.auth;
		}
		loginWithGoogle() {
			console.log('login with Google');
			this.af.auth.login(
				{
					provider: AuthProviders.Google,
					method: AuthMethods.Popup,
				});
			
			return this.af.auth;
		}
		
		logout() {
			this.af.auth.logout();
			return this.af.auth;
		}
}
