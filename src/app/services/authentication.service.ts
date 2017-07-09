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
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor (private http: Http) { }

  login(username: string, password: string) {

    // used for mock-backend
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))

    // used for real-backend
    /*return this.http.post('/users/authenticate', { username: username, password: password })*/
        .map((response: Response) => {
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

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
