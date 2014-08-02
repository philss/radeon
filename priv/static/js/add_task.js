// A task manager
define(['vue', 'underscore', 'app/get_random_id', 'text!templates/tasks_collection.html'], function(Vue, _, getRandomId, template) {
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
          id: getRandomId(),
          description: ''
        });

        this.newCard = '';
      },

      removeCard: function(id) {
        this.cards = _.reject(this.cards, this.detectTask(id));
      },

      openTaskEdition: function(id) {
        var task = _.detect(this.cards, this.detectTask(id));

        this.$dispatch('open-task-edition', task);
      },

      updateTask: function(task) {
        var _task = _.detect(this.cards, this.detectTask(task.id));

        _task.title = task.title;
        _task.description = task.description;
      },

      detectTask: function(id) {
        return function(card) {
          return card.id === id;
        };
      }
    }
  });
});
