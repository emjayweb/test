import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

declare var firebase: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
	signInForm: FormGroup;
	private isuser: boolean;

  constructor(private authService: AuthService){
	this.signInForm = new FormGroup({
		'email': new FormControl(),
		'password': new FormControl()
	});
  }

  onSignup(){
	this.authService.signinUser(this.signInForm.value);
  }
  
  isAuth(){
	return this.authService.isAuthenticated();
  }
  
  onLogout(){
	this.authService.logout();
  }
  
  ngOnInit(){
	var self = this;
	this.authService.loggedIn.subscribe(
	retuser => this.isuser = retuser);
	
  }

}
