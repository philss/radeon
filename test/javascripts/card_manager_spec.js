define(['app/hello_world'], function(hello) {

  describe('the thing', function() {
    it('should be true', function() {
      expect(hello.theAnswer()).toBe(42);
    });
  });
});
