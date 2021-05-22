<template>
  <router-link class="navbar-brand" to="/">
    <img src="@/assets/images/logo.png" alt="" />
    <span>Game Store</span>
  </router-link>
</template>

<script>
export default {
  name: "Brand"
};
</script>

<style scoped>
* {
  color: #572589;
}

.navbar-brand img {
  width: 80px;
  height: 40px;
}
.navbar-brand span {
  font-size: 25px;
  vertical-align: middle;
  padding-left: 5px;
}
</style>
