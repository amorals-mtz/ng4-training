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

// Configure routes HERE
const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },                // <-- Default route when the app starts.

  // This is the default, so when we launch the application it’ll go straight
  // to the HomeComponent, then as it doesn’t have any logged in user,
  // it’ll redirect to the login page.
  { path: '', component: HomeComponent, canActivate: [ AuthGuard ] },   // <-- Secured by passing the AuthGuard to the canActivate property of the route.

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'material', component: MaterialShowcaseComponent, canActivate: [ AuthGuard ] },
  // { path: 'dashboard',  component: DashboardComponent },
  // { path: 'detail/:id', component: FeatureDetailComponent }             // <-- Configures a route with a parameter.

  { path: '**', redirectTo: '' }                                        // <-- Otherwise redirect to home.
];

@NgModule({
  // Ensure there is a <base href="/"> element at the top of the <head> section
  // of 'index.html' file.
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }   // <-- debugging purposes only)
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
