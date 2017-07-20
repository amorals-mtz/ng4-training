import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

// Import Material packages or specific component modules to use...
import { MaterialModule }           from '@angular/material';
// import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { MaterialShowcaseComponent, DialogContent } from './index';
import 'hammerjs';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    /*MdButtonModule, MdCheckboxModule, …*/
  ],
  declarations: [
    MaterialShowcaseComponent, DialogContent
  ],
  exports: [
    MaterialModule,
    /*MdButtonModule, MdCheckboxModule, …*/
  ],
  entryComponents: [ DialogContent ],
})
export class CustomMaterialModule { }
