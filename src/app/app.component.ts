import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h3>{{title}}</h3>
    <p><input type = "text" [value] = "display_data1" /></p>
    <p>Display String  : {{display_data2}}</p>`,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Angular Assignment';
  display_data1:string = "Test Data";
  display_data2:string;
  constructor(){
    this.display_data2="My name is Moupiya"
  }
  
}
