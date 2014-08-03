// Card editor component
define(['text!templates/editor.html'], function(template) {
  return {
    template: template,

    data: {
      id: '',
      title: '',
      description: ''
    },

    methods: {
     updateCard: function() {
       this.$dispatch('update-card', {
         id: this.id,
         title: this.title,
         description: this.description
       });
     }
    }
  };
});
