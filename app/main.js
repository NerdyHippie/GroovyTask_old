"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var core_1 = require('@angular/core');
var devHosts = ['localhost', '127.0.0.1', 'groovytask-dev.nerdyhippie.com', 'groovytask-dev.firebaseapp.com'];
if (devHosts.indexOf(window.location.hostname) == -1)
    core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map