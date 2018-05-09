import Vue from "vue";
import Router from "vue-router";
import ActorList from "../components/ActorList";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "actor-list",
      component: ActorList
    }
  ]
});
