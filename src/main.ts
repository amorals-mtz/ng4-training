/**
 * This file is the the main entry point for your app. Compiles the application with the JIT compiler
 * and bootstraps the application's root module (AppModule) to run in the browser.
 */

import { enableProdMode }         from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log(`App Bootstrap Success!`))
  .catch(err => console.error(err));
