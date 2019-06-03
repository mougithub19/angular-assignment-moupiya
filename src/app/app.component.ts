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
  itemdata:Items[]=[
      {
        "item_id":"1",
        "item_name":"item1"

      },
      {
        "item_id":"1",
        "item_name":"item2"

      },
      {
        "item_id":"3",
        "item_name":"item3"

      }        
    ]; 
  constructor(){}
  
}
