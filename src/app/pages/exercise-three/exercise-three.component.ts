import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book.model';

@Component({
    selector: 'app-exercise-three',
    templateUrl: './exercise-three.component.html',
    styleUrls: ['./exercise-three.component.css']
})
export class ExerciseThreeComponent implements OnInit {

    public library = [];
    public book: Book;

    constructor() {
    }

    ngOnInit() {
        // request library here
    }

    selectBook(id: number) {
        // Request book here
    }
}
