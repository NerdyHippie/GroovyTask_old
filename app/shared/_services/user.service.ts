import { Injectable } from "@angular/core";
import { AngularFire,FirebaseListObservable } from 'angularfire2';
import { User } from '../_models/user.model';
import * as moment from 'moment'
import { ReplaySubject } from 'rxjs/ReplaySubject';
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
	currentUser: ReplaySubject<any> = new ReplaySubject(1);
	
	constructor(private af: AngularFire) {
		this.initialize();
	}
	
	private initialize():void {
		this.userList$ = this.af.database.list('/users');
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
		
		this.getUser(authData.uid).subscribe((usrData:any) => {
			console.log('set currentUser',usrData);
			this.currentUser.next(usrData)
		});
		/*let usrData:User = {
			uid: authData.uid
			,email: authData.auth.email
			,displayName: authData.auth.displayName
			,provider: authData.provider
		};*/
		
		/*if (authData.provider == "1") {
			console.log('provider is 1')
			delete usrData.displayName;
			
		}*/
		return this.currentUser
	}
	
	setUserAccount(authData:any) {
		console.log('set account',authData);
		
		let providerData = authData.auth.providerData[0]
		
		let userData:any = {
			uid: authData.uid
			,email: providerData.email
			,providerId: providerData.providerId
			,lastLogin: moment().format()
			,providerUid: providerData.uid
		};
		
		let providerMap:any = {
			'3': 'google'
			,'4': 'firebase'
		};
		
		if (providerData.providerId != 'password') {
			userData.displayName = providerData.displayName || null;
			userData.photoURL = providerData.photoURL || null;
		} else {
			if (authData.auth.firstName) userData.firstName = authData.auth.firstName;
			if (authData.auth.lastName) userData.lastName = authData.auth.lastName;
		}
		
		let usr = this.getUser(userData.uid);
				
		let usr$ = usr.subscribe((user:any) => {
			console.log('usr exists?',user.$exists(),usr);
			if (!user.$exists() || !user.dateCreated) {
				console.info('add dateCreated',moment().format());
				userData.dateCreated = moment().format();
				usr.set(userData);
			}
			usr$.unsubscribe();
		});
		
		return usr.update(userData);
		
	}
}
