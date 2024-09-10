import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '../views/NotFoundView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GaleryView from '../views/SearchView.vue'
import SignInView from '../views/auth/SignInView.vue'
import SignUpView from '../views/auth/SignUpView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/signin',
      component: SignInView
    },
    {
      path: '/signup',
      component: SignUpView
    },
    {
      path: '/about',
      component: AboutView,
      
    },
    {
      path: '/search',
      component: GaleryView
    },
    
    {
      path: '/:catchAll(.*)',
      component: NotFoundView
    }
  ]
})

export default router
