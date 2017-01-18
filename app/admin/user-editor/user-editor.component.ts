import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
    moduleId: module.id,
    selector: 'user-editor',
    templateUrl: 'user-editor.component.html'
})
export class UserEditorComponent implements OnInit {
  editUser: User;
	id: Number;
	sub: any;
	
	constructor(private route:ActivatedRoute,private us:UserService) { }
	
  ngOnInit() {
		this.sub = this.route.params.subscribe(params => this.id = params['id']);
	}
	
	ngOnDestroy() {
		this.sub.unsubscribe();
	}
    
}
