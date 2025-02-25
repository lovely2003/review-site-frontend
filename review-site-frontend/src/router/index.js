import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Review from '../views/Review.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/review/:id',
    name: 'Review',
    component: Review,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
