<template>
  <div>
    <p v-border:dotted.round.shadow="{width: '5px', color: 'red'}">{{ tmpData }}</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tmpData: "hello"
    };
  },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      // 修飾子にroundが指定されているか？
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      // 修飾子にshadowが指定されているか？
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
      }
    }
  }
}
</script>
