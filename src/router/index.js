import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Features from '../views/Features.vue'
import Pricing from '../views/Pricing.vue'
import Blog from '../views/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/features',
    name: 'Features',
    component: Features
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log('Global beforeEach triggered');

//   // Закрываем бургер-меню (или любой другой элемент) при переходе
//   const app = router.app; // Получаем доступ к корневому экземпляру Vue
//   if (app && app.$root && app.$root.isOpen !== undefined) {
//     app.$root.isOpen = false;
//     app.$root.isShow = false;
//   }

//   // Убираем класс no-scroll с body
//   if (document.body.classList.contains('no-scroll')) {
//     document.body.classList.remove('no-scroll');
//   }

//   // Разрешаем переход
//   next();
// });

export default router
