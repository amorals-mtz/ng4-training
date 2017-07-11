// The DefaultRequestOptions overrides default request headers
// (and other request options) to suit your application needs.
// v1.0
// Created by amorales on 07/07/17.

import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

  constructor () {
    super();

    console.debug("Overwriting request headers");

    // Set the default 'Content-Type' header to JSON
    this.headers.set('Content-Type', 'application/json');
    // this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }
}

export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };
