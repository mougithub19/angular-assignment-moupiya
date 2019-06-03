import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  
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