import { Injectable } from "@angular/core";

import { AngularFire,FirebaseListObservable } from 'angularfire2';

import { User } from './user.model';

@Injectable()

export class UserService {
	userListRef: FirebaseListObservable<any>;
	
	constructor(private af: AngularFire) {
		console.log('construcing userService');
		this.initialize();
	}
	
	initialize():void {
		this.userListRef = this.af.database.list('/users');
	}
	
	getUser(userId:String):any {
		let path = '/users/'+userId;
		return this.af.database.object(path);
	}
}
