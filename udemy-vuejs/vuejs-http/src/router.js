import Vue from 'vue';
import Router from 'vue-router';
import Comments from './views/Comments.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import store from './store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Comments,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          // アクセストークンがある場合、そのままnext()で画面遷移
          next();
        } else {
          // アクセストークンがなければログイン画面に遷移
          next('/login');
        }
      }
    },
    {
      path: '/login',
      component: Login,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          // アクセストークンがある場合、掲示板ページに遷移
          next('/');
        } else {
          // アクセストークンがなければそのままnext()でログイン画面遷移
          next();
        }
      }
    },
    {
      path: '/register',
      component: Register,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          // アクセストークンがある場合、掲示板ページに遷移
          next('/');
        } else {
          // アクセストークンがなければそのままnext()でユーザ登録ページ画面遷移
          next();
        }
      }
    },
  ]
})