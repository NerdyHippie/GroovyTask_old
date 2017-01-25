import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from "@angular/router";
import { AngularFire } from 'angularfire2';
import { AlertService } from "../../shared/_services/alert.service";
import * as firebase from 'firebase';


export interface NewPasswordModel {
	password: string
}

@Component({
    moduleId: module.id,
    selector: 'email-action',
    templateUrl: 'email-action.component.html'
})
export class EmailActionComponent implements OnInit {
		auth: any;
		mode:string;
		actionCode:string;
		apiKey:string;
		accountEmail:string;
		showPasswordForm:Boolean = false;
		model:NewPasswordModel = {password:''};
	
    constructor(
    	private af:AngularFire,
			private activatedRoute:ActivatedRoute,
			private alertService:AlertService,
		) { }

    ngOnInit():void {
    	this.auth = firebase.auth();
    	
			this.activatedRoute.queryParams.subscribe((params: Params) => {
				console.log(params);
				if (params['mode']) this.mode = params['mode'];
				if (params['oobCode']) this.actionCode = params['oobCode'];
				if (params['apiKey']) this.apiKey = params['apiKey'];
				
				this.handleAction();
			});
		}
		
		handleAction():void {
			switch (this.mode) {
				case 'resetPassword':
					// Display reset password handler and UI.
					this.handleResetPassword();
					break;
				case 'recoverEmail':
					// Display email recovery handler and UI.
					this.handleRecoverEmail();
					break;
				case 'verifyEmail':
					// Display email verification handler and UI.
					this.handleVerifyEmail();
					break;
				default:
				// Error: invalid mode.
			}
		}
	
		handleResetPassword() {
			console.log('handle ResetPassword',this.actionCode);
    	this.auth.verifyPasswordResetCode(this.actionCode).then((email:any) => {
    		this.accountEmail = email;
    		this.showPasswordForm = true;
			}).catch();
			/*var accountEmail;
			// Verify the password reset code is valid.
			auth.verifyPasswordResetCode(actionCode).then(function(email) {
				var accountEmail = email;
				
				// TODO: Show the reset screen with the user's email and ask the user for
				// the new password.
				
				
			}).catch(function(error) {
				// Invalid or expired action code. Ask user to try to reset the password
				// again.
			});*/
		}
		
		doPasswordReset(newPassword:string) {
			// Save the new password.
			this.auth.confirmPasswordReset(this.actionCode, newPassword)
				.then((resp:any) => console.log('reset complete',resp))
				.catch((error:any) => console.error('reset error',error));
				/*function(resp) {
				// Password reset has been confirmed and new password updated.
				
				// TODO: Display a link back to the app, or sign-in the user directly
				// if the page belongs to the same domain as the app:
				// auth.signInWithEmailAndPassword(accountEmail, newPassword);
			}*/
				
				/*).catch(function(error) {
				// Error occurred during confirmation. The code might have expired or the
				// password is too weak.
			});*/
		}
	
		handleRecoverEmail() {
    	
    	
			/*var restoredEmail = null;
			// Confirm the action code is valid.
			auth.checkActionCode(actionCode).then(function(info) {
				// Get the restored email address.
				restoredEmail = info['data']['email'];
				
				// Revert to the old email.
				return auth.applyActionCode(actionCode);
			}).then(function() {
				// Account email reverted to restoredEmail
				
				// TODO: Display a confirmation message to the user.
				
				// You might also want to give the user the option to reset their password
				// in case the account was compromised:
				auth.sendPasswordResetEmail(restoredEmail).then(function() {
					// Password reset confirmation sent. Ask user to check their email.
				}).catch(function(error) {
					// Error encountered while sending password reset code.
				});
			}).catch(function(error) {
				// Invalid code.
			});*/
		}
	
		handleVerifyEmail() {
			/*// Try to apply the email verification code.
			auth.applyActionCode(actionCode).then(function(resp) {
				// Email address has been verified.
				
				// TODO: Display a confirmation message to the user.
				// You could also provide the user with a link back to the app.
			}).catch(function(error) {
				// Code is invalid or expired. Ask the user to verify their email address
				// again.
			});*/
		}
    
}
