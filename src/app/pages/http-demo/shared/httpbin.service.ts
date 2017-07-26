import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

// import 'rxjs/RX';                           // <--- import all RxJS operators, but isn't recommended for production.
import 'rxjs/add/operator/toPromise';       // <--- operators could also be added individually.

@Injectable()                               // <--- make our service available for Dependency Injection
export class HttpbinService {               // <--- preceded the `export` to make the class accessible to other components

  apiRoot = 'http://httpbin.org';   // API url

  /**
   * Injected the Http service onto own service
   * and stored it as a private property.
   */
  constructor(private http: Http) { }

  doGET() {
    console.log('* GET request');
    const url = `${this.apiRoot}/get`;

    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');

    // the `get` function returns an observable, for now we are just going
    // to subscribe to and print the response to the console.
    // we pass the query params as a second argument to the `get` function.
    this.http.get(url, {search: search})                     // 'http.get' returns an RxJS Observable.
        /** .subscribe(res => console.log(res.text())); */   // `res.text()` is whatever was returned in the body of the HTTP response.
        .subscribe(res => console.log(res.json()));          // `res.json()` convert the JSON formatted string into an object.
  }

  doPOST() {
    console.log('* POST request');
    const url = `${this.apiRoot}/post`;

    // the second parameter to `post` is not a set of query parameters
    // but instead an object which will be passed as the payload for the request.
    this.http.post(url, {moo: 'foo', goo: 'loo'})
        .subscribe(res => console.log(res.json()));
  }

  doPUT() {
    console.log('* PUT request');
    const url = `${this.apiRoot}/put`;

    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');

    // `put` function works in exactly the same way as the `post` function.
    this.http.put(url, {moo: 'foo', goo: 'loo'}, {search})
        .subscribe(res => console.log(res.json()));
  }

  doDELETE() {
    console.log('* DELETE request');
    const url = `${this.apiRoot}/delete`;

    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');

    this.http.delete(url, {search})
        .subscribe(res => console.log(res.json()));
  }

  doGETAsPromise() {
    console.log('* GET request as PROMISE');
    const url = `${this.apiRoot}/get`;
    this.http.get(url)
        .toPromise()                                         // convert the Observable to a Promise
        .then(res => console.log(res.json()));               // extract the data within the response
  }

  /**
   * Simulate errors from the test server just by performing
   * a GET on a POST endpoint using Promises.
   */
  doGETAsPromiseError() {
    console.log('* GET request as PROMISE ERROR');
    const url = `${this.apiRoot}/post`;
    this.http.get(url)
        .toPromise()
        .then(
          res => console.log(res.json()),
          msg => console.error(`Error: ${msg.status} ${msg.statusText}`) // error handler is the second argument to `then`
        );
  }

  /**
   * Simulate errors from the test server just by performing
   * a GET on a POST endpoint using an Observable.
   */
  doGETAsObservableError() {
    console.log('* GET request as OBSERVABLE ERROR');
    const url = `${this.apiRoot}/post`;
    this.http.get(url)
        .subscribe(
          res => console.log(res.json()),
          msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
        );
  }

  /**
   * HTTP headers are bits of meta-data which the browser attaches to your HTTP requests
   * when it sends them to the server.
   */
  doGETWithHeaders() {
    console.log('* GET request with custom HEADERS');

    // set a basic Authorization header with a value that is a username and password converted to base64
    let headers = new Headers();
    headers.append('Authorization', btoa('username:password'));

    // create a request options and add our headers as a property
    let opts = new RequestOptions();
    opts.headers = headers;

    const url = `${this.apiRoot}/get`;
    this.http.get(url, opts)
        .subscribe(
          res => console.log(res.json()),
          msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
        );
  }
}
