<template>
  <span @click="setActive" :class="{ activated: active }"
    >{{ text }}
    <i v-show="active" class="fas fa-check"></i>
  </span>
</template>

<script>
export default {
  name: "SliderItem",
  data() {
    return {
      active: this.state
    };
  },
  props: {
    text: String
  },
  methods: {
    setActive() {
      this.active = !this.active;
      this.$emit("toggleActive");
    }
  }
};
</script>

<style scoped>
span {
  width: 120px;
  color: #545454;
  padding: 1px 6px;
  border: 2px solid #d2d2d2;
  border-radius: 11px;
  cursor: pointer;
  position: relative;
}
span i {
  position: absolute;
  right: 2px;
  top: 5px;
}
.activated {
  background-color: #572589;
  color: #fff;
  border: 2px solid #572589;
}
</style>
