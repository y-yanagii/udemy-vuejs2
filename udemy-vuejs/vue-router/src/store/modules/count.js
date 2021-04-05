const state = {
  count: 2
};

const getters = {
  // 上のstateオブジェクトを取ってる
  doubleCount: state => state.count * 2,
  tripleCount: state => state.count * 3,
};

const mutations = {
  increment(state, number) {
    state.count += number;
  },
  decrement(state, number) {
    state.count -= number;
  },
};

const actions = {
  // 非同期的にmutationsを使う場合actionsを使う
  // ここのincrementはmutaionsのincrementを呼んでいる
  // コンポーネントからcommitはしないという考えもあり
  increment(context, number) {
    context.commit('increment', number);
    // contextでは(context.state, context.getters)なんかも参照できる
  },
  decrement(context, number) {
    context.commit('decrement', number);
  },
};

// 上のオブジェクトをexport
export default {
  state,
  getters,
  mutations,
  actions
};