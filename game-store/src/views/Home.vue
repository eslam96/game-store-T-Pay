<template>
  <div class="home">
    <Banner :firstGame="games[0]" />
    <List :content="getRecommended" :text="'Most Recommendations'" />
    <List :content="getPopular" :text="'Most Popular'" />
    {{ filter }}
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "../components/Banner";
import List from "../components/gameList";

export default {
  name: "Home",
  data() {
    return {
      current: {}
    };
  },
  components: {
    Banner,
    List
  },
  props: {
    games: Array,
    first: Object
  },
  computed: {
    getRecommended() {
      const recommended = this.games.filter(
        element => element.Recommended === true
      );
      return recommended;
    },
    getPopular() {
      const popular = this.games.filter(
        element => element.Popular === true
      );
      return popular;
    }
  }
};
</script>
