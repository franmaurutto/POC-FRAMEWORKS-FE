import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 

const app = createApp(App);

app.use(router);
if (process.env.NODE_ENV === 'production') {
    app.config.performance = false;
  }
app.mount('#app');
