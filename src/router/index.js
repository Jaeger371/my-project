import { createRouter, createWebHistory } from 'vue-router';
import MainContent from '@/components/MainContent.vue';
import ContactPage from '@/components/ContactPage.vue';
import MapView from '@/components/MapView.vue';
import AboutPage from '@/components/AboutPage.vue';
import EnterCodePage from '@/components/EnterCodePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainContent,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
  {
    path: '/enter-code',
    name: 'EnterCode',
    component: EnterCodePage,
  },
  {
    path: '/map',
    name: 'Map',
    component: MapView,
  },
  // Catch-all route to handle unknown paths
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

// Optional: Add global navigation guards if necessary
// Example: Log route changes
router.beforeEach((to, from, next) => {
  console.log(`Navigating from ${from.name || 'unknown'} to ${to.name}`);
  next();
});

export default router;
