/**
 * Root module that tells Angular how to assemble the application
 * along with metadata about the module.
 * Every component must be declared in one —and only one— Angular module.
 */

import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { FormsModule }              from '@angular/forms';            // <-- NgModel lives here
import { HttpModule }               from '@angular/http';
import { Router }                   from '@angular/router';
import { APP_BASE_HREF }            from '@angular/common';
import { LocationStrategy, HashLocationStrategy }  from '@angular/common';

// Third party imports
// ...

// Routing and application NgModules
import { AppComponent }                 from './app.component';
import { AppRoutingModule }             from './app-routing.module';   // <--- Routing Module
import { CustomMaterialModule }         from './pages/material/custom-material.module';

// Imports used to create fake backend
import { BaseRequestOptions }           from '@angular/http';
import { MockBackend, MockConnection }  from '@angular/http/testing';
import { fakeBackendProvider }          from './core/helpers/fake-backend';

// Layouts and application imports
import { HomeComponent }                            from './pages/home/home.component';
import { LoginComponent }                           from './pages/login/login.component';
import { RegisterComponent }                        from './pages/register/register.component';
import { AlertComponent, ComposeMessageComponent }  from './directives/index';
import { ToggleSwitchComponent }                    from './shared/toggle-switch/toggle-switch.component';

// Platform and environment providers/directives/pipes/services
import { APP_CONFIG, APP_DI_CONFIG }   from './core/config/index';
import { AuthGuard }                   from './core/guards/index';
import { baseHttpProvider }            from './core/helpers/base-http';
import { requestOptionsProvider }      from './core/helpers/default-request-options.service';
import { AlertService }                from './services/index';
import { AuthenticationService, UserMockService, UserRealService }  from './services/index';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,                // <-- import this before binding with [(ngModel)]
    HttpModule,                 // <-- import providers for HTTP services
    CustomMaterialModule,
    AppRoutingModule,           // <-- import your own routing configurations last
  ],
  // The 'declarations' array contains a list of application components,
  // pipes, and directives that belong to the module.
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ComposeMessageComponent,
    ToggleSwitchComponent,
  ],
  // The 'providers' array registers a singleton instance of each Service or Guard
  // so they can be available to all components of the app.
  providers: [
    { provide: APP_BASE_HREF, useValue: '/my/app' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthGuard,
    { provide: APP_CONFIG, useValue: APP_DI_CONFIG },   // APP_CONFIG service needs to be available all across the application
    baseHttpProvider,
    requestOptionsProvider,     // <-- register the provider for RequestOptions
    AlertService,
    AuthenticationService,

    // TODO: remove these providers to switch to a real-backend
    UserMockService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,

    // TODO: remove this providers to switch to a mock-backend
    // UserRealService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
