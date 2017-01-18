import { Injectable } from "@angular/core";
import { AngularFire,FirebaseListObservable } from 'angularfire2';
import { User } from './user.model';

@Injectable()

export class UserService {
	userList$: FirebaseListObservable<any>;
	apples: String = 'Oranges';
	
	constructor(private af: AngularFire) {
		this.initialize();
	}
	
	private initialize():void {
		this.userList$ = this.af.database.list('/users');
	}
	
	getTest(input:String):String {
		return "Test " + input;
	}
	
	getUser(userId:String):any {
		//console.log('get user',userId);
		let path = '/users/'+userId;
		return this.af.database.object(path);
	}
}
