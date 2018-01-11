import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'root',
    component: '../App',
  },
]
const Router = new VueRouter({
  routes,
  mode: 'history',
});

export default Router;
