export default {
  // ここでしかstateの内容を変えられないようにする
  updateMessage(state, newMessage) {
    state.message = newMessage;
  } 
}