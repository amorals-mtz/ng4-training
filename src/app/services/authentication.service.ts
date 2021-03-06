/**
 * The AuthenticationService is used to login and logout of the application,
 * to login it posts the users credentials to the api and checks the response for a JWT token,
 * if there is one it means authentication was successful so the user details are added to local storage.
 *
 * The logged in user details are stored in local storage so the user will stay logged in
 * if they refresh the browser and also between browser sessions until they logout.
 *
 * If you don't want the user to stay logged in between refreshes or sessions the behaviour
 * could easily be changed by storing user details somewhere less persistent such as session storage or
 * in a property of the authentication service.
 *
 * The token property is used by other services in the application to set the authorization header
 * of http requests made to secure api endpoints.
 */

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// import 'rxjs/RX';                           // <--- import all RxJS operators, but isn't recommended for production.
import 'rxjs/add/operator/catch';           // <--- operators could also be added individually.
import 'rxjs/add/operator/map';

@Injectable()                               // <--- make our service available for Dependency Injection
export class AuthenticationService {        // <--- preceded the `export` to make the class accessible to other components

  /**
   * Injected the Http service onto own service
   * and stored it as a private property.
   */
  constructor (private http: Http) { }

  // Implement a method to [...]
  login(username: string, password: string) {
    /*var body = `username=${username}&password=${password}`;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');*/

    let body = JSON.stringify({ username: username, password: password });

    return this.http
        // used for mock-backend
        .post('/api/authenticate', body)
        // used for real-backend
        /*.post('/users/authenticate', { username: username, password: password })*/
        .map(this.extractData)        // <--- Observable.map() transform the response in a format easily consumable by the observer.
        .catch(this.handleError);
  }

  // Implement a method to [...]
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  // ----------------------------------
  //  private helper methods
  // ----------------------------------

  private extractData (response: Response) {
    // let body = res.json();
    // return body.data || { };

    // login successful if there's a jwt token in the response
    let user = response.json();
    if (user && user.token) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    // used for real-backend
    /*return user;*/
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    // transforms the error into a developer-friendly message
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
