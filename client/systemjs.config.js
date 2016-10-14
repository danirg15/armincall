/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
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
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
    
      ///////
      'ng2-charts': 				       'npm:ng2-charts',
      'socket.io-client':          'npm:socket.io-client/socket.io.js',
      'moment':                    'npm:moment',
      'ng2-popover':               'npm:ng2-popover',
      'ng2-modal':                 'npm:ng2-modal'
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
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'ng2-charts': {
        defaultExtension: 'js'
      },
      moment: {
        main:'./moment.js',
        defaultExtension: 'js'
      },
      'socket.io-client':{
        defaultExtension: 'js'  
      },
      'ng2-popover': { 
        main: 'index.js', 
        defaultExtension: 'js' 
      },
      'ng2-modal': { 
        main: 'index.js', 
        defaultExtension: 'js' 
      }


    }
  });
})(this);
