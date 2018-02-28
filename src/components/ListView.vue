<template>
  <ul>
    <list-item v-for="item of items" v-bind:key="item">{{ item }}</list-item>
  </ul>
</template>

<script>
import Vue from "vue";
import ListItem from "./ListItem";

export default {
  components: { ListItem },
  name: "list-view",
  data() {
    return {
      items: []
    };
  },
  methods: {
    loadItems: function() {
      Vue.http
        .get(
          "https://search.nintendo-europe.com/nl/select?q=Mario%20Kart%208%20Deluxe&rows=5&start=0&wt=json&fq=type:GAME%20AND%20system_type:nintendoswitch*%20AND%20product_code_txt:*"
        )
        .then(
          response => {
            console.log("Response:");
            console.log(response);
            this.items = ["ABC", "DEF"];
          },
          error => {
            console.log("!");
            console.log(error);
          }
        );
    }
  },
  beforeMount() {
    this.loadItems();
  }
};
</script>

<style scoped>

</style>
