// The AuthGuard is used to prevent unauthenticated users from accessing
// restricted routes.

import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad } from '@angular/router';
import { Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor (
    /*private authService: AuthService,*/
    private router: Router
  ) { }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Inject an AuthService to determine if the user is authenticated or not.
    /*return this.authService.isLoggedIn();*/
    console.log('AuthGuard#canActivate called!');

    // Store the attempted URL for redirecting
    const _url: string = state.url;

    return this.isLoggedIn(_url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('AuthGuard#canActivateChild called!');

    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    console.log('AuthGuard#canLoad called!');

    const _url = `/${route.path}`;

    return this.isLoggedIn(_url);
  }

  /**
   * Redirect anonymous users to the login page when they try to enter
   * unauthorized areas.
   */
  isLoggedIn(url: string): boolean {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: url }});
    return false;
  }
}
