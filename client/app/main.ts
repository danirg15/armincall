// import {bootstrap}    from '@angular/platform-browser-dynamic'
// import {AppComponent} from './app.component'

// import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
// import {HTTP_PROVIDERS} from '@angular/http';


// //import {enableProdMode} from '@angular/core';
// //enableProdMode();

// bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
