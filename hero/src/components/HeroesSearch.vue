<template>
  <div class="HeroesSearch">
    <h1>Heroes Search</h1>
    <input type="text" v-model="search_name">
    <ul class="search-result">
      <li v-for="hero in searched_heroes">
        <a @click="select(hero.id)">
          {{hero.name}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'HeroesSearch',
  data() {
    return {
      searched_heroes: '',
      search_name: ''
    }
  },
  props: {
    heroes: Array
  },
  methods: {
    select(id) {
      this.$emit("select", id)
    },
    searchHero() {
      this.searched_heroes = []
      this.heroes.forEach((hero) => {
        if(hero.name.match(this.search_name) && this.search_name !== '') {
          this.searched_heroes.push(hero)
        }
      })
    }
  },
  watch: {
    search_name: 'searchHero'
  }
}
</script>
