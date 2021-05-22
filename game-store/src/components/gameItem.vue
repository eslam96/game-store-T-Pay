<template>
  <div class="gameItem col-lg-2 col-sm-12">
    <span class="rate">
      <i class="fas fa-star"></i>
      {{ getGameData.Rate }}
    </span>

    <img :src="getImgUrl.cover" alt="" />
    <p class="title">{{ getGameData.GameName }}</p>
    <router-link :to="{ name: 'gameView', params: { id: getGameData.id } }">
      <Button class="btn" text="more info" />
    </router-link>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "GameItem",
  components: {
    Button
  },
  props: {
    gameData: Object
  },
  computed: {
    getGameData() {
      const data = { ...this.gameData };
      return data;
    },
    getImgUrl() {
      return {
        ...this.getGameData,
        cover:
          this.getGameData.cover &&
          require(`../assets/images/games/${this.getGameData.cover}`)
      };
    }
  }
};
</script>

<style scoped>
.gameItem {
  position: relative;
}
img {
  width: 100%;
  border-radius: 10px;
}
.rate {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #fff;
  color: #060606;
  font-size: 12px;
  font-weight: bold;
  padding: 1px 3px;
  border-radius: 10px;
}
.rate i {
  color: #572589;
}
p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@media screen and (max-width: 767px) {
  .gameItem {
    margin-bottom: 30px;
  }
}
</style>
