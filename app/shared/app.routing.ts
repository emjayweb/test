import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';

const APP_ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'profile/:id', component: ProfileComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);