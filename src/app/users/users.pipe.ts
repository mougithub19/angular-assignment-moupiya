import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './users';
@Pipe({
  name: 'users'
})
export class UsersPipe implements PipeTransform {

  transform(param1: Users[], param2: string):Users[] {	
    if(!param1) return [];
		if(!param2) return param1;
		var search = param2.toLowerCase();
    return param1.filter((a) =>{
            return a.name.toLowerCase().startsWith(search);
    });
    }

}