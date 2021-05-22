<template>
  <button @click="onClick()" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String
  },
  methods: {
    onClick() {
      this.$emit("btnClick");
    }
  }
};
</script>

<style scoped>
button {
  width: 100%;
  background-color: #572589;
  color: #fff;
  text-transform: uppercase;
}
button:hover {
  background-color: #fff;
  color: #572589;
  border: 2px solid #572589;
}
</style>
