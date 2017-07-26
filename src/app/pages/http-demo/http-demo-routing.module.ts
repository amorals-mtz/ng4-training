import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpDemoComponent } from './http-demo.component';
import { AuthGuard }         from 'app/core/guards/index';

const routes: Routes = [
  {
    path: '',
    component: HttpDemoComponent,
    canActivate: [ AuthGuard ],
    data: { title: '[Http Demo]' },
    /*children: [
      {
        path: '',
        canActivateChild: [ AuthGuard ],
        children: [
          { path: 'promises', component: HttpPromisesComponent },
          { path: 'observables', component: HttpObservablesComponent },
          { path: 'jsonp', component: JSONPObservablesComponent }
        ]
      }
    ]*/
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
export class HttpDemoRoutingModule { }
