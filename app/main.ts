import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {enableProdMode} from '@angular/core';

let devHosts = ['localhost','127.0.0.1','groovytask-dev.nerdyhippie.com','groovytask-dev.firebaseapp.com'];
if (devHosts.indexOf(window.location.hostname) == -1) enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
