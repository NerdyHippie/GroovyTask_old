import { Injectable } from "@angular/core";
import { AngularFire,FirebaseListObservable } from 'angularfire2';
import { Logger } from './logger.service'
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
	
	constructor(private af: AngularFire,private logger:Logger) {
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
		let path = '/users/'+userId;
		return this.af.database.object(path);
	}
	
	loadCurrentUser(authData:any) {
		this.getUser(authData.uid).subscribe((usrData:any) => {
			this.logger.log('set currentUser',usrData);
			this.currentUser.next(usrData)
		});
		return this.currentUser
	}
	
	setUserAccount(authData:any) {
		this.logger.log('set account',authData);
		
		let providerData = authData.auth.providerData[0];
		
		let userData:any = {
			uid: authData.uid
			,email: providerData.email
			,providerId: providerData.providerId
			,lastLogin: moment().format()
			,providerUid: providerData.uid
		};
		
		/* Ended up not needing this, but it's handy to know...
		let providerMap:any = {
			'2': 'facebook'
			,'3': 'google'
			,'4': 'firebase'
		};*/
		
		if (providerData.providerId != 'password') {
			userData.displayName = providerData.displayName || null;
			userData.photoURL = providerData.photoURL || null;
		} else {
			if (authData.auth.firstName) userData.firstName = authData.auth.firstName;
			if (authData.auth.lastName) userData.lastName = authData.auth.lastName;
			// TODO: Make sure this isn't resetting on every login if user has set it
			userData.photoURL = 'http://simpleicon.com/wp-content/uploads/user1.png';
		}
		
		let usr = this.getUser(userData.uid);
				
		let usr$ = usr.subscribe((user:any) => {
			this.logger.log('usr exists?',user.$exists(),usr);
			if (!user.$exists() || !user.dateCreated) {
				this.logger.log('add dateCreated',moment().format());
				userData.dateCreated = moment().format();
				usr.set(userData);
			}
			usr$.unsubscribe();
		});
		
		return usr.update(userData);
		
	}
}
