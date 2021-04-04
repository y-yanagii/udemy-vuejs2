<template>
  <div style="width:700px; margin: auto; padding-top: 50px;">
    <router-view name="header"></router-view>
    <transition
      name="fade"
      mode="out-in"
      @before-enter="beforeEnter"
      >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import Home from "./views/Home.vue";

export default {
  components: {
    // Home
  },
  methods: {
    beforeEnter() {
      this.$root.$emit('triggerScroll');
    }
  }
}
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
