import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/user.model';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], cle: string): User[] {
     
     // return empty array if array is falsy
     if (!users) { return []; }

     // return the original array if search text is empty
     if (!cle) { return users; }
 
     // convert the searchText to lower case
     cle = cle.toLowerCase();
 
     // return the filtered array
     return users.filter(user => {
       if (user) {
         return user.name.toLowerCase().includes(cle.toLowerCase());
       }
       return false;
     });
      

  }

}
