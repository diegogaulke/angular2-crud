import { Component, OnInit } from '@angular/core';
import { User } from './shared/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: User[] = [
    { id: 1, name: "Diego Bernardes Gaulke" },
    { id: 2, name: "Betina Gaulke" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
