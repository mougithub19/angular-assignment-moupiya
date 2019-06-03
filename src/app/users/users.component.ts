import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Users } from './users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() {}

  ngOnInit() { 
  }
  nameFilter:string="";
  today_date: Date = new Date();
  userdata:Users[]=[
      {
        "id":"1",
        "name":"User1",
        "location":"location1",

      },
      {
        "id":"2",
        "name":"User2",
        "location":"location2",

      },
      {
        "id":"3",
        "name":"User3",
        "location":"location3",

      }        
    ];
    @Input() countryname:string;
    emitEvent(val:string):void{ 
      this.itemclicked.emit(val);
    }
    @Output() itemclicked:EventEmitter<string>=new EventEmitter<string>();

    

    



}

