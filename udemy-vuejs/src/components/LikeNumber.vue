<template>
  <div>
    <p>いいね({{ halfNumber / 2 }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: ["totalNumber", "testProps"],
  computed: {
    halfNumber() {
      return this.totalNumber / 2
    }
  },
  methods: {
    increment() {
      // 子から親へデータを渡す
      // 子コンポーネントの好きなタイミングで親コンポーネントのイベントを発火させることができる
      this.$emit("my-click", this.totalNumber++);
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>