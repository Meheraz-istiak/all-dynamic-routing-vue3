import { createRouter, createWebHistory } from 'vue-router';
import { fetchDynamicRoutes } from '../api'; // Import your API function

// Function to fetch dynamic routes from the API
async function getDynamicRoutes() {
  return fetchDynamicRoutes();
}

// Function to create and configure the router instance
export async function configureRouter() {
  const dynamicRoutes = await getDynamicRoutes();

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/register.vue'),
    },
    ...dynamicRoutes.map((route) => ({
      path: route.path,
      name: route.name,
      component: () => import(`../pages/${route.component}.vue`),
    })),
  ];

  return createRouter({
    history: createWebHistory(),
    routes,
  });
}
