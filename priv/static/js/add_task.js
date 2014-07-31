define(['vue', 'underscore', 'text!templates/form.html', 'app/get_random_id'], function(Vue, _, template, getRandomId) {
  return new Vue({
    el: '#radeon-container',
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
