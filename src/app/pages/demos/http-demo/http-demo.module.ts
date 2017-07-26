import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// third party imports
// ...

// routing
import { HttpDemoRoutingModule } from './http-demo-routing.module';

// layouts
import { HttpDemoComponent } from './http-demo.component';

// other imports
// ...

@NgModule({
  imports: [
    CommonModule,
    HttpModule,                 // <-- import providers for HTTP services
    HttpDemoRoutingModule,
  ],
  declarations: [
    HttpDemoComponent,
  ]
})
export class HttpDemoModule { }
