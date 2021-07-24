import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "startPage",
    component: () => import("@/views/StartPage.vue"),
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
