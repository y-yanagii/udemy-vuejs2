<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :total-number="number" test-props="test" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number" test-props="test"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  // ローカルコンポーネント登録
  data() {
    return {
      number: 14
    }
  },
  components: {
    LikeHeader
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