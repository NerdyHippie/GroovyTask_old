import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/_services/authentication.service';

@Component({
    moduleId:    module.id,
    selector:    'nav-bar',
    templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {
		public isCollapsed:Boolean = true;
	
    constructor(private authSvc: AuthenticationService,private router: Router) { }

    ngOnInit() { }
    
    toggleCollapse() {
    	this.isCollapsed = !this.isCollapsed;
		}
    
		collapseNav() {
    	this.isCollapsed = true;
		}
		
		logout() {
    	console.log('logout from navbar');
    	this.authSvc.logout().subscribe(auth => { console.log('auth changed',auth);
    	if (!auth) {
    		console.log('bounce to admin');
    		this.router.navigate(['/admin']);
    		this.collapseNav();
			} })
			
		}
}
