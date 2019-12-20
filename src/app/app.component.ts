import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { FilterPipe } from './filter.pipe';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private router: Router) {}

    activatedRoute = '';

    activateRoute(activatedRoute: string) {
        this.activatedRoute = activatedRoute;
    }
}
