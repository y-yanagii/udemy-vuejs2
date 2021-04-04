<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
  </div>
</template>

<script>
export default {
  methods: {
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
