<template>
  <div class="Heroes">
    <h1>My Heroes</h1>
    <heroes-add @add="add"></heroes-add>
    <heroes-list @remove="remove" @select="select" :heroes="sharedState.heroes"></heroes-list>
  </div>
</template>

<script>
import HeroesAdd from '@/components/HeroesAdd'
import HeroesList from '@/components/HeroesList'
import store from '../store'
export default {
  name: 'Heroes',
  data() {
    return {
      sharedState: store.state
    }
  },
  components: {
    'heroes-add': HeroesAdd,
    'heroes-list': HeroesList
  },
  methods: {
    add(newHero) {
      store.actions.addHero(newHero)
    },
    select(id) {
      store.actions.selectHero(id)
      this.$router.push({name: 'detail', params:{id}})
    },
    remove(id) {
      store.actions.removeHero(id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
