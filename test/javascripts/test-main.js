var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  // dynamically load all test files
  deps: allTestFiles,

  // Karma will load all files with the original basepath, so I need to tell him
  // all the path based on `base`
  paths: {
    app: 'priv/static/js',
    templates: 'priv/static/templates',
    vue: 'priv/static/bower_components/vue/dist/vue',
    jquery: 'priv/static/bower_components/jquery/dist/jquery',
    text: 'priv/static/bower_components/requirejs-text/text'
  },

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
