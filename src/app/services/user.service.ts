import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private users = {
        'aa': new User('Marine'),
        'bb': new User('Clément'),
        'cc': new User('Sarra'),
        'dd': new User('Tanguy'),
        'ee': new User('Michael')
    };

    constructor() {
    }

    // Do not edit this function
    requestUsers(): Observable<User[]> {
        return new Observable((observer) => {
            // return users after 1sec
            setTimeout(() => observer.next(Object.values(this.users)), 1000);
        });
    }

    // Do not edit this function
    requestUserIds(): Observable<string[]> {
        return new Observable((observer) => {
            // return ids after 1sec
            setTimeout(() => observer.next(Object.keys(this.users)), 1000);
        });
    }

    // Do not edit this function
    requestUsersByIds(ids): Observable<User[]> {
        return new Observable((observer) => {
            // return users after 1sec
            setTimeout(() => {
                const res: User[] = [];

                ids.forEach((id) => {
                    if (this.users.hasOwnProperty(id)) {
                        res.push(this.users[id]);
                    }
                });

                return observer.next(res);
            }, 1000);
        });
    }
}
