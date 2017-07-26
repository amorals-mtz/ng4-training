/**
 * Simple example using a Service that reads some data from a JSON file.
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JSONFileService {

  constructor (private http: Http) { }

  getPeople() {
    return this.http.get('assets/data/people.json')
      .map(response => response.json());

    // TypeScript/ES6
    // .map(response => response.json())

    // ES5
    // .map(function(response){ return response.json(); })
  }
}

// api/people.json
// [{"id": 1, "name": "Brad"}, ...]
