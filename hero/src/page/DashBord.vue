<template>
  <div class="Dashbord">
    <heroes-top :heroes="heroes"></heroes-top>
    <heroes-search></heroes-search>
  </div>
</template>

<script>
import HeroesTop from '@/components/HeroesTop'
import HeroesSearch from '@/components/HeroesSearch'
export default {
  name: 'DashBord',
  data() {
    return {
      heroes: [
          {
            name: "tokkunn"
          },
          {
            name: "tokumaru"
          }
        ]
      }
  },
  components: {
    'heroes-top': HeroesTop,
    'heroes-search': HeroesSearch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
