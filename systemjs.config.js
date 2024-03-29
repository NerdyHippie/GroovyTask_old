/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/',
      'env:': 'environments/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

	    
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                         'npm:rxjs',
      'angular-in-memory-web-api':    'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
	
	    ,ENV:                           'env:env.conditions.js'
	    ,'firebaseConfig':              'env:environment.#{ENV|environment}.js'
	    
	    ,'firebase':                    'npm:firebase/'
      ,'angularfire2':                'npm:angularfire2/bundles/angularfire2.umd.js'
      ,'moment':                      'npm:moment/moment.js'
      ,'jquery':                      'npm:jquery/dist/jquery.js'
      ,'fullcalendar':                'npm:fullcalendar/dist/fullcalendar.js'
      ,'@ng-bootstrap/ng-bootstrap':  'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js'
      ,'angular2-fullcalendar':       'npm:angular2-fullcalendar/src/calendar/calendar.js'
	    ,'primeng':                     'npm:primeng'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'firebase': {
        defaultExtension: 'js'
	      ,main: 'firebase-browser.js'
      },
	    primeng: {
		    defaultExtension: 'js'
	    }
    }
  });
})(this);
