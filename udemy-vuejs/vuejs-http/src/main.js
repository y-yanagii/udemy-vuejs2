import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

Vue.config.productionTip = false

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-http-170f0/databases/(default)/documents";

// インターセプター（リクエスト時の共通処理）
// サーバに行く前に実行
const interceptorsRequest = axios.interceptors.request.use(
  config => {
    // リクエストする際に正常な場合実行
    console.log('interceptors request', config);
    // 例えば、ヘッダーにトークンをつける時、認証されてたらトークンつけるとか逆ならつけないとか
    // config.headers['jijfeijwijf'] = 'jfjiejwf';
    // 必ずreturnで返すこと
    return config;
  },
  error => {
    // リクエストする際にエラーの場合実行
    console.log('interceptors request', error);
    // 必ずreturnで返すことerrorの場合ただのreturn errorだとthenに入ってしまうので、
    // 例えばエラーが起きたらおきました〜のモーダル表示したり
    // axios.get()
    // catchに行くようにすること
    return Promise.reject(error);
  }
);
// サーバに行った後に実行
const interceptorsResponse = axios.interceptors.response.use(
  response => {
    console.log('interceptors response', response);
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);
console.log(interceptorsRequest);
console.log(interceptorsResponse);
// インターセプターを適応させたくない場合
axios.interceptors.request.eject(interceptorsRequest);
axios.interceptors.response.eject(interceptorsResponse);

new Vue({
  render: h => h(App),
}).$mount('#app')
