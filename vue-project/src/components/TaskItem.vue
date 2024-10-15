<template>
    <li>
      <input type="checkbox" :checked="task.completed" @change="emitToggleCompleted" />
      {{ task.text }}
      <button @click="$emit('delete-task')">Delete</button>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      task: Object
    },
    methods: {
      emitToggleCompleted(event) {
        this.$emit('toggle-completed', event.target.checked);
      }
    }
  };
  </script>
  