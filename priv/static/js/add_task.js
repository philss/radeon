// A task manager
define(['vue', 'underscore', 'app/get_random_id', 'text!templates/form.html'], function(Vue, _, getRandomId, template) {
  return Vue.extend({
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
          id: getRandomId()
        });

        this.newCard = '';
      },

      removeCard: function(id) {
        this.cards = _.reject(this.cards, function(card) {
          return card.id === id;
        });
      }
    }
  });
});
