import Vue from "vue";
import VueRouter from "vue-router";
import StartPage from "@/views/StartPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "startPage",
    component: StartPage,
  },
  {
    path: "/gamePage",
    name: "gamePage",
    component: () => import("@/views/GamePage.vue"),
  },
  {
    path: "/",
    name: "resultPage",
    component: () => import("@/views/ResultPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
