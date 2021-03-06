import { Component, OnInit }       from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router';

import { AlertService, AuthenticationService }  from 'app/services/index';

/**
 * The Login component uses the AuthenticationService to login and logout of the application.
 * It automatically logs the user out when it initializes (ngOnInit) so the login page
 * can also be used to logout.
 */
@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  /* error = ''; */
  /* public errorMsg = ''; */

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // Calling the login() function form the service when user clicks on login button.
  login() {
    this.loading = true;
    this.authenticationService.login( this.model.username, this.model.password )
        .subscribe(
          data => { this.router.navigate([this.returnUrl]); },
          error => {
            this.alertService.error(error);
            this.loading = false;
          },
          () => console.log('Successful authentication!')
        );
          /*.subscribe(result => {
            if (result === true) {
              // login successful
              this.router.navigate(['/']);
            } else {
              // login failed
              this.error = 'Username or password is incorrect';
              this.loading = false;
            }
          });*/
  }

  /*login() {
    // If everything goes right the service will redirect to other component,
    // otherwise it wil return false and template will display an error message.
    if(!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login';
    }
  }*/
}
