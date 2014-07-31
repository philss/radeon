define(function(require) {
  var hello = require('app/hello_world');

  describe('the thing', function() {
    it('should be true', function() {
      hello.sayHello();
      expect(true).toBe(true);
    });
  });
});
