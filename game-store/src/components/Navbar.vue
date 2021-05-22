<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container">
      <Brand />
      <span class="icons">
        <Search />
        <Login />
      </span>
    </div>
  </nav>
</template>

<script>
import Brand from "./Brand";
import Login from "./Login";
import Search from "./search";
export default {
  name: "Navbar",
  components: {
    Brand,
    Login,
    Search
  }
};
</script>

<style scoped>
nav {
  padding: 20px 0;
  background-color: #fff;
}

.icons {
  display: flex;
  width: 70px;
  justify-content: space-between;
  align-items: center;
}


</style>
