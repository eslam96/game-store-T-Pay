<template>
  <div class="searchContainer">
    <i @click="toggleSearch()" class="fas fa-search" />

    <div v-show="visible" class="searchField">
      <input type="text" name="" id="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    toggleSearch() {
      this.visible = !this.visible;
      if (this.visible) {
        document.querySelector(".fas").classList.remove("fa-search");
        document.querySelector(".fas").classList.add("fa-times");
      } else {
        document.querySelector(".fas").classList.add("fa-search");
        document.querySelector(".fas").classList.remove("fa-times");
      }
    }
  }
};
</script>

<style scoped>
.searchContainer {
  position: relative;
  display: inline-block;
}
.searchField {
  position: absolute;
  top: 0;
  right: 30px;
}
.searchField input {
  width: 300px;
  border: 2px solid #572589;
  border-radius: 15px;
  padding: 1px 10px;
  outline: none;
}
i {
  color: #572589;
  cursor: pointer;
}

@media screen and (max-width : 767px) {
  .searchField input {
  width: 150px;
  padding: 1px 10px;
}
}
</style>
