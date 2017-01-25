"use strict";
var envir;
switch (window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
    case 'groovytask-dev.firebaseapp.com':
    case 'groovytask-dev.nerdyhippie.com':
        envir = 'dev';
        break;
    default:
        envir = 'prod';
        break;
}
console.log('envir is', envir);
exports.environment = envir;
//# sourceMappingURL=env.conditions.js.map