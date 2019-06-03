import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersPipe } from './users/users.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UsersComponent, UsersPipe ],
  bootstrap:    [ AppComponent ],
 
})
export class AppModule { }
