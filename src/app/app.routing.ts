/**
 * Defines the routes of the application, each route contains a path and associated component.
 */

import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/index';
import { LoginComponent } from './pages/login/index';
import { HomeComponent } from './pages/home/index';
import { MaterialFormComponent } from './pages/material/index';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  // This is the default, so when we launch the application it’ll go straight
  // to the HomeComponent, then as it doesn’t have any logged in user,
  // it’ll redirect to the login page.
  // It's also secured by passing the AuthGuard to the canActivate property of the route.
  { path: '', component: HomeComponent, canActivate: [ AuthGuard ] },

  { path: 'material', component: MaterialFormComponent, canActivate: [ AuthGuard ] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
