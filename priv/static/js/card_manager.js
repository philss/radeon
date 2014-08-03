// A card manager
define(['underscore', 'app/get_random_id', 'text!templates/card_manager.html'], function(_, getRandomId, template) {
  return {
    template: template,

    data: {
      newCard: '',
      cards: []
    },

    methods: {
      addCard: function() {
        if (this.newCard === '') {
          return;
        }

        this.cards.push({
          title: this.newCard,
          id: getRandomId(),
          description: ''
        });

        this.newCard = '';
      },

      removeCard: function(id) {
        this.cards = _.reject(this.cards, this.detectCard(id));
      },

      openCardEditor: function(id) {
        var card = _.detect(this.cards, this.detectCard(id));

        this.$dispatch('open-card-editor', card);
      },

      updateCard: function(card) {
        var _card = _.detect(this.cards, this.detectCard(card.id));

        _card.title = card.title;
        _card.description = card.description;
      },

      detectCard: function(id) {
        return function(card) {
          return card.id === id;
        };
      }
    }
  };
});
