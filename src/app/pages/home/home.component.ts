/**
 * The HomeComponent gets the current user from local storage and all users from the user service,
 * and makes them available to the template via the 'users' property.
 * @see UserService
 */

import { Component, OnInit } from '@angular/core';

import { User }             from '../../models/index';//'app/models/user/index';
import { UserMockService }  from '../../services/index';//'app/services/index';

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  // Component that only logged in users can see.
  constructor(private userService: UserMockService) {
    // get the current user from local storage
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    // get all users from the UserService
    this.loadAllUsers();

    /*
    // Every time someone tries to access, check if the user is logged in otherwise
    // he/she is redirected to the login screen.
    this._service.checkCredentials();
    */
  }

  /*logout() {
    this._service.logout();
  }*/

  deleteUser(_id: number) {
    this.userService.delete(_id)
        .subscribe(() => { this.loadAllUsers() });
  }

  // get users from secure api end point
  private loadAllUsers() {
    this.userService.getAll()
        .subscribe(users => { this.users = users; });
  }
}
