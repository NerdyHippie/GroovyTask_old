import { Injectable } from '@angular/core';
import { AngularFire,AuthProviders,AuthMethods } from 'angularfire2';

import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
		uid:String;
		authObj: any;
	
    constructor(private af:AngularFire,private http: Http) {
    	console.log('consutrct authSvc');
    	//af.auth.subscribe(data => this.setAuthData(data));
    	
		}
		
		setAuthData(data:any) {
    	console.log('set auth data',data);
    	this.uid = data.uid;
    	this.authObj = data.auth;
		}
	
		login() {
			console.log('login');
			this.af.auth.login({email:'jorvis@nerdyhippie.com',password:'test123'},
				{
					provider: AuthProviders.Password,
					method: AuthMethods.Password,
				});
			console.log('login 2');
		}
		
		logout() {
			this.af.auth.logout();
		}
		
    /*login(username: string, password: string) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }*/
}
