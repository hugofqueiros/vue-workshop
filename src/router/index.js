import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';
import Components from '../components/comp/components.vue';
import DC from '../components/1 - dynamic-comp/dc.vue';
import Filter from '../components/2 - filter/filter.vue';
import Directives from '../components/3 - directives/directives.vue';

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
    }, { // passing content with slots, dynamic components
      path: '/dc',
      name: 'dc',
      component: DC
    }, {
      path: '/directives',
      name: 'directives',
      component: Directives
    }, {
      path: '/filters',
      name: 'filters',
      component: Filter
    }
  ]
});
