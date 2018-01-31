import Vue from 'vue'
import 'babel-polyfill';

import App from './App.vue'
import router from './router';

Vue.filter('currency', (value) => {
  return `$ + ${value.toLocaleString()}`;
});

Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook'); // is used in every component that's why it is called so many times
  },
});

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = 'green';
    el.style.backgroundColor = binding.value;

    if (binding.arg == 'background') {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  },
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
