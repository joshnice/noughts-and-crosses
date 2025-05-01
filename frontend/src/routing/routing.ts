import { createRouter, createWebHistory } from "vue-router";
import GameView from "../views/GameView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
	{ path: "/", component: HomeView },
	{ path: "/game", component: GameView },
	{ path: "/:pathMatch(.*)*", name: "NotFound", component: HomeView },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
