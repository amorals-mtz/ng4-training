/**
 * Root module that tells Angular how to assemble the application
 * along with metadata about the module.
 * @preferred
 */

import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing }      from './app.routing';

// used to create fake backend
import { BaseRequestOptions }          from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { fakeBackendProvider }         from './core/helpers/index';

// used for real backend
// import { baseHttpProvider }            from './core/helpers/index';

// custom modules
import { CustomMaterialModuleModule } from './pages/material/custom-material.module';

import { AuthGuard } from './core/guards/index';
import { AlertComponent } from './directives/index';
import { AlertService, AuthenticationService, UserMockService } from './services/index';
import { LoginComponent } from './pages/login/index';
import { RegisterComponent } from './pages/register/index';
import { HomeComponent } from './pages/home/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CustomMaterialModuleModule,
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
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
