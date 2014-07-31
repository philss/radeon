requirejs.config({
  baseUrl: 'static/bower_components',

  paths: {
    app: '../js',
    templates: '../templates',
    vue: 'vue/dist/vue',
    jquery: 'jquery/dist/jquery',
    underscore: 'underscore/underscore',
    text: 'requirejs-text/text'
  }

});

requirejs(['app/boot']);
