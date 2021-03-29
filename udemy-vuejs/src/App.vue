<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" test-props="test" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  // ローカルコンポーネント登録
  data() {
    return {
      number: 14,
      currentComponent: "Home"
    }
  },
  components: {
    LikeHeader,
    About,
    Home
  },
  methods: {
    incrementNumber(value) {
      // 個のコンポーネントの$emitの第二引数が入ってくるこの場合LikeNumberのthis.totalNumber++
      this.number = value;
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}

</style>