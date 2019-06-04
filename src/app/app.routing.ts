import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'users', component: UsersComponent }
];

export const routing = RouterModule.forRoot(routes);
