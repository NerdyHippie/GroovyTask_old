let envir:string;
switch(window.location.hostname) {
	case 'localhost':
	case '127.0.0.1':
	case 'groovytask-dev.firebaseapp.com':
	case 'groovytask-dev.nerdyhippie.com':
		envir = 'dev';
		console.warn('DEVELOPMENT MODE: envir is',envir);
		break;
	default:
		envir = 'prod';
		break;
}
export const environment = envir;
