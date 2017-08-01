import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// third party imports
// ...

// routing
import { FormsDemoRoutingModule } from './forms-demo-routing.module';

// layouts
import { ModelDrivenFormComponent } from './model-driven/model-driven-form.component';
import { TemplateDrivenFormComponent } from './template-driven/template-driven-form.component';

// other imports
// ...

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    FormsDemoRoutingModule,
  ],
  declarations: [
    ModelDrivenFormComponent,
    TemplateDrivenFormComponent,
  ]
})
export class FormsDemoModule { }
