<template>
  <nav>
    <h2>Home</h2>
      <router-link
        to="/"
        active-class="link--active"
        exact
        class="link"
      >Home</router-link>
      <router-link
        :to="{ name: 'users-id-profile', params: { id: 1 }, query: { lang: 'ja', page: 2 }, hash: '#next-user' }"
        active-class="link--active"
        exact
        class="link"
      >Users</router-link>
      <!-- mapMutationsヘルパーでmutationsnのincrementを呼ぶ<button @click="increment(2)">+1</button> -->
      <button @click="increment">+1</button>
      <button @click="decrement(2)">-1</button>
    </nav>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrement"]),
    increment() {
      // mutationsのincrementを呼ぶ
      // this.$store.commit("increment", 2);
      // actionsのincrementを呼ぶ
      this.$store.dispatch('increment', 2);
    },
    decrement() {
      this.$store.commit("decrement", 2);
    }
  }
}
</script>


<style scoped>
  .link {
    margin-right: 10px;
  }
  .link--active {
    font-size: 20px;
  }
</style>