import Vue from 'vue'
import App from './App.vue'

// コンソールにビルドした時のおきまりを説明してくれる文言を流す(trueの場合)
Vue.config.productionTip = false

// vueファイルはimportして使う。importするとコンポーネントのオブジェクトを返す
console.log(App);

new Vue({
  render: h => h(App),
}).$mount('#app')
// .$mount('#app')はel: '#app'と同様
