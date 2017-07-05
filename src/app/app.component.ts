/**
 * Root component of the application.
 */

import { Component } from '@angular/core';

import { LoginComponent }  from './pages/login/login.component';
import { HomeComponent }   from './pages/home/home.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',

  // This is telling the application where to render components.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
}
