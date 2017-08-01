import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelDrivenFormComponent } from './model-driven/model-driven-form.component';
import { TemplateDrivenFormComponent } from './template-driven/template-driven-form.component';
import { AuthGuard } from 'app/core/guards/index';

const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    data: { title: '[Forms Demo]' },
    children: [
      { path: '', redirectTo: 'template', pathMatch: 'full' },
      {
        path: '',
        canActivateChild: [ AuthGuard ],
        children: [
          { path: 'model', component: ModelDrivenFormComponent },
          { path: 'template', component: TemplateDrivenFormComponent }
        ]
      },
      { path: '**', redirectTo: 'template' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class FormsDemoRoutingModule { }
