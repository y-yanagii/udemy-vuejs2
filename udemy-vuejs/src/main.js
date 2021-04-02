import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';

// コンソールにビルドした時のおきまりを説明してくれる文言を流す(trueの場合)
Vue.config.productionTip = false
// グローバルコンポーネント登録
Vue.component('LikeNumber', LikeNumber);
// グローバルカスタムディレクティブ
// Vue.directive("border", function (el, binding) {
//   el.style.borderWidth = binding.value.width;
//   el.style.borderColor = binding.value.color;
//   el.style.borderStyle = binding.arg;
//   // 修飾子にroundが指定されているか？
//   if (binding.modifiers.round) {
//     el.style.borderRadius = "0.5rem";
//   }
//   // 修飾子にshadowが指定されているか？
//   if (binding.modifiers.shadow) {
//     el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
//   }
// });

// グローバルフィルター
Vue.filter("upperCase", function(value) {
  console.log("フィルター");
  return value.toUpperCase();
});

// グローバルミックスイン
// Vue.mixin({
//   created() {
//     console.log("global mixin");
//   }
// })

// vueファイルはimportして使う。importするとコンポーネントのオブジェクトを返す
console.log(App);

new Vue({
  render: h => h(App),
}).$mount('#app')
// .$mount('#app')はel: '#app'と同様
