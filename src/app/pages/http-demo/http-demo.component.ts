/**
 * The HttpDemo component demonstrate the Http client lib using
 * the http://httpbin.org test API, which has a number of API end points
 * for testing different HTTP actions.
 */

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { HttpbinService } from './shared/httpbin.service';

@Component({
  moduleId: module.id,
  templateUrl: './http-demo.component.html',
  providers: [ HttpbinService ]
})
export class HttpDemoComponent implements OnInit {

  private data: Observable<number[]>;
  private values: number[] = [];
  private anyErrors: boolean;
  private isComplete: boolean;

  constructor(private httpbinService: HttpbinService) { }

  ngOnInit() {
  }

  clickGET() {
    this.httpbinService.doGET();
  }

  clickPOST() {
    this.httpbinService.doPOST();
  }

  clickPUT() {
    this.httpbinService.doPUT();
  }

  clickDELETE() {
    this.httpbinService.doDELETE();
  }

  clickGETAsPromise() {
    this.httpbinService.doGETAsPromise();
  }

  clickGETAsPromiseError() {
    this.httpbinService.doGETAsPromiseError();
  }

  clickGETAsObservableError() {
    this.httpbinService.doGETAsObservableError();
  }

  clickGETWithHeaders() {
    this.httpbinService.doGETWithHeaders();
  }

  initObservable() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(42);
      }, 1000);
      setTimeout(() => {
        observer.next(43);
      }, 2000);
      setTimeout(() => {
        observer.error(new Error('Something bad happened!'));
      }, 2000);
      setTimeout(() => {
        observer.complete();
      }, 3000);
    });

    let subscription = this.data.subscribe(
      value => this.values.push( Number(value) ),
      error => this.anyErrors = true,
      () => this.isComplete = true
    );
  }
}
