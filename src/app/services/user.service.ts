/**
 * The UserService contains a method for getting all users from the api,
 * to login it posts the users credentials to the api and checks the response for a JWT token,
 * if there is one it means authentication was successful so the user details are added to local storage
 * and the token saved to the AuthenticationService.token property. The token property is used
 * by other services in the application to set the authorization header of http requests made
 * to secure api endpoints.
 */

import { Injectable }                               from '@angular/core';
import { Http, Headers, RequestOptions, Response }  from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './index';
import { User }                  from '../models/index';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) { }

  getUsers(): Observable<User[]> {
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.get('/api/users', options)
        .map((response: Response) => response.json());
  }
}
