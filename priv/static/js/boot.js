define(['vue', 'app/add_task', 'app/edit_task'], function(Vue, AddTask, EditTask) {

  var app = new Vue({
    el: '#radeon-container',
    template: '<div v-component="add_task" v-ref="taskCollection"></div><div v-component="edit_task" v-ref="edition"></div>',
    components: {
      add_task: AddTask,
      edit_task: EditTask
    },
    created: function() {
      this.$on('open-task-edition', function(task) {
        var edition = this.$.edition;

        edition.id = task.id;
        edition.title = task.title;
        edition.description = task.description;
      });

      this.$on('updated-task', function(task) {
        this.$.taskCollection.updateTask(task);
      });
    }
  });
});

