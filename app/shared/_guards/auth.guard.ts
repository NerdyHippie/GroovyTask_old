import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFire,AngularFireAuth,FirebaseAuthState } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
		//subject = new Subject<any>();
		
    constructor(private router: Router,private af: AngularFire,private auth: AngularFireAuth) {
    //	af.auth.subscribe(data => this.setUid(data));
    	
		}
		
		/*setUid(data:any) {
			console.log('set uid',data);
			if (data) {
				this.subject.next(data['uid']);
			} else {
				this.subject.next();
			}
		}*/
	
	/*canActivate(): Observable<boolean> {
		return this.auth
			.take(1)
			.map((authState: FirebaseAuthState) => !!authState)
			.do(authenticated => {
				if (!authenticated) this.router.navigate(['']);
			});
	}*/

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        /*if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;*/
        //console.log('canActivate');
				//let isAuthed = false;
        
				//this.subject.subscribe(val => isAuthed = val);
				
				/*if (this.subject) {
					console.log('subj exists',this.subject);
				} else {
					console.log('no subj');
				}*/
				
				//console.log('isAuthed',isAuthed);
				
        //return isAuthed;
	
				return this.af.auth.map((auth) => {
					if (!auth) {
						this.router.navigateByUrl('login');
						return false;
					}
					return true;
				}).take(1);
    }
}
