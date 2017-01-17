import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(private af: AngularFire) { }
			
    info: any;
    ref: FirebaseObjectObservable<any>;
    ngOnInit() {
    	this.ref = this.af.database.object('/');
    	this.ref.subscribe(data => this.info = data);
    	
		}
    
}
