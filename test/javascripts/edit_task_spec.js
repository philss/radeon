define(['app/edit_task'], function(EditTask) {

  describe('EditTask Component', function() {
    describe('methods', function() {
      describe('#updateTask', function() {
        var subject = EditTask.methods.updateTask,
            called = false,
            params = {},
            messageName = '',
            mock = {
              id: '42',
              title: 'title',
              description: 'description',
              $dispatch: function(_messageName, _params) {
                messageName = _messageName;
                params = _params;
              }
            };

        it('dispatches the new changes', function() {
          // Call subject with the context of mock
          subject.call(mock);

          expect(messageName).toBe('updated-task');

          expect(params.id).toBe(mock.id);
          expect(params.title).toBe(mock.title);
          expect(params.description).toBe(mock.description);
        });
      });
    });
  });
});
