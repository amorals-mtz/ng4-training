import { Component } from '@angular/core';

@Component({
  selector: 'app-key-up-v1',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class KeyUpv1Component {
  values = '';

  /** onKey(event: any) { // without type info

    // appends the contents of the input box value
    this.values += event.target.value + ' | ';

    // accumulate the individual keys
    // this.values += event.key + ' | ';
  } */

  onKey(event: KeyboardEvent) { // with type info
    // Not all elements have a value property so it casts target to an input element.
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}

//////////////////////////////////////////

/**
 * This example uses a template reference variable (#) to get the user's input.
 */
@Component({
  selector: 'app-key-up-v2',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpv2Component {
  values = '';

  onKey(value: string) {
    this.values += value + ' | ';
  }
}

//////////////////////////////////////////

@Component({
  selector: 'app-key-up-v3',
  template: `
    <!-- The (keyup) event handler hears every keystroke. -->
    <!-- An easier way to reduce the noise of examine every $event.keyCode and take action
    only when the key is Enter. It's binding to Angular's keyup.enter pseudo-event. -->
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `
})
export class KeyUpv3Component {
  value = '';

  onEnter(value: string) {
    this.value = value;
  }
}

//////////////////////////////////////////

@Component({
  selector: 'app-key-up-v4',
  template: `
    <!-- Listen to both the Enter key and the blur event. -->
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">

    <p>{{value}}</p>
  `
})
export class KeyUpv4Component {
  value = '';

  update(value: string) {
    this.value = value;
  }
}

//////////////////////////////////////////

@Component({
  selector: 'app-loop-back',
  template: `
    <!-- Declare a template reference variable using an identifier with a hash (or pound) character (#). -->
    <!-- The following example uses a template reference variable to implement a keystroke loopback in a single template. -->
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { }
