import Vue from 'vue';
import Vuex from 'vuex';
import count from "./modules/count";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  // グローバル変数的な部分
  state: {
    message: ""
  },
  getters,
  mutations,
  actions,
  // getters: {
  //   // 変更しなくても定義することで一貫性を維
  //   message: state => state.message
  // },
  // mutations: {
  //   // ここでしかstateの内容を変えられないようにする
  //   updateMessage(state, newMessage) {
  //     state.message = newMessage;
  //   } 
  // },
  // actions: {
  //   // 非同期的にmutationsを使う場合actionsを使う
  //   // ここのupdateMessageはmutaionsのupdateMessageを呼んでいる
  //   // コンポーネントからcommitはしないという考えもあり
  //   updateMessage(context, newMessage) {
  //     this.commit("updateMessage", newMessage);
  //   }
  // },
  modules: {
    count
  }
});
