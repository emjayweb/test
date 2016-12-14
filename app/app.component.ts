import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';

declare var firebase: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

constructor(private authService: AuthService){}

ngOnInit(){
	var self = this;
	var user = firebase.auth().currentUser;
	
	if (user){this.authService.isLogged(true);}
	else {this.authService.isLogged(false);}
}

}
