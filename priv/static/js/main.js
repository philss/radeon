requirejs.config({
  baseUrl: 'static/bower_components',
  paths: {
    app: '../js',
    templates: '../templates',
    vue: 'vue/dist/vue',
    jquery: 'jquery/dist/jquery',
    text: 'requirejs-text/text'
  },
});

requirejs(['app/boot']);
