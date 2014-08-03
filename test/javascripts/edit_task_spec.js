define(['app/edit_task'], function(EditTask) {
  'use strict';

  describe('EditTask Component', function() {
    describe('methods', function() {
      describe('#updateTask', function() {
        var updateTask = EditTask.methods.updateTask,
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

        it('dispatches the new changes to the right channel', function() {

          // Call updateTask with the context of mock
          updateTask.call(mock);

          expect(messageName).toBe('updated-task');

          expect(params.id).toBe(mock.id);
          expect(params.title).toBe(mock.title);
          expect(params.description).toBe(mock.description);
        });
      });
    });
  });
});
