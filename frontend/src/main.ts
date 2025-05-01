import Aura from "@primeuix/themes/aura";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routing/routing";

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
	theme: {
		preset: Aura,
	},
});
app.mount("#app");
