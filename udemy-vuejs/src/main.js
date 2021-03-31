import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';

// コンソールにビルドした時のおきまりを説明してくれる文言を流す(trueの場合)
Vue.config.productionTip = false
// グローバルコンポーネント登録
Vue.component('LikeNumber', LikeNumber);
// カスタムディレクティブ
Vue.directive("border", {
  bind(el, binding, vnode) {
    // ディレクティブが初めて対象の要素に紐付いた時(最初の1度だけ)
  },
  inserted(el, binding, vnode) {
    // 親Nodeに挿入された時(DOMに実際に挿入された時$mountと同様)
  },
  update(el, binding, vnode, oldVnode) {
    // コンポーネントが更新される度。子コンポーネントが更新される前
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    // コンポーネントが更新される度。子コンポーネントが更新された後
  },
  unbind(el, binding, vnode) {
    // ディレクティブがひも付いている要素から取り除かれた時(destroyedと同様)
  }
});

// vueファイルはimportして使う。importするとコンポーネントのオブジェクトを返す
console.log(App);

new Vue({
  render: h => h(App),
}).$mount('#app')
// .$mount('#app')はel: '#app'と同様
