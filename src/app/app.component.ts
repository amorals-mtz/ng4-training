/**
 * Root component of the application.
 */

import { Component } from '@angular/core';

@Component({
  moduleId: module.id,

  // The 'selector' property tells Angular to display the component
  // inside a custom <app-root> tag in the index.html
  selector: 'app-root',

  // The 'template' property defines the multi-line HTML content using ES2015's template literals.
  // template: `<h1>Hello {{name}}</h1>`,

  // The 'templateUrl' property replace the 'template' metadata and point to a new template file
  // that tells the application where to render components.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
