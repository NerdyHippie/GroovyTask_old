import { AuthProviders, AuthMethods } from 'angularfire2';

export const FirebaseConfig = {
	apiKey: "AIzaSyBWADn6B5T7XkKzQn-g44hl5W7uACeOs38",
	authDomain: "groovytask-dev.firebaseapp.com",
	databaseURL: "https://groovytask-dev.firebaseio.com",
	storageBucket: "groovytask-dev.appspot.com",
	messagingSenderId: "288386457025"
};

const myFirebaseAuthConfig = {
	provider: AuthProviders.Google,
	method: AuthMethods.Redirect
};
