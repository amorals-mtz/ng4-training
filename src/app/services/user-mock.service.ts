/**
 * The UserService contains a standard set of CRUD methods for managing users via the api.
 *
 * It contains a jwt() method that's used to add the JWT token from local storage
 * to the Authorization header of each http request.
 */

import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { User } from '../models/index';

@Injectable()
export class UserMockService {

  constructor (private http: Http) { }

  getAll() {
    return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
  }

  getById(_id: number) {
    return this.http.get('/api/users/' + _id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put('/api/users/' + user._id, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(_id: number) {
    return this.http.delete('/api/users/' + _id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
