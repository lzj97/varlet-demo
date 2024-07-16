import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../components/home.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../components/about.vue"),
    },
  ],
});

export default router;
