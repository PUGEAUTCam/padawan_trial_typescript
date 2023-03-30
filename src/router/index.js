import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../views/HomePage.vue";
import NewSalePage from "../views/NewSalePage.vue";
import SearchPage from "../views/SearchPage.vue";
import DefaultLayout from "../components/DefaultLayout.vue";

const routes = [
   {
      path: "/",
      component: DefaultLayout,
      children: [
         {
            path: '/',
            name: 'home',
            component: HomePage,
         },
         {
            path: '/newSale',
            name: 'newSale',
            component: NewSalePage,
         },
         {
            path: '/search',
            name: 'search',
            component: SearchPage,
         },
      ]
   }
];

const router = createRouter({
   history: createWebHistory(),
   routes
});

export default router;