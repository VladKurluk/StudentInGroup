import Vue from 'vue';
import Router from 'vue-router';
import Students from './views/Students.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'students',
      component: Students,
    },
    {
      path: '/courses',
      name: 'courses',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "courses" */ './views/Courses.vue'),
    },
  ],
});
