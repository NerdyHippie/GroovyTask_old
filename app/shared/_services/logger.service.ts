import { Injectable } from '@angular/core';

@Injectable()

export class Logger {
	logs: string[] = []; // capture logs for testing
	errors: string[] = [];

	log(message: string, ...params:Array<any>) {
		this.logs.push(message);
		console.info(message,params);
	}
	
	error(message:string,...params:Array<any>) {
		this.errors.push(message);
		console.error(message,params);
	}
}
