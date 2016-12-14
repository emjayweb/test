import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

private id: string;

  constructor( private _activatedRoute: ActivatedRoute ){ 
	_activatedRoute.params.subscribe( params =>{
		this.id = params['uid/'];
	});
  }

  ngOnInit() {
  }

}