[![Angular Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)

# Angular (v4.x) Training

This repository stores all the supported exercises and artifacts crafted during my Angular, JavaScript and TypeScript training sessions.

From **Setup** to **Deployment**, it covers examples about **Components**, **Directives**, **Services**, **Forms**, **Http** Access, **Authentication**, **Optimizing an Angular App with Modules and Offline Compilation** and *much more*...

`ng4-training` project uses the [Angular CLI](https://cli.angular.io/) toolset to create the application skeleton and features a complete project, which allows you to practice the things learned!

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running Unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running End-to-End tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


## Features!

`ng4-training` is a web app meant to cover much more areas than a simple _Hello World_ app (search, pagination, validation, auto-complete, etc.).
  + TypeScript
  + Webpack
  + Responsive layout
  + High resolution
  + Bootstrap 4 CSS Framework
  + Sass
  + Angular
  + [???] jQuery
  + [???] Charts (Chartist, Chart.js)
  + [???] Maps (Google, Leaflet, amMap)
  + [???] Official Angular i18n support.
  + [???] Production and development builds.
  + [???] Ahead-of-Time compilation support.
  + [???] Sample unit tests with Jasmine and Karma including code coverage via [istanbul](https://gotwarlost.github.io/istanbul/).
  + [???] End-to-end tests with Protractor.
  + Following the [best practices](https://angular.io/guide/styleguide).
  + and many more...!

## Demo

  A fully functional demo is available at <a href="http://demo.io?ref=github">Demo</a>


## Directory Structure

You'll find the following directories and files:

```
.
├── LICENSE
├── README.md
├── .angular-cli.json          <- Configuration for your project.
├── .editorconfig              <- Coding styles between IDEs.
├── .gitignore                 <- Intentionally untracked files that Git should ignore.
├── gulpfile.ts                <- [???] Configuration of the gulp tasks.
├── karma.conf.js              <- Unit test configuration for the Karma test runner, used when running `ng test`.
├── package.json               <- Dependencies and metadata relevant to your project.
├── protractor.conf.js         <- End-to-end tests configuration, used when running `ng e2e`.
├── test-config.js             <- [???] Testing configuration.
├── test-main.js               <- [???] Karma test launcher.
├──
├── e2e                        <- ent-to-end testing
├── src                        <- source code of the application
│   └── client
│       ├── app
│       │   ├── about
│       │   │   ├── about.component.css
│       │   │   ├── about.component.e2e-spec.ts
│       │   │   ├── about.component.html
│       │   │   ├── about.component.spec.ts
│       │   │   ├── about.component.ts
│       │   │   ├── about.module.ts
│       │   │   ├── about.routes.ts
│       │   │   └── index.ts
│       │   ├── app.component.e2e-spec.ts
│       │   ├── app.component.html
│       │   ├── app.component.spec.ts
│       │   ├── app.component.ts
│       │   ├── app.module.ts
│       │   ├── app.routes.ts
│       │   ├── home
│       │   │   ├── home.component.css
│       │   │   ├── home.component.e2e-spec.ts
│       │   │   ├── home.component.html
│       │   │   ├── home.component.spec.ts
│       │   │   ├── home.component.ts
│       │   │   ├── home.module.ts
│       │   │   ├── home.routes.ts
│       │   │   └── index.ts
│       │   ├── i18n.providers.ts
│       │   ├── main-prod.ts
│       │   ├── main.ts
│       │   ├── operators.ts
│       │   ├── shared
│       │   │   ├── config
│       │   │   │   └── env.config.ts
│       │   │   ├── index.ts
│       │   │   ├── name-list
│       │   │   │   ├── index.ts
│       │   │   │   ├── name-list.service.spec.ts
│       │   │   │   └── name-list.service.ts
│       │   │   ├── navbar
│       │   │   │   ├── index.ts
│       │   │   │   ├── navbar.component.css
│       │   │   │   ├── navbar.component.html
│       │   │   │   └── navbar.component.ts
│       │   │   ├── shared.module.ts
│       │   │   └── toolbar
│       │   │       ├── index.ts
│       │   │       ├── toolbar.component.css
│       │   │       ├── toolbar.component.html
│       │   │       └── toolbar.component.ts
│       │   └── system-config.ts
│       ├── assets
│       │   ├── data.json
│       │   └── favicon
│       │       ├── favicon-DEV.ico
│       │       └── favicon-PROD.ico
│       │   └── svg
│       │       └── more.svg
│       ├── css
│       │   └── main.css
│       ├── index.html         <- the single page our app is going to serve
│       └── tsconfig.json
├── tools
│   ├── README.md              <- build documentation
│   ├── config
│   │   ├── banner-256.txt
│   │   ├── banner.txt
│   │   ├── project.config.ts  <- configuration of the specific project
│   │   ├── project.tasks.json <- override composite gulp tasks
│   │   ├── seed.config.ts     <- generic configuration of the seed project
│   │   ├── seed.config.interfaces.ts
│   │   ├── seed.tasks.json    <- default composite gulp tasks
│   │   └── seed.tslint.json   <- generic tslint configuration of the seed project
│   ├── config.ts              <- exported configuration (merge both seed.config and project.config, project.config overrides seed.config)
│   ├── debug.ts
│   ├── env                    <- environment configuration
│   │   ├── base.ts
│   │   ├── dev.ts
│   │   ├── env-config.interface.ts
│   │   └── prod.ts
│   ├── manual_typings
│   │   ├── project            <- manual ambient typings for the project
│   │   │   └── sample.package.d.ts
│   │   └── seed               <- seed manual ambient typings
│   │       ├── autoprefixer.d.ts
│   │       ├── cssnano.d.ts
│   │       ├── express-history-api-fallback.d.ts
│   │       ├── istream.d.ts
│   │       ├── karma.d.ts
│   │       ├── merge-stream.d.ts
│   │       ├── open.d.ts
│   │       ├── operators.d.ts
│   │       ├── slash.d.ts
│   │       ├── systemjs-builder.d.ts
│   │       └── tildify.d.ts
│   ├── tasks                  <- gulp tasks
│   │   ├── assets_task.ts
│   │   ├── css_task.ts
│   │   ├── project            <- project specific gulp tasks
│   │   │   └── sample.task.ts
│   │   └── seed               <- seed generic gulp tasks. They can be overriden by the project specific gulp tasks
│   │   │   ├── build.assets.dev.ts
│   │   │   ├── build.assets.prod.ts
│   │   │   ├── build.bundle.rxjs.ts
│   │   │   ├── build.bundles.app.exp.ts
│   │   │   ├── build.bundles.app.ts
│   │   │   ├── build.bundles.ts
│   │   │   ├── build.docs.ts
│   │   │   ├── build.html_css.ts
│   │   │   ├── build.index.dev.ts
│   │   │   ├── build.index.prod.ts
│   │   │   ├── build.js.dev.ts
│   │   │   ├── build.js.e2e.ts
│   │   │   ├── build.js.prod.exp.ts
│   │   │   ├── build.js.prod.ts
│   │   │   ├── build.js.test.ts
│   │   │   ├── build.tools.ts
│   │   │   ├── check.tools.ts
│   │   │   ├── check.versions.ts
│   │   │   ├── clean.all.ts
│   │   │   ├── clean.coverage.ts
│   │   │   ├── clean.dev.ts
│   │   │   ├── clean.prod.ts
│   │   │   ├── clean.tools.ts
│   │   │   ├── clear.files.ts
│   │   │   ├── compile.ahead.prod.ts
│   │   │   ├── copy.prod.ts
│   │   │   ├── e2e.ts
│   │   │   ├── generate.manifest.ts
│   │   │   ├── karma.run.ts
│   │   │   ├── karma.run.with_coverage.ts
│   │   │   ├── karma.watch.ts
│   │   │   ├── minify.bundles.ts
│   │   │   ├── print.banner.ts
│   │   │   ├── serve.coverage.ts
│   │   │   ├── serve.coverage.watch.ts
│   │   │   ├── serve.docs.ts
│   │   │   ├── server.prod.ts
│   │   │   ├── server.start.ts
│   │   │   ├── start.deving.ts
│   │   │   ├── tslint.ts
│   │   │   ├── watch.dev.ts
│   │   │   ├── watch.e2e.ts
│   │   │   ├── watch.test.ts
│   │   │   └── webdriver.ts
│   │   ├── task.ts
│   │   └── typescript_task.ts
│   ├── utils                  <- build utils
│   │   ├── project            <- project specific gulp utils
│   │   │   └── sample_util.ts
│   │   ├── project.utils.ts
│   │   ├── seed               <- seed specific gulp utils
│   │   │   ├── clean.ts
│   │   │   ├── code_change_tools.ts
│   │   │   ├── karma.start.ts
│   │   │   ├── server.ts
│   │   │   ├── tasks_tools.ts
│   │   │   ├── template_locals.ts
│   │   │   ├── tsproject.ts
│   │   │   └── watch.ts
│   │   └── seed.utils.ts
│   └── utils.ts
├──
├── tsconfig.json              <- TypeScript compiler configuration for your IDE to pick up and give you helpful tooling.
└── tslint.json                <- Linting configuration for TSLint together with Codelyzer, used when running `ng lint`.
```

## About the generated code

This project uses the following technologies/frameworks:

* [Angular 4.x](http://angular.io/) web framework: we try to always use the most recent version
* [Angular CLI](http://cli.angular.io/) a Command Line Interface for Angular.
* [TypeScript](https://www.typescriptlang.org/): much easier than JavaScript...
* [PrimeNG](http://primefaces.org/primeng/): Angular components library, we leverage file upload, auto-complete, calendar, tri-state checkbox, server-side pagination, etc.
* [Angular Material](https://material.angular.io/): Material Design components for Angular apps
* [Augury](https://augury.angular.io/) - A Google Chrome Dev Tools extension for debugging and profiling Angular 2 applications.
* [Codelyzer](http://codelyzer.com/) -  A set of tslint rules for static code analysis of Angular TypeScript projects.


## Useful Links

For more information and references, follow these links:

- https://github.com/mgechev/angular-seed - Starter project for the development of Angular projects.
- https://github.com/jaxio/celerio-angular-quickstart - An Angular CRUD application from an existing database schema.
- https://github.com/jelbourn/material2-app - Simple app that consumes Angular Material 2 components.
- https://github.com/AngularShowcase/angular2-sample-app - Sample Angular application.
- https://github.com/AngularShowcase/angular2-seed-ng2-highcharts - Simple application showing an integration with [Highcharts](http://www.highcharts.com).


## License
[MIT](LICENSE.txt) license.
