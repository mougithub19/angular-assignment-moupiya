import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UsersService } from './users.service';
import { Users } from './users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userdata: any[];
  constructor(public _usersService: UsersService) {}
  
  /*
  title : string = "Http Service Demo";
  userdata: any;
  constructor(private _usersService: UsersService) {
  }ngOnInit() {
    this._usersService.getuserdata().subscribe(userdata => this.userdata = userdata);
  }*/
  ngOnInit() { 
     this.userdata = this._usersService.getuserdata();
  }
  

  
  nameFilter:string="";
  today_date: Date = new Date();
  /*userdata:Users[]=[
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
    ];*/
    @Input() countryname:string;
    emitEvent(val:string):void{ 
      this.itemclicked.emit(val);
    }
    @Output() itemclicked:EventEmitter<string>=new EventEmitter<string>();

    

    



}

