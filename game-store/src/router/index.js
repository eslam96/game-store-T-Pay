import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import GameView from "../views/ViewGame";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:id",
    name: "gameView",
    component: GameView,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
