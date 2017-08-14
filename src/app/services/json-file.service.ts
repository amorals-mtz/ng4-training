/**
 * Simple example using a Service that reads some data from a JSON file.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * This class provides the JSONFile service with methods to read some data from a JSON file.
 */
@Injectable()
export class JSONFileService {

  /**
   * Creates a new JSONFileService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor (private http: Http) { }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {any[]} The Observable for the HTTP request.
   */
  getPeople(): Observable<any[]> {
    return this.http.get('/assets/data/people.json')
               /*.map((res: Response) => res.json()) */
               .map((response: Response) => { response.json(); console.log(response.json()); } )
               .catch(this.handleError);

    // TypeScript/ES6
    // .map(response => response.json())

    // ES5
    // .map(function(response){ return response.json(); })
  }

  /**
   * Handle HTTP errors.
   */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure.
    // We'd also dig deeper into the error to get a better message.
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

// api/people.json
// [{"id": 1, "name": "Brad"}, ...]
