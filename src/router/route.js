import Vue from 'vue';
import Router from 'vue-router';
import Search from '@/components/Search';
import Display from '@/components/Display';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search,
    },
    {
      path: '/:query',
      name: 'Display',
      component: Display,
    },
  ],
});
