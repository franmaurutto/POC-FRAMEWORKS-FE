<template>
    <div>
      <button @click="$emit('change-filter', 'todas')">Todas</button>
      <button @click="$emit('change-filter', 'completadas')">Completadas</button>
      <button @click="$emit('change-filter', 'incompletas')">Incompletas</button>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  