import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
@Injectable()
export class UsersService {
  /*
  private path = "../assets/users.json";
 
  constructor(private _http: HttpClient) { }

  getuserdata() {
    return this._http.get(this.path).map(
      response=>{return response;}
      );
  }
  */

  getuserdata():any[]{
    return[
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
}