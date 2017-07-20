// The AuthGuard is used to prevent unauthenticated users
// from accessing restricted routes.
// v1.0
// Created by amorales on 03/07/17.

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (
    private router: Router,
    /*private authService: AuthService*/
  ) { }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Inject an AuthService to determine if the user is authenticated or not.
    /*return this.authService.isLoggedIn();*/

    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
