import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '../views/WelcomeView.vue'; // Importa el nuevo componente

const routes = [
  {
    path: '/welcome', // Ruta para la vista de bienvenida
    name: 'Welcome',
    component: WelcomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
