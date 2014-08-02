// A task edition manager
define(['vue', 'underscore', 'text!templates/edition.html'], function(Vue, _, template) {
  return {
    template: template,

    data: {
      id: '',
      title: '',
      description: ''
    },

    methods: {
     updateTask: function() {
        var self = this;
        this.$dispatch('updated-task', {
          id: self.id,
          title: self.title,
          description: self.description
        });
     }
    }
  };
});
