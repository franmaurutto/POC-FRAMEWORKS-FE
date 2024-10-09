<template>
  <div id="app">
    <NavigationBar />
    <router-view></router-view> <!-- Se añade para que las rutas como la vista de bienvenida se muestren -->
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
import NavigationBar from './components/NavigationBar.vue'; // Importa el componente de navegación
import AddTask from './components/AddTask.vue';     // Ruta relativa
import TaskFilter from './components/TaskFilter.vue'; // Ruta relativa
import TaskList from './components/TaskList.vue';   // Ruta relativa

export default {
  data() {
    return {
      tasks: [], // Inicializa la lista de tareas
      filter: 'todas' // Filtrar por defecto
    };
  },
  computed: {
    filteredTasks() {
      // Filtramos las tareas según el filtro seleccionado
      if (this.filter === "completadas") return this.tasks.filter(t => t.completed);
      if (this.filter === "incompletas") return this.tasks.filter(t => !t.completed);
      return this.tasks;
    }
  },
  methods: {
    addTask(taskText) {
      // Añadir una nueva tarea a la lista
      this.tasks.push({ text: taskText, completed: false });
    },
    deleteTask(index) {
      // Eliminar una tarea por índice
      this.tasks.splice(index, 1);
    },
    toggleCompleted(index, newState) {
      // Actualizar el estado de completado de la tarea
      this.tasks[index].completed = newState;
    }
  },
  components: {
    NavigationBar, // Registra el componente de navegación
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
  min-height: 100vh; /* Asegura que todo el contenido esté centrado verticalmente */
  background-color: #f9f9f9; /* Opcional: un fondo claro para mejor apariencia */
}

button {
  background-color: #ffcccb; /* Color rosa pastel */
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ffb6b9; /* Un tono más oscuro para hover */
}

input {
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
}
</style>
