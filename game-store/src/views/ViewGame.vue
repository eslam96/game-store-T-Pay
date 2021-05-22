<template>
  <Preview :data="currentGame[0]" />
  <List :content="getRecommended" :text="'Most Recommendations'" />
</template>

<script>
import Preview from "../components/gamePreview";
import List from "../components/gameList";
export default {
  name: "GameView",
  components: {
    Preview,
    List
  },
  props: {
    id: Number,
    games: Array
  },
  computed: {
    currentGame() {
      const game = this.games.filter(element => element.id === +this.id);
      return game;
    },
    getRecommended() {
      const recommended = this.games.filter(
        element => element.Recommended === true
      );
      return recommended;
    }
  }
};
</script>
