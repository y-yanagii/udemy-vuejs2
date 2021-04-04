import Vue from 'vue';
import Router from 'vue-router';

// import Home from "./views/Home.vue";
// import Users from "./views/Users.vue";
// import UsersPosts from "./views/UsersPosts.vue";
// import UsersProfile from "./views/UsersProfile.vue";
// import HeaderHome from "./views/HeaderHome.vue";
// import HeaderUsers from "./views/HeaderUsers.vue";
// 動的importでSPAにおいて本当に必要になった時にvueファイルを取ってくる
const Home = () => import( /* webpackChunkName: "Home" */ "./views/Home.vue");
const Users = () => import( /* webpackChunkName: "Users" */ "./views/Users.vue");
const UsersPosts = () => import( /* webpackChunkName: "Users" */ "./views/UsersPosts.vue");
const UsersProfile = () => import( /* webpackChunkName: "Users" */ "./views/UsersProfile.vue");
const HeaderHome = () => import( /* webpackChunkName: "HeaderHome" */ "./views/HeaderHome.vue");
const HeaderUsers = () => import( /* webpackChunkName: "Users" */ "./views/HeaderUsers.vue");

// Vue.useはpluginを提供
// プラグインとはグローバルな機能を提供する(Vue.js全体に影響を与えるもの)
// VueRouterを使う宣言(VueRouterを適応させる宣言は別途必要（main.js）)
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { 
      path: "/",
      components: {
        default: Home,
        header: HeaderHome
      },
      // beforeEnter(to, from, next) {
      //   // falseは行かない
      //   next(false);
      // }
    },
    {
      path: "/users/:id",
      components: {
        default: Users,
        header: HeaderUsers
      },
      props: {
        default: true,
        header: false
      },
      children: [
        // ネストするurlはchildrenを使う
        { path: "posts", component: UsersPosts },
        { path: "profile", component: UsersProfile, name: "users-id-profile" }
      ]
    },
    {
      // *は全て/user*とか書けるマッチしなければ全てリダイレクトされる
      path: "*",
      redirect: { path: "/" }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      // this === 上のnew Routerを指す
      this.app.$root.$once('triggerScroll', () => {
        let position = { x: 0, y: 0 }
        if (savedPosition) {
          position = savedPosition;
        } 
        if (to.hash) {
          position = {
            selector: to.hash
          };
        }
        resolve(position);
      })
    });
  }
});