define(['app/card_editor'], function(CardEditor) {
  'use strict';

  describe('CardEditor', function() {
    describe('#updateCard', function() {
      var updateCard = CardEditor.methods.updateCard,
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

        // Call updateCard with the context of mock
        updateCard.call(mock);

        expect(messageName).toBe('update-card');

        expect(params.id).toBe(mock.id);
        expect(params.title).toBe(mock.title);
        expect(params.description).toBe(mock.description);
      });
    });
  });
});
