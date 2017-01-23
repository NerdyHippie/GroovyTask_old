import { Injectable } from "@angular/core";
import { AngularFire,FirebaseListObservable } from 'angularfire2';
import { User } from '../_models/user.model';
import * as moment from 'moment'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

export interface NewUserData {
	uid?: String
	,firstName?: String
	,lastName?: String
	,email: String
	,photoURL?: String
	,displayName?: String
	,dateCreated?: String
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
	
	loadCurrentUser(authData:any) {
		console.log('loadCurrentUser',authData);
		
		let usrData:User = {
			uid: authData.uid
			,email: authData.auth.email
			,displayName: authData.auth.displayName
			,provider: authData.provider
		};
		return this.createUserAccount(usrData);
	}
	
	createUserAccount(userData:NewUserData) {
		console.log('create account',userData);
		let uid = userData.uid;
		delete userData.uid;
		
		
		let usr = this.af.database.object('/users/'+uid);
		
		let usr$ = usr.subscribe(user => {
			console.log('usr exists?',user.$exists());
			if (!user.$exists()) {
				console.info('add dateCreated',moment().format());
				userData.dateCreated = moment().format();
			}
			usr$.unsubscribe();
			return usr.set(userData);
		});
		
	}
}
