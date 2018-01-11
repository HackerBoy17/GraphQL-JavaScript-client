import Vue from 'vue';
import App from './App.vue';
import apolloProvider from './apollo-provider';
import Router from './router/index';

new Vue({
  el: '#app',
  apolloProvider,
  Router,
  render: h => h(App)
})
