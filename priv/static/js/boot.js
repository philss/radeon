define(['vue', 'app/add_task'], function(Vue, AddTask) {

  var app = new Vue({
    el: '#radeon-container',
    template: '<div v-component="add_task_manager"></div>',
    components: {
      add_task_manager: AddTask
    }
  });
});

