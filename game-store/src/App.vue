<template>
  <Navbar />
  <Slider />
  <div class="container mainContainer my-5">
    <router-view :games="games" :first="firstObj" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import axios from "axios";

export default {
  name: "App",
  components: {
    Navbar,
    Slider
  },
  data() {
    return {
      games: []
    };
  },
  async created() {
    const { data } = await axios.get(
      "https://my-json-server.typicode.com/eslam96/game-store/db"
    );
    const games = data.games;

    games.forEach(element => {
      this.games.push(element);
    });
  }
};
</script>
