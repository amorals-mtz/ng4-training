/**
 * The UserService contains a standard set of CRUD methods for managing users via the api.
 */

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { User } from 'app/shared/models/index';

@Injectable()
export class UserRealService {

  constructor (private http: Http) { }

  getAll() {
    return this.http.get('/users')
        .map((response: Response) => response.json())
        .delay(2000)    // <--- delay subscription, in this case it waits 2 seconds.
        .retry(3);      // <--- define a number of times to retry the request, useful when expecting network connectivity issues.
  }

  getById(_id: number) {
    return this.http.get('/users/' + _id)
        .map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post('/users/register', user);
  }

  update(user: User) {
    return this.http.put('/users/' + user._id, user);
  }

  delete(_id: number) {
    return this.http.delete('/users/' + _id);
  }
}
