export default {
  // 非同期的にmutationsを使う場合actionsを使う
  // ここのupdateMessageはmutaionsのupdateMessageを呼んでいる
  // コンポーネントからcommitはしないという考えもあり
  updateMessage(context, newMessage) {
    this.commit("updateMessage", newMessage);
  }
}