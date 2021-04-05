import Vue from 'vue';
import App from './App.vue';
import router from "./router.js";
import store from "./store/index.js";

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   // to,fromには$routeの情報が入る（今のroute情報と次のroute情報）
//   // nextは次に行くと言う意味(nextがないとAからBに行くができない)
//   console.log("global-beforeEach");
//   if (to.path === '/users/1') {
//     // nextで移動で/に移動している
//     next({ path: '/' });
//   }
//   next();
// })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
