import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h3>{{title}}</h3>
    <div class="label_hd">Property Binding </div>
    <div class="module"><input type = "text" [value]="display_data1" /></div>
    <div class="label_hd">Event Binding </div>
    <div class="module"><input type = "text" (input)="display_data_fn($event.target.value)" /></div>
    <div class="label_hd">Message : {{ display_data2 }} </div>
    <div class="label_hd">Two Way Data Binding </div>
    `,
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
