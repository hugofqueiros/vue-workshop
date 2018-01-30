import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';
import Components from '../components/comp/components.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/components',
      name: 'components',
      component: Components
    }
  ]
});
