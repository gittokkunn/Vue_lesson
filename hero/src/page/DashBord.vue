<template>
  <div class="Dashbord">
    <heroes-top :heroes="sharedState.heroes"></heroes-top>
    <heroes-search @select="select":heroes="sharedState.heroes"></heroes-search>
  </div>
</template>

<script>
import HeroesTop from '@/components/HeroesTop'
import HeroesSearch from '@/components/HeroesSearch'
import store from '../store'
export default {
  name: 'DashBord',
  data() {
    return {
      sharedState: store.state
    }
  },
  methods: {
    select(id) {
      store.actions.selectHero(id)
      this.$router.push({name: 'detail', params: {id}})
    }
  },
  components: {
    'heroes-top': HeroesTop,
    'heroes-search': HeroesSearch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
