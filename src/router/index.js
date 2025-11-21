import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Destination from "@/pages/Destination.vue";
import Activity from "@/pages/Activity.vue";
import Info from "@/pages/TipsInfo.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
