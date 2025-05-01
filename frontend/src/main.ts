import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routing/routing";

createApp(App).use(router).mount("#app");
