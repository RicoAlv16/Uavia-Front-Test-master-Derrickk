import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import { FilterPipe } from '../../filter.pipe';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.css']
})
export class UsersSearchComponent implements OnInit {

  @Input() users: User[];
  cle: string;
  constructor() { }

  ngOnInit() {
  }

}
