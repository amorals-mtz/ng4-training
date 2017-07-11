// The AppConfig file is used to store application config objects
// (like the title of the application or the address of a web API endpoint).
// It only works for Non-class dependencies like strings, functions, or objects,
// creating a token that can be easily injected into any component.
// v1.0
// Created by amorales on 10/07/17.

import { InjectionToken } from "@angular/core";

import { IAppConfig }     from "./app-config.interface";

export let APP_CONFIG = new InjectionToken< IAppConfig >( 'app.config' );

export const APP_DI_CONFIG: IAppConfig = {

  apiEndpoint: 'http://localhost:3000',

  apiUrl: '/api/v1/authenticate',
  //    '/api/v1/user/1',

  AUTH_KEY: 'ORC@GR(@dmin',

};
