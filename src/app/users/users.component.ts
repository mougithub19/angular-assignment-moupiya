import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() {}

  ngOnInit() { 
  }

  user_data:any[]=[
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
    

    



}