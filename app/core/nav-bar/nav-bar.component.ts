import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { AuthenticationService } from '../../shared/_services/authentication.service';

@Component({
    moduleId:    module.id,
    selector:    'nav-bar',
    templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {
		private loggedIn:Boolean = false;
		public isCollapsed:Boolean = true;
	
    constructor(private authSvc: AuthenticationService,private af:AngularFire,private router: Router) { }

    ngOnInit() {
    	this.af.auth.subscribe(auth => this.loggedIn = auth ? true : false);
    	//this.setLoggedIn.bind(this)
		}
		
		/*setLoggedIn(auth:any) {
    	console.log('set this.loggedIn in navbar',auth);
			this.loggedIn = auth ? true : false;
		}*/
    
    toggleCollapse() {
    	this.isCollapsed = !this.isCollapsed;
		}
    
		collapseNav() {
    	this.isCollapsed = true;
		}
		
		logout() {
			//console.log('navbar logout',this.route,this.route.url);
			let returnUrl:any = this.router.routerState.snapshot.url;
			//this.route.url //.take(1).subscribe( (e) => returnUrl = e );
			console.log('routerState.stanpshot',returnUrl);
    	// TODO: Maybe we chage this up so that it is a route - /logout and we can get the previous route parants, do the logout, then redirect back to prior route params (which should produce login with a valid returnUrl to page you were viewing)
			this.router.navigate(['/logout'], { queryParams: { returnUrl: returnUrl }});
			this.collapseNav();
			/*
			*
			* Get current URL from router here (in navbar)
			* This logout() should navigate to /logout and pass returnURL as queryParam (just like in login)
			* CollapseNav() after or before?  does it matter?  try after first for readability
			*
			* LogoutComponent will then do the firebase logout, then send the user back to the returnUrl it got in the queryParams
			*
			* */
			
    	/*console.log('logout from navbar');
    	this.authSvc.logout().subscribe(auth => { console.log('auth changed',auth);
    	if (!auth) {
    		console.log('bounce to admin');
    		this.router.navigate(['/admin']);
    		this.collapseNav();
			} })*/
			
		}
}
