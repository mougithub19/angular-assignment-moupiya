import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user_data:any[]=[
      {
        "id":"1",
        "name":"User1",
        "location":"User1",

      }   
    ];



}