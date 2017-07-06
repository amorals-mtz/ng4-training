/**
 * Root module that tells Angular how to assemble the application
 * along with metadata about the module.
 * Every component must be declared in one —and only one— Angular module.
 *
 * @preferred
 */

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';               // <-- NgModel lives here

import { AppComponent }      from './app.component';
import { AppRoutingModule }  from './app-routing.module';     // <--- Routing Module

// Imports used to create fake backend
import { BaseRequestOptions }          from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { fakeBackendProvider }         from './core/helpers/index';

// Imports used to switch for real backend
// import { baseHttpProvider }            from './core/helpers/index';

// Imports for custom modules
import { CustomMaterialModule } from './pages/material/custom-material.module';

import { AuthGuard } from './core/guards/index';
import { AlertComponent } from './directives/index';
import { AlertService, AuthenticationService, UserMockService } from './services/index';
import { LoginComponent } from './pages/login/index';
import { RegisterComponent } from './pages/register/index';
import { HomeComponent } from './pages/home/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,                // <-- import this before binding with [(ngModel)]
    HttpModule,                 // <-- import providers for HTTP services
    AppRoutingModule,           // <-- import your routing configurations
    CustomMaterialModule,
  ],
  // The 'declarations' array contains a list of application components, pipes, and directives that belong to the module.
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  // The 'providers' array creates a singleton instance of each Service, available to all components of the app.
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserMockService,

    // TODO: remove these providers to switch to a real backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,

    // TODO: remove this providers to switch to a mock backend
    // baseHttpProvider,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
