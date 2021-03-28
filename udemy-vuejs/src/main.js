import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';

// コンソールにビルドした時のおきまりを説明してくれる文言を流す(trueの場合)
Vue.config.productionTip = false
// グローバルコンポーネント登録
Vue.component('LikeNumber', LikeNumber);

// vueファイルはimportして使う。importするとコンポーネントのオブジェクトを返す
console.log(App);

new Vue({
  render: h => h(App),
}).$mount('#app')
// .$mount('#app')はel: '#app'と同様
