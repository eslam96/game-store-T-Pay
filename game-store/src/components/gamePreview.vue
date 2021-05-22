<template>
  <div class="row mt-4 previewContainer">
    <div class=" mb-4 col-lg-12">
      <img :src="getImgUrl.cover" alt="" />
    </div>
    <div class="gameDetails col-lg-12">
      <span class="combatible">For Android Only</span>
      <h2>{{ accessData.GameName }}</h2>
      <p class="developer">
        {{ accessData.developer }}
        <span>{{ accessData.downloads }}</span>
      </p>
      <div class="gameInfo">
        <p :style="getHeight">
          {{ accessData.description }}
        </p>
        <span @click="toggleHeight()" class="expand">{{flagText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preview",
  data() {
    return {
      heightFlag: false,
      flagText : 'Read More'
    };
  },
  props: {
    data: Object
  },
  computed: {
    accessData() {
      const data = { ...this.data };
      return data;
    },
    getHeight() {
      if (this.heightFlag) {
        this.flagText = "Read Less";
        return "height : initial";
      }
      this.flagText = "Read More";
      return "height : 100px";
    },
    getImgUrl() {
      return {
        ...this.accessData,
        cover: this.accessData.cover && require(`../assets/images/games/${this.accessData.cover}`),
      };
    }
  },
  methods: {
    toggleHeight() {
      this.heightFlag = !this.heightFlag;
    }
  }
};
</script>

<style scoped>
.row > * {
  padding: 0;
}
img {
  width: 100%;
  height: 300px;
  object-fit: contain;

}
.gameDetails {
  background-color: #fff;
  padding: 20px;
  line-height: 22px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px #00000012;
  position: relative;
}
.gameDetails span {
  display: block;
}
.gameDetails .developer {
  color: #444242;
  font-size: 24px;
}
.gameDetails .developer span {
  font-size: 18px;
  color: #3c3c3d;
  opacity: 50%;
}
.gameInfo {
  color: #444242;
  font-size: 18px;
}
.gameInfo p {
  width: 50%;
  line-height: 2.5em;
  overflow: hidden;
}
.combatible {
  position: absolute;
  top: 5px;
  right: 10px;
  color: #3c3c3d;
  opacity: 50%;
}
.expand {
  color: #572589;
  cursor: pointer;
}
</style>
