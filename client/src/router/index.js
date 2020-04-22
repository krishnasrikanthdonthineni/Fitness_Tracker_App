import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue';
import PrivateFeed from '../views/PrivateFeed.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';

import { CurrentUser } from '../models/Users';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/privatefeed', name: 'PrivateFeed', component: PrivateFeed , meta: { isSecret: true } },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  {
    path: '/User',
    name: 'User',
    component: ()=> import('../views/User.vue')
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/BmiCalculator',
    name: 'BmiCalculator',
    component: ()=> import('../views/BmiCalculator.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


router.beforeEach( (to, from, next) => {
  if( to.meta.isSecret && !CurrentUser) next('/login');
  else next();
});




export default router
