import { Injectable } from "@angular/core";

import { AngularFire,FirebaseListObservable } from 'angularfire2';

import { User } from './user.model';

@Injectable()

export class UserService {
	userRef: FirebaseListObservable<any>;
	
	constructor(private af: AngularFire) {
		this.initialize();
	}
	
	initialize():void {
		this.userRef = this.af.database.list('/users');
	}
}
