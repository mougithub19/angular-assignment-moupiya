import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h5>Display : {{display_data}}</h5>`,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Angular';
  display_data = "Test Data";
  
}
