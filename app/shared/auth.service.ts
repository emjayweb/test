import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user.interface';

declare var firebase: any;

@Injectable()
export class AuthService {

public loggedIn = new EventEmitter<boolean>();
isLogged(showLog: boolean){this.loggedIn.emit(showLog);}

	signinUser(user: User){
		firebase.auth().signInWithEmailAndPassword(user.email, user.password)
		.catch(function(error){
			console.log(error);
		});
	}

	isAuthenticated(){
		var user = firebase.auth().currentUser;
		if (user){return true;}
		else {return false;}
	}
	
	logout(){
		firebase.auth().signOut();
	}
	
}