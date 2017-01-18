import { Component } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
	moduleId:    module.id,
	selector: 'groovy-task-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
	,providers: [ UserService ]
})
export class AppComponent  {
	name = 'Angular';
}
