import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Angular Assignment';
  display_data1:string = "Test Data";
  display_data2:string = "";
  display_data3:string = "Welcome";
  chk:boolean=true;
  display_data_fn(val:string):void{
    this.display_data2=val;
  }

  constructor(){}
  
}
