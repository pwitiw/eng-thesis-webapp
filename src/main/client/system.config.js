System.config({
  baseURL: '/',
  defaultJSExtensions: true,
  transpiler: null,
  paths: {
    'npm:*': 'node_modules/*',
    'tmp/*': './.tmp/*',
    'bower:*': 'bower_components/*'
  },

  meta: {
    'bower:angular-mocks/angular-mocks.js': {
      format: 'global'
    }
  },

  map: {
    'templates': 'tmp/app/app.templates.js',
    'angular': 'bower:angular/index.js',
    'angular-mocks': 'bower:angular-mocks/angular-mocks.js',
    'angular-ui-router': 'bower:angular-ui-router/release/angular-ui-router.js',
    'angular-ui-bootstrap': 'bower:angular-bootstrap/index.js',
    'angular-smart-table': 'bower:angular-smart-table/index.js',
    'angular-aria': 'bower:angular-aria/index.js',
    'angular-animate': 'bower:angular-animate/index.js',
    'angular-material': 'bower:angular-material/index.js',
    'angular-loading-bar': 'bower:angular-loading-bar/index.js',
    'bootstrap' : 'bower:bootstrap/dist/js/bootstrap.js'
  }
});
