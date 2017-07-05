/**
 * Root module of the application along with metadata about the module.
 * @preferred
 */

import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing }      from './app.routing';

// used to create fake backend
import { fakeBackendProvider }         from './core/helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions }          from '@angular/http';

import { AuthGuard } from './core/guards/index';
import { AuthenticationService, UserService } from './services/index';
import { LoginComponent } from './pages/login/index';
import { HomeComponent } from './pages/home/index';
// import { LoginModule }   from './pages/login/login.module';

// import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    // LoginModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,

    // TODO: remove these providers to switch to a real backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
