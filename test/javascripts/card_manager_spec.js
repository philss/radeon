define(['app/card_manager'], function(CardManager) {
  describe('CardManager', function() {
    var mock;

    beforeEach(function() {
      mock = {
        cards: [],
        newCard: ''
      };
    });

    describe('#addCard', function() {
      var addCard = CardManager.methods.addCard;

      it('adds a new card based on `newCard` content', function() {
        mock.newCard = 'Testing';
        addCard.call(mock);
        expect(mock.cards[0].title).toBe('Testing');
      });

      it('cleans `newCard` after add a new card', function() {
        mock.newCard = 'Testing';
        addCard.call(mock);
        expect(mock.newCard).toBe('');
      });

      it('does not add a new card when `newCard` is empty', function() {
        mock.newCard = '';
        addCard.call(mock);
        expect(mock.cards).toEqual([]);
      });
    });
  });
});

