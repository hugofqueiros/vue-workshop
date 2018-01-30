import Vue from 'vue'
import 'babel-polyfill';

import App from './App.vue'
import router from './router';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
