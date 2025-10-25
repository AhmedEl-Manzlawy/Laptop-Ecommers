import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import mitt from "mitt";

import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useUserStore } from "./stores/useUserStore";
import { useCartStore } from "./stores/useCart";

const Emitter = mitt();
const vuetify = createVuetify({ components, directives });

createApp(App)
  .use(vuetify)
  .provide("Emitter", Emitter)
  .use(createPinia())
  .use(router)
  .mount("#app");
const userStore = useUserStore();
userStore.initializeAuth();

const cartStore = useCartStore();
cartStore.loadCartItem();
