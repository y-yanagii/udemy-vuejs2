<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input
      type="text"
      v-model="message"
      >
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["doubleCount", "tripleCount"]),
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("updateMessage", value);
      }
    }
  },
  methods: {
    // updateMessage(e) {
    //   // store.jsのactionsのupdateMessageを呼んでいる引数に入力したmessageをセット
    //   this.$store.dispatch("updateMessage", e.taget.value)
    // },
    toUsers() {
      // or this.$router.push({ path: "users" });
      // this.$router.push("users");
      this.$router.push({
        name: 'users-id-profile',
        params: { id: 1 }
      })
    }
  }
}
</script>
