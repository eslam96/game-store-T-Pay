<template>
  <div class="banner row">
    <div class="col-lg-8 bannerImg">
      <img :src="getImgUrl.cover" alt="" />
    </div>
    <div class="col-lg-4 detailsContainer">
      <h3>{{ getGameData.GameName }}</h3>
      <p>{{ getGameData.developer }}</p>
      <p>
        {{ getGameData.prief }}
      </p>
      <span>{{ getGameData.downloads }}</span>
      <router-link :to="{ name: 'gameView', params: { id: getGameData.id } }">
      <Button class="btn" text="more info" />
    </router-link>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "Banner",
  props: {
    firstGame: Object
  },
  components: {
    Button
  },
  computed: {
    getGameData() {
      const data = { ...this.firstGame };
      return data;
    },
    getImgUrl() {
      return {
        ...this.getGameData,
        cover: this.getGameData.cover && require(`../assets/images/${this.getGameData.cover}`),
      };
    }
  }
};
</script>

<style scoped>
.row > * {
  padding: 0;
}
.banner {
  background-color: #fff;
  border-radius: 5px;
  padding: 0;
}
img {
  width: 100%;
  height: 100%;
}

.detailsContainer {
  padding: 20px 40px;
}
h3 {
  font-weight: 500;
  color: #3c3c3d;
}
p {
  line-height: 1.1em;
  font-size: 25px;
  color: #444242;
  margin-bottom: 12px;
}
span {
  font-size: 18px;
  color: #3c3c3d;
  opacity: 50%;
  display: block;
  margin-bottom: 8px;
}
</style>
