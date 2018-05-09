<template>
  <div id="app">
    <div class="page-container">
      <md-app md-waterfall md-mode="overlap">
        <md-app-toolbar class="md-primary md-large">
          <div class="md-toolbar-row">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
            
            <span class="md-title">B I N G E</span>
          </div>
        </md-app-toolbar>
       
        <md-app-drawer :md-active.sync="menuVisible">
          <side-menu />
        </md-app-drawer>

        <md-app-content>
          <router-view/>
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu";

export default {
  components: { SideMenu },
  name: "App",
  data: function data() {
    return {
      menuVisible: false
    };
  }
};
</script>

<style>
.md-app-content {
  max-height: 800px;
}

.md-drawer {
  width: 300px;
  max-width: calc(100vw - 125px);
}
</style>
