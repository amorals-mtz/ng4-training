import {
    Component, OnChanges, AfterViewInit, Input, Output, ElementRef, EventEmitter, ViewChild,
    SimpleChange, Renderer,
    ViewEncapsulation
}  from '@angular/core';

/**
 *  Angular-based component for ToggleSwitch control.
 *  The colors of the component can be customized using Bootstrap classes.
 *  @see https://www.w3schools.com/howto/howto_css_switch.asp
 *  @see https://foundation.zurb.com/sites/docs/v/5.5.3/components/switch.html
 */
@Component({
  selector: 'ng4-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToggleSwitchComponent implements OnChanges, AfterViewInit {

  // ----------------------------------
  //  Public Properties
  // ----------------------------------

  /**
   *  The current position of the toggle switch.
   *  A value of <code>false</code> corresponds to the unselected position,
   *  and a value of <code>1</code> corresponds to the selected position.
   */
  @Input() selected = true;

  /**
   *  The text of the label showing when the component is selected.
   */
  @Input() selectedLabel = 'Yes';

  /**
   *  The text of the label showing when the component is not selected.
   */
  @Input() unselectedLabel = 'No';

  /**
   *  Color applied to highlight the selected side of the ToggleSwitch control.
   *
   *  @default 0x3F7FBA
   */
  @Input() accentColor = 0x3F7FBA;

  /**
   *  The duration, in milleseconds, for an animation of the thumb
   *  as it slides between the selected and unselected sides of the track.
   *
   *  @default 125
   */
  @Input() slideDuration = 125

  @Input() size = 'normal';

  /**
   *  Dispatched when the selected property changes for the ToggleSwitch control.
   *  This event is dispatched only when the user interacts with the control.
   */
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private el: ElementRef, private renderer: Renderer) {
    // this._calculateSize();
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
  }

  ngAfterViewInit() {
    // this._calculateSize("normal");
    // this._calculateWidth();
  }


  // ----------------------------------
  //  Methods
  // ----------------------------------

  /**
   *  When the selection is changed by user interactions,
   *  fire a change event when appropriate.
   */
  private setSelected(value: boolean) {
    const valueChanged: boolean = value !== this.selected;
    this.selected = value;
    if (valueChanged) {
      this.change.emit( this.selected );
    }
  }

  onChange(event) {
    console.log(` * is checked: ${event.currentTarget.checked}`);
  }

}
