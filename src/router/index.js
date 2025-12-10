import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Destination from "@/pages/Destination.vue";
import Activity from "@/pages/Activity.vue";
import Info from "@/pages/TipsInfo.vue";
import Gallery from "@/pages/Gallery.vue";
import FAQ from "@/pages/FAQ.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination",
    name: "Destination",
    component: Destination,
  },
  {
    path: "/activity",
    name: "Activity",
    component: Activity,
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active-link",

  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
