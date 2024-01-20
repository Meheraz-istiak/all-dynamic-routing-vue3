import { createApp } from 'vue';
import App from './App.vue';
import { configureRouter } from './route/router'; // Import the configureRouter function

// Create the Vue app instance and mount it to the DOM
async function createAppInstance() {
  const router = await configureRouter(); // Wait for the router configuration
  const app = createApp(App);
  app.use(router); // Use the router instance



  app.mount('#app');
}

createAppInstance();
