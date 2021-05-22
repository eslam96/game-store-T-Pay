<template>
  <div class="row gamesContainer">
    <div class="title px-3">
      <h5>{{ text }}</h5>
      <router-link to="">
        see all
        <i class="fas fa-angle-right"></i>
      </router-link>
    </div>

    <GameItem v-for="item in 5" :gameData="getContent[item-1]" :key="item" />
  </div>
</template>

<script>
import GameItem from "./gameItem";
export default {
  name: "List",
  props: {
    text: String,
    content: Array
  },
  components: {
    GameItem
  },
  computed: {
    getContent() {
      const arr = [];
      this.content.forEach(element => {
        arr.push(element);
      });
      return arr;
    }
  }
};
</script>

<style scoped>
.row > * {
  padding: 0;
}

.gamesContainer {
  background-color: #fff;
  box-shadow: 0px 2px 10px #00000012;
  margin-top: 30px;
  justify-content: space-evenly;
  padding: 20px;
  border-radius: 5px;
}

.title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.title h4 {
  color: #232222;
}
.title a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  color: #572589;
}
</style>
