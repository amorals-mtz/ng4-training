/**
 * The AppRouting module defines the routes of the application,
 * each route contains a path and associated component.
 */

import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
/* import { PreloadAllModules }     from '@angular/router'; */

import { HomeComponent }              from './pages/home/home.component';
import { LoginComponent }             from './pages/login/login.component';
import { RegisterComponent }          from './pages/register/register.component';
import { MaterialShowcaseComponent }  from './pages/material/material-showcase.component';
import { ComposeMessageComponent }    from './directives/index';
import { AuthGuard }                  from './core/guards/index';

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
  {        // <--- Secured by passing the AuthGuard to the canActivate property of the route.
    path: '', component: HomeComponent, canActivate: [ AuthGuard ]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'material', component: MaterialShowcaseComponent, canActivate: [ AuthGuard ]
  },
  {        // <--- Configures a Secondary route with a named outlet.
    path: 'compose', component: ComposeMessageComponent, outlet: 'popup'
  },
  {        // <--- Configures a Lazy loading route with an unauthorized loading guard.
    path: 'http', loadChildren: './pages/demos/http-demo/http-demo.module#HttpDemoModule', canLoad: [ AuthGuard ]
  },
  {
    path: 'forms', loadChildren: './pages/demos/forms-demo/forms-demo.module#FormsDemoModule', canLoad: [ AuthGuard ]
  },
  /* { path: '**', component: PageNotFoundComponent } */
  { path: '**', redirectTo: '' }    // <--- Configures a wildcard route to to intercept any invalid URLs.
];

@NgModule({
  // Ensure there is a <base href="/"> element at the top of the <head> section of 'index.html' file.
  imports: [
    RouterModule.forRoot(
      ROUTES,
      {
        enableTracing: false,    // <--- debugging purposes only.
        useHash: true            // <--- enables the client-side location strategy with hash fragments instead of  history API.
        /** preloadingStrategy: PreloadAllModules */
      }
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
