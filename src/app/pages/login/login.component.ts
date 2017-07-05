/**
 * Uses the AuthenticationService to login and logout of the application.
 * It automatically logs the user out when it initializes (ngOnInit)
 * so the login page can also be used to logout.
 */

import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

/*import { AuthenticationService, User}  from '../../services/_authentication.service';*/
import { AuthenticationService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  /*public user = new User('','');
  public errorMsg = '';*/

  constructor(
    /*private _service:AuthenticationService*/
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  // Calling the login() function form the service when user clicks on login button.
  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(result => {
          if (result === true) {
            // login successful
            this.router.navigate(['/']);
          } else {
            // login failed
            this.error = 'Username or password is incorrect';
            this.loading = false;
          }
        });
  }
  /*login() {
    // If everything goes right the service will redirect to other component,
    // otherwise it wil return false and template will display an error message.
    if(!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login';
    }
  }*/

}
