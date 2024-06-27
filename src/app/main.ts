import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import moment from "moment";

moment.locale("ru");

const app = createApp(App);
app.use(createPinia());
app.mount("#app");
