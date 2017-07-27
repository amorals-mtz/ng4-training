import { Component, OnInit } from '@angular/core';

import { User } from 'app/shared/models/user.interface';

@Component({
  moduleId: module.id,
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  user: User;   // our model

  constructor() { }

  ngOnInit() {
    // initialize the model here...
    this.user = {
      name: '',
      address: {
        street: '',
        postcode: '8000' // set default value to 8000
      }
    };
  }

  save(model: User, isValid: boolean) {
    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);
  }
}
