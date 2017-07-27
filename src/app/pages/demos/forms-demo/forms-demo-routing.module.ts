import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsFundamentalsComponent } from './fundamentals/forms-fundamentals.component';
import { ModelDrivenFormComponent } from './model-driven/model-driven-form.component';
import { TemplateDrivenFormComponent } from './template-driven/template-driven-form.component';
import { AuthGuard } from 'app/core/guards/index';

const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    data: { title: '[Forms Demo]' },
    children: [
      { path: '', redirectTo: 'fundamentals', pathMatch: 'full' },
      {
        path: '',
        canActivateChild: [ AuthGuard ],
        children: [
          { path: 'fundamentals', component: FormsFundamentalsComponent },
          { path: 'model', component: ModelDrivenFormComponent },
          { path: 'template', component: TemplateDrivenFormComponent }
        ]
      },
      { path: '**', redirectTo: 'fundamentals' }
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
