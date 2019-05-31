import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h3>{{title}}</h3>
    <h5>Display : {{display_data}}</h5>`,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Angular Assignment';
  display_data = "Test Data";
  display_data2:
  
}
