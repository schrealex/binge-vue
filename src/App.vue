<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <list-item></list-item>
  </div>
</template>

<script>
  import ListItem from "./components/ListItem";

  export default {
    components: {ListItem},
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
