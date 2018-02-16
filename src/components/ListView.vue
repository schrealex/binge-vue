<template>
  <ul>
    <list-item v-for="item of items" v-bind:key="item.imdbID"><img :src="'http://image.tmdb.org/t/p/w342' + item.profile_path"></list-item>
  </ul>
</template>

<script>
import Vue from 'vue'
import ListItem from './ListItem'

export default {
  components: {ListItem},
  name: 'list-view',
  data () {
    return {
      items: []
    }
  },
  methods: {
    loadItems: function () {
      Vue.http.get('https://api.themoviedb.org/3/search/person?api_key=f16bfeb0210b43f1f12d8d4ccc114ee9&query=Margot%20Robbie').then(response => {
        console.log(response)
        this.items = response.body.results
        console.log(this.items.length)
      })
    }
  },
  beforeMount () {
    this.loadItems()
  }
}
</script>

<style scoped>

</style>
