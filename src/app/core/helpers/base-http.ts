// The BaseHttp service extends the default Http service to add the following features:
// - Automatically adds the JWT token (if logged in) to the Http authorization header of all requests;
// - Prepends request urls with the server endpoint from the AppConfig file;
// - Intercepts 401 unauthorized responses from the api to automatically logout the user.
// v1.0
// Created by amorales on 05/07/17.

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ConnectionBackend, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Headers } from "@angular/http";

import { appConfig } from '../config/index';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class BaseHttp extends Http {

  constructor (backend: ConnectionBackend, defaultOptions: RequestOptions) {
    console.log('Init Http Constructor: ' + appConfig.apiUrl);
    super(backend, defaultOptions);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('Starting GET Http service.');
    return super.get(appConfig.apiUrl + url, this.addJwt(options))
        .catch(this.handleError);
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('Starting POST Http service.');
    return super.post(appConfig.apiUrl + url, body, this.addJwt(options))
        .catch(this.handleError);
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('Starting PUT Http service.');
    return super.put(appConfig.apiUrl + url, body, this.addJwt(options))
        .catch(this.handleError);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('Starting DELETE Http service.');
    return super.delete(appConfig.apiUrl + url, this.addJwt(options))
        .catch(this.handleError);
  }

  // private helper methods

  private addJwt(options?: RequestOptionsArgs): RequestOptionsArgs {
    // ensure request options and headers are not null
    options = options || new RequestOptions();
    options.headers = options.headers || new Headers();

    // add authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let tokenValue = 'Bearer ' + currentUser.token;
      console.log("Token: [" + tokenValue + "]");
      options.headers.append('Authorization', tokenValue);
    }

    return options;
  }

  // Implement a method to handle errors if any
  private handleError(error: any) {
    console.error('An error occurred', error);

    if (error.status === 401) {
      // 401 unauthorized response so log user out of client
      window.location.href = '/login';
    }
    // return Observable.throw(error._body);
    return Observable.throw(error.json().error || ' Server error.');
  }
}

export function baseHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
  return new BaseHttp(xhrBackend, requestOptions);
}

export let baseHttpProvider = {
  provide: Http,
  useFactory: baseHttpFactory,
  deps: [XHRBackend, RequestOptions]
};
