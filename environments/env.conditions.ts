let envir:string;
switch(window.location.hostname) {
	case 'localhost':
	case '127.0.0.1':
	case 'groovytask-dev.firebaseapp.com':
	case 'groovytask-dev.nerdyhippie.com':
		envir = 'dev';
		break;
	default:
		envir = 'prod';
		break;
}
console.log('envir is',envir);
export const environment = envir;
