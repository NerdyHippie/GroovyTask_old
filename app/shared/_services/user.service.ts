import { Injectable } from "@angular/core";
import { AngularFire,FirebaseListObservable } from 'angularfire2';
import { User } from '../_models/user.model';

export interface NewUserData {
	uid: String
	,firstName?: String
	,lastName?: String
	,email: String
	,photoUrl?: String
	,displayName?: String
}

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
	
	cleanObj(input:Object) {
		let invalidProps = ['$key','$exists'];
		for (let prop of invalidProps) {
			delete input[prop];
		}
		return input;
	}
	
	getUser(userId:String):any {
		//console.log('get user',userId);
		let path = '/users/'+userId;
		return this.af.database.object(path);
	}
	
	createUserAccount(userData:NewUserData) {
		let uid = userData.uid;
		delete userData.uid;
		
		let usr = this.af.database.object('/users/'+uid);
		return usr.set(userData);
	}
}
