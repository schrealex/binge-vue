import Vue from "vue";
import App from "./App";
import router from "./router";
import VueResource from "vue-resource";
import SwitchEshop from "nintendo-switch-eshop";

Vue.use(VueResource);
Vue.use(SwitchEshop);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
