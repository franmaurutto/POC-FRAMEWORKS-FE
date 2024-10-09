<template>
    <div>
      <input v-model="newTask" placeholder="Añadir nueva tarea" />
      <button @click="emitAddTask">Añadir</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: ""
      };
    },
    methods: {
      emitAddTask() {
        if (this.newTask.trim()) {
          this.$emit('add-task', this.newTask);
          this.newTask = "";
        }
      }
    }
  };
  </script>
  