/**
 * The HomeComponent gets the current user from local storage and all users from the user service,
 * and makes them available to the template via the 'users' property.
 * @see UserService
 */

import { Component, OnInit, HostBinding } from '@angular/core';

import { slideInDownAnimation } from 'app/animations'

import { User }                              from 'app/models/index';
import { UserMockService, JSONFileService }  from 'app/services/index';

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ JSONFileService ],
  animations: [ slideInDownAnimation ]
})
export class HomeComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

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
