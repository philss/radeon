define(['vue', 'text!templates/hello.html'], function(Vue, template) {
  // Public API
  return {
    sayHello: function() {
        console.log('hello world!');
        console.log(template);
    }
  };
});
