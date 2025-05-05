import Aura from "@primeuix/themes/aura";
import PrimeVue from "primevue/config";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routing/routing";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(PrimeVue, {
	theme: {
		preset: Aura,
	},
});
app.mount("#app");
