/*
import { Injectable }  from '@angular/core';
import { Router }      from '@angular/router';

export class User {
  constructor(
    public email: string,
    public password: string
  ) { }
}

// let’s pretend this data is coming from the database
var users = [
  new User('admin@mail.com','admin'),
  new User('user@mail.com','user')
];

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router
  ) { }

  checkCredentials() {
    // If the user is not logged in, it will be redirected to the login screen.
    if (localStorage.getItem("user") === null) {
      // store the authenticated user
      this._router.navigate(['Login']);
    }
  }

  login(user) {
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser) {
      localStorage.setItem("user", authenticatedUser);
      this._router.navigate(['Home']);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }

}
*/
