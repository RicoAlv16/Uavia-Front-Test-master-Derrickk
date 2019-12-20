import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import { FilterPipe } from '../../filter.pipe';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.css']
})
export class ExerciseOneComponent implements OnInit {

    public users: User[] = [];
    cle: string;
    constructor() {

    }

    ngOnInit() {
        // Populate users
        this.users = [
            new User('Luc'),
            new User('Mahmoud'),
            new User('Léa'),
            new User('Elias'),
            new User('Raphaelle')
        ];
    }

}
