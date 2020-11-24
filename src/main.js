import { createApp } from 'vue'
import App from './App.vue'
import routes from './shared/router/main.router';
import { createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
