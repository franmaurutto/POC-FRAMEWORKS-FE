<template>
  <div id="app">
    <NavigationBar />
    <router-view></router-view>
    <AddTask @add-task="addTask" />
    <TaskFilter @change-filter="filter = $event" />
    <TaskList
      :tasks="filteredTasks"
      @delete-task="deleteTask"
      @toggle-completed="toggleCompleted"
    />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import AddTask from './components/AddTask.vue';
import TaskFilter from './components/TaskFilter.vue';
import TaskList from './components/TaskList.vue';

export default {
  data() {
    return {
      tasks: [],
      filter: 'todas'
    };
  },
  computed: {
    filteredTasks() {
      if (this.filter === "completadas") return this.tasks.filter(t => t.completed);
      if (this.filter === "incompletas") return this.tasks.filter(t => !t.completed);
      return this.tasks;
    }
  },
  methods: {
    addTask(taskText) {
      this.tasks.push({ text: taskText, completed: false });
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleCompleted(index, newState) {
      this.tasks[index].completed = newState;
    }
  },
  components: {
    NavigationBar,
    AddTask,
    TaskFilter,
    TaskList
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
}

button {
  background-color: #ffcccb;
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ffb6b9;
}

input {
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
}
</style>
