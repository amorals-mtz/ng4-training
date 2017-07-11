// The BaseHttp service extends the default Http service to intercept all calls
// and add the following features:
// - Automatically adds the JWT token (if logged in) to the Http authorization header of all requests;
// - Prepends request urls with the server endpoint from the AppConfig file;
// - Intercepts 401 unauthorized responses from the api to automatically logout the user.
// v1.0
// Created by amorales on 05/07/17.

import { Injectable, Inject } from '@angular/core';
import { Http, Response }     from '@angular/http';
import { ConnectionBackend, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Headers } from "@angular/http";

import { APP_CONFIG, IAppConfig }  from '../config/index';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class BaseHttp extends Http {
  apiEndpoint: string = "";

  constructor (
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    @Inject(APP_CONFIG) config: IAppConfig) {        // <--- Inject the configuration object into any constructor that needs it

      super(backend, defaultOptions);

      console.debug("Here it's the Oauth's Key: " + config.OAUTH_KEY);
      console.debug('Init Http Constructor: ' + config.apiEndpoint);
      this.apiEndpoint = config.apiEndpoint;
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.debug('Starting GET Http service.');
    return super.get(this.apiEndpoint + url, this.addJwt(options))
        .catch(this.handleError);
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    console.debug('Starting POST Http service.');
    return super.post(this.apiEndpoint + url, body, this.addJwt(options))
        .catch(this.handleError);
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    console.debug('Starting PUT Http service.');
    return super.put(this.apiEndpoint + url, body, this.addJwt(options))
        .catch(this.handleError);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.debug('Starting DELETE Http service.');
    return super.delete(this.apiEndpoint + url, this.addJwt(options))
        .catch(this.handleError);
  }

  //----------------------------------
  //  private helper methods
  //----------------------------------

  private addJwt(options?: RequestOptionsArgs): RequestOptionsArgs {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    // ensure request options and headers are not null
    options = options || new RequestOptions();
    options.headers = options.headers || new Headers();
    options.headers.append('Content-Type', 'application/json');

    // add authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let tokenValue = 'Bearer ' + currentUser.token;
      options.headers.append('Authorization', tokenValue);

      console.debug("Client Token, value: [" + tokenValue + "]");
    }

    return options;
  }

  // Implement a method to handle errors if any
  private handleError(error: any) {
    console.error('An error occurred', error);

    if (error.status === 401) {
      // 401 unauthorized response so log user out of client
      window.location.href = '/login';
    } else if (error.status === 403) {
      //
    }
    // return Observable.throw(error._body);
    return Observable.throw(error.json().error || ' Server error.');
  }
}

export function baseHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, config: IAppConfig): Http {
  return new BaseHttp(xhrBackend, requestOptions, config);
}

export let baseHttpProvider = {
  provide: Http,
  useFactory: baseHttpFactory,
  deps: [XHRBackend, RequestOptions, APP_CONFIG]
};
