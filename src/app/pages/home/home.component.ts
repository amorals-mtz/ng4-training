/**
 * The HomeComponent gets the current user from local storage and all users from the user service,
 * and makes them available to the template via the 'users' property.
 * @see UserService
 */

import { Component, OnInit } from '@angular/core';

import { User }                              from '../../models/index';//'app/models/user/index';
import { UserMockService, JSONFileService }  from '../../services/index';//'app/services/index';

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  providers: [ JSONFileService ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  people: any[] = [];

  // Component that only logged in users can see.
  constructor (
    private userService: UserMockService,
    private localdataService: JSONFileService
  ) {
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

    //
    this.loadLocalPersons();
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
        .subscribe(
          users => { this.users = users; }
        );
  }

  // get ...
  private loadLocalPersons() {
    this.localdataService.getPeople()
        .subscribe(
          people => this.people = people,
          error => console.error('Error: ' + error),
          () => console.log('JSON file loaded.')
        );
  }
}
