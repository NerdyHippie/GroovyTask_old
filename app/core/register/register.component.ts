import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

import { UserService,AlertService } from '../../shared/_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private af: AngularFire,
        private alertService: AlertService,
				private usrSvc: UserService
		) { }

    register(f:any) {
			console.log('firing register',f);
    	if (f.valid) {
    		console.log('form is valid');
				this.loading = true;
				let regData = {
					email: this.model.email
					,password: this.model.password
				};
				this.af.auth.createUser(regData)
					.then(this.registerSuccess.bind(this),this.registerFailure.bind(this));
			} else {
    		console.log('not valid');
			}
    	
    }
    
    private registerSuccess(data:any) {
			console.log('firebase reg success!',data);
			this.model.uid = data.uid;
			delete this.model.password;
			
			this.usrSvc.createUserAccount(this.model).then(() => {
				console.log('acct created, reg finished');
				this.alertService.success('Registration successful', true);
				this.router.navigate(['/']);
			});
			
		}
		private registerFailure(error:any) {
			this.alertService.error(error);
			this.loading = false;
		}
}
