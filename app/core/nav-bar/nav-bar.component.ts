import { Component, OnInit } from '@angular/core';

@Component({
    moduleId:    module.id,
    selector:    'nav-bar',
    templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {
		public isCollapsed:Boolean = true;
	
    constructor() { }

    ngOnInit() { }
    
    toggleCollapse() {
    	console.log('toggle');
    	this.isCollapsed = !this.isCollapsed;
		}
    
}
