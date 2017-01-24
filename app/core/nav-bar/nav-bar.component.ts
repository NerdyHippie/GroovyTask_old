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
   	}
    
    toggleCollapse() {
    	this.isCollapsed = !this.isCollapsed;
		}
    
		collapseNav() {
    	this.isCollapsed = true;
		}
		
		logout() {
			let returnUrl:string = this.router.routerState.snapshot.url;
			
			this.router.navigate(['/logout'], { queryParams: { returnUrl: returnUrl }});
			this.collapseNav();
		}
}
