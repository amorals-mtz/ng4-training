import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// third party imports
// ...

// routing
import { FormsDemoRoutingModule } from './forms-demo-routing.module';

// layouts
import { FormsFundamentalsComponent } from './fundamentals/forms-fundamentals.component';
import { ModelDrivenFormComponent } from './model-driven/model-driven-form.component';
import { TemplateDrivenFormComponent } from './template-driven/template-driven-form.component';
import { KeyUpv1Component, KeyUpv2Component, KeyUpv3Component, KeyUpv4Component } from './shared/keyup.component';
import { LoopbackComponent } from './shared/keyup.component';

// other imports
// ...

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    FormsDemoRoutingModule,
  ],
  declarations: [
    FormsFundamentalsComponent,
    ModelDrivenFormComponent,
    TemplateDrivenFormComponent,
    KeyUpv1Component, KeyUpv2Component, KeyUpv3Component, KeyUpv4Component,
    LoopbackComponent,
  ]
})
export class FormsDemoModule { }
