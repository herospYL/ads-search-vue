import Vue from 'vue';
import Router from 'vue-router';
import Search from '@/components/Search';
import Display from '@/components/Display';
import ContentGrid from '@/components/ContentGrid';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search,
    },
    {
      path: '/search',
      name: 'Display',
      component: Display,
      children: [
        {
          path: 'content',
          name: 'Content',
          component: ContentGrid,
        },
      ],
    },
  ],
});
