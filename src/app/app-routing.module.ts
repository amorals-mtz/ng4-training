/**
 * The AppRouting module defines the routes of the application,
 * each route contains a path and associated component.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }                  from './core/guards/index';
import { HomeComponent }              from './pages/home/index';
import { LoginComponent }             from './pages/login/index';
import { RegisterComponent }          from './pages/register/index';
import { MaterialShowcaseComponent }  from './pages/material/index';
import { ComposeMessageComponent }    from './directives/index';

// Configure routes HERE
const ROUTES: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },     // <--- Default route when the app starts.
  // { path: 'blog/:id', component: FeatureDetailComponent },   // <--- Configures a parameterised route.
  // { path: 'blog/moo', component: DashboardComponent },       // <--- Configures a Non-parameterised route.

  // { path: 'search', component: SearchComponent },
  // { path: 'search/:term', component: SearchComponent },

  // This is the default, so when we launch the application it’ll go straight
  // to the HomeComponent, then as it doesn’t have any logged in user,
  // it’ll redirect to the login page.
  {                                 // <--- Secured by passing the AuthGuard to the canActivate property of the route.
    path: '',
    component: HomeComponent,
    canActivate: [ AuthGuard ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'material', component: MaterialShowcaseComponent, canActivate: [ AuthGuard ] },

  {                                 // <--- Configures a Secondary route with a named outlet.
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },

  { path: '**', redirectTo: '' }    // <--- Configures a wildcard route to to intercept any invalid URLs.
];

@NgModule({
  // Ensure there is a <base href="/"> element at the top of the <head> section
  // of 'index.html' file.
  imports: [
    RouterModule.forRoot(
      ROUTES,
      {
        enableTracing: false,    // <--- debugging purposes only.
        useHash: false           // <--- enables the client-side location strategy with hash fragments instead of  history API.
      }
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
