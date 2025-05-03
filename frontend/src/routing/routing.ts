import { createRouter, createWebHistory } from "vue-router";
import LocalGameView from "../views/LocalGameView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
	{ path: "/", component: HomeView },
	{ path: "/local-game/:gameId", component: LocalGameView },
	{ path: "/:pathMatch(.*)*", component: HomeView },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
