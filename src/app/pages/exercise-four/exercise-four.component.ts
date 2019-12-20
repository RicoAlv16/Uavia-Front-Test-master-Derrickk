import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-exercise-four',
  templateUrl: './exercise-four.component.html',
  styleUrls: ['./exercise-four.component.css']
})
export class ExerciseFourComponent implements OnInit {

    public users$: Observable<User[]>;

    constructor() {

    }

    ngOnInit() {
        // Request users ids then users here
    }
}
