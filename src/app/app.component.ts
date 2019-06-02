import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h3>{{title}}</h3>
    <div class="label">Property Binding </div>
    <div class="display_container"><input type = "text" [value]="display_data1" /></div>
    <p>Event Binding : <input type = "text" (input)="display_data_fn($event.target.value)" /></p>
    <p>Message : {{ display_data2 }} </p>`,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Angular Assignment';
  display_data1:string = "Test Data";
  display_data2:string = "";
  display_data_fn(val:string):void{
    this.display_data2=val;
  }
  constructor(){}
  
}
