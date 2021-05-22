<template>
  <div class="sliderContainer">
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide v-for="slide in 15" :key="slide">
        <SliderItem
          @toggleActive="activeCat"
          :text="categories[slide - 1] ? categories[slide - 1] : 'category'"
        />
      </slide>
    </carousel>
  </div>
</template>

<script>
import SliderItem from "./sliderItem";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "Slider",
  components: {
    SliderItem,
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  data() {
    return {
      categories: [
        "Action",
        "Arcade",
        "Adventure",
        "Sports",
        "Racing",
        "Puzzle",
        "Action",
        "Arcade",
        "Adventure",
        "Sports",
        "Racing",
        "Puzzle",
        "Action",
        "Arcade",
        "Adventure"
      ],
      settings: {
        itemsToShow: 10,
        snapAlign: "center"
      },
      breakpoints: {
        // 700px and up
        320: {
          itemsToShow: 3.5,
          snapAlign: "center"
        },
        769: {
          itemsToShow: 5.5,
          snapAlign: "center"
        },
        // 1024 and up
        1200: {
          itemsToShow: 8.5,
          snapAlign: "start"
        },
        1400:{
          itemsToShow: 10.5,
          snapAlign: "start"
        }
      }
    };
  },
  methods: {
    activeCat() {}
  }
};
</script>

<style scoped>
.sliderContainer {
  background-color: #fff;
  padding: 10px 5px;
  cursor: grab;
}
.sliderContainer:active {
  cursor: grabbing;
}
</style>
