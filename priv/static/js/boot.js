define(['vue', 'app/card_manager', 'app/card_editor'], function(Vue, CardManager, CardEditor) {

  var app = new Vue({
    el: '#radeon-container',
    template: '<div v-component="card_manager" v-ref="cardManager"></div><div v-component="card_editor" v-ref="cardEditor"></div>',
    components: {
      card_manager: CardManager,
      card_editor: CardEditor
    },
    created: function() {
      this.$on('open-card-editor', function(card) {
        var cardEditor = this.$.cardEditor;

        cardEditor.id = card.id;
        cardEditor.title = card.title;
        cardEditor.description = card.description;
      });

      this.$on('update-card', function(card) {
        this.$.cardManager.updateCard(card);
      });
    }
  });
});

