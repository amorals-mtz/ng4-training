import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { User } from 'app/shared/models/user.interface';

@Component({
  moduleId: module.id,
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.scss']
})
export class ModelDrivenFormComponent implements OnInit {

  myForm: FormGroup;    // our model driven form
  submitted: boolean;   // keep track on whether form is submitted
  events: any[] = [];   // use later to display form changes

  constructor(private _fb: FormBuilder) { }   // form builder simplify form initialization

  ngOnInit() {
    // initialize the form model here...
    // the long way
    /** this.myForm = new FormGroup({
      name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
      address: new FormGroup({
        street: new FormControl('', <any>Validators.required),
        postcode: new FormControl('8000')
      })
    }); */

    // the short way, which achieve the same outcome with a simpler syntax.
    this.myForm = this._fb.group({
      // it's possible to define a single validator or an array of validators.
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      address: this._fb.group({
        street: ['', <any>Validators.required],
        postcode: ['8000']
      })
    });

    // subscribe to form changes
    this.subcribeToFormChanges();

    // Update a form single value
    (<FormControl>this.myForm.controls['name'])
        .setValue('John', { onlySelf: true });

    // Update form model value
    /** const people = {
      name: 'Jane',
      address: {
        street: 'High street',
        postcode: '94043'
      }
    };
    (<FormGroup>this.myForm)
        .setValue(people, { onlySelf: true }); */
  }

  subcribeToFormChanges() {
    // initialize streams
    const myFormStatusChanges$ = this.myForm.statusChanges;
    const myFormValueChanges$ = this.myForm.valueChanges;

    // subscribe to the streams
    myFormStatusChanges$
        .subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    myFormValueChanges$
        .subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }

  save(model: User, isValid: boolean) {
    this.submitted = true;    // set form submit to true

    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);
  }
}
