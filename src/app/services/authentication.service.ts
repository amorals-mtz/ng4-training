/**
 * The AuthenticationService is used to login and logout of the application,
 * to login it posts the users credentials to the api and checks the response for a JWT token,
 * if there is one it means authentication was successful so the user details are added to local storage.
 *
 * The token property is used by other services in the application to set the authorization header
 * of http requests made to secure api endpoints.
 */

import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';                               // <-- adds all the operators to Observable (map, catch, etc).
import 'rxjs/add/operator/catch';               // <-- operators could also be added individually.
import 'rxjs/add/operator/map';

@Injectable()                                   // <-- make our service available for Dependency Injection
export class AuthenticationService {            // <-- preceded the `export` to make the class accessible to other components

  constructor (private http: Http) { }

  // Implement a method to [...]
  login(username: string, password: string) {

    let body = JSON.stringify(
      { username: username, password: password }
    );

    return this.http
        // used for mock-backend
        .post('/api/authenticate', body)
        // used for real-backend
        /*.post('/users/authenticate', { username: username, password: password })*/
        .map((response: Response) => {          // <--- Observable.map() transform the response in a format easily consumable by the observer.

          // login successful if there's a jwt token in the response
          let user = response.json();
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
          }

          // used for real-backend
          /*return user;*/
        });
  }

  // Implement a method to [...]
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
