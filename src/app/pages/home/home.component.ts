/**
 * Gets all users from the UserService and makes them available to the template
 * via the 'users' property.
 */

import { Component, OnInit } from '@angular/core';

/*import { AuthenticationService, User}  from '../../services/_authentication.service';*/
import { User }         from '../../models/index';
import { UserService }  from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  // Component that only logged in users can see,
  constructor(
    /*private _service:AuthenticationService*/
    private userService: UserService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
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

  deleteUser(id: number) {
    this.userService.delete(id)
        .subscribe(() => { this.loadAllUsers() });
  }

  // get users from secure api end point
  private loadAllUsers() {
    this.userService.getAll()
        .subscribe(users => { this.users = users; });
  }
}
