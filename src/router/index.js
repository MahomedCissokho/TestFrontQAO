import { createRouter, createWebHistory } from 'vue-router';
import NotFoundView from '../views/NotFoundView.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import GaleryView from '../views/SearchView.vue';
import SignInView from '../views/auth/SignInView.vue';
import SignUpView from '../views/auth/SignUpView.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView, meta: { requireAuth: true } },
    { path: '/signin', component: SignInView },
    { path: '/signup', component: SignUpView },
    { path: '/about', component: AboutView, meta: { requireAuth: true } },
    { path: '/search', component: GaleryView, meta: { requireAuth: true } },
    { path: '/:catchAll(.*)', component: NotFoundView }
  ]
});

const getCurrentUser = () => {
  const auth = getAuth();
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); 
      resolve(user);
    }, reject);
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    const user = await getCurrentUser();
    if (!user) {
      alert('You must be logged in to access this page')
      next('/signin')
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
