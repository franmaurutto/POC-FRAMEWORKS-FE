<template>
  <div class="task-list">
    <ul>
      <TaskItem
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        @delete-task="() => deleteTask(index)"
        @toggle-completed="(newState) => toggleCompleted(index, newState)"
      />
    </ul>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  props: {
    tasks: Array
  },
  components: {
    TaskItem
  },
  methods: {
    deleteTask(index) {
      this.$emit('delete-task', index);
    },
    toggleCompleted(index, newState) {
      this.$emit('toggle-completed', index, newState);
    }
  }
};
</script>

<style>
.task-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh; 
}

ul {
  list-style-type: none; 
  padding: 0;
}

li {
  margin-bottom: 10px; 
}
</style>
