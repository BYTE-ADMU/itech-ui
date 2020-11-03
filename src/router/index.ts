import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';

Vue.use(VueRouter);

// Lazy Loaded Component
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
