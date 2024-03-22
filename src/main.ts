import { createApp } from "vue";
import App from "./App.vue";
import myUi from "../packages/index";

createApp(App).use(myUi).mount("#app");
