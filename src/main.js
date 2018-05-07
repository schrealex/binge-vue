// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import VueMaterial from "vue-material";
import {
  MdApp,
  MdButton,
  MdCard,
  MdDrawer,
  MdIcon,
  MdList,
  MdToolbar
} from "vue-material/dist/components";
import App from "./App";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(MdApp);
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdDrawer);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(MdToolbar);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
