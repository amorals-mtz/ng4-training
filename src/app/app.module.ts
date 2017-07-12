/**
 * Root module that tells Angular how to assemble the application
 * along with metadata about the module.
 * Every component must be declared in one —and only one— Angular module.
 *
 * @preferred
 */

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';                       // <-- NgModel lives here

// Platform and environment providers/directives/pipes
import { AppComponent }                from './app.component';
import { AppRoutingModule }            from './app-routing.module';   // <--- Routing Module
import { APP_CONFIG, APP_DI_CONFIG }   from './core/config/index';

// Imports used to create fake backend
import { BaseRequestOptions }          from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { fakeBackendProvider }         from './core/helpers/fake-backend';

// Imports for custom modules
import { CustomMaterialModule }        from './pages/material/custom-material.module';

// Layouts
import { HomeComponent } from './pages/home/index';
import { LoginComponent } from './pages/login/index';
import { RegisterComponent } from './pages/register/index';
import { AlertComponent } from './directives/index';

import { AuthGuard }              from './core/guards/index';
import { baseHttpProvider }       from './core/helpers/base-http';
import { requestOptionsProvider } from './core/helpers/default-request-options.service';
import { AlertService }           from './services/index';
import { AuthenticationService, UserMockService, UserRealService } from './services/index';

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
  ],
  // The 'providers' array creates a singleton instance of each Service,
  // available to all components of the app.
  providers: [
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
export class AppModule { }
