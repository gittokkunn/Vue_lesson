<template>
  <div class="Heroes">
    <h1>My Heroes</h1>
    <heroes-add @add="add"></heroes-add>
    <heroes-list @remove="remove" @select="select" :heroes="heroes"></heroes-list>
  </div>
</template>

<script>
import HeroesAdd from '@/components/HeroesAdd'
import HeroesList from '@/components/HeroesList'
export default {
  name: 'Heroes',
  data() {
    return {
      heroes: [
          {
            id: 1,
            name: "tokkunn"
          },
          {
            id: 2,
            name: "tokumaru"
          }
        ]
      }
  },
  components: {
    'heroes-add': HeroesAdd,
    'heroes-list': HeroesList
  },
  methods: {
    add(newHero) {
      this.heroes.push(newHero)
    },
    select(id) {
      this.$router.push({name: 'detail', params: {id}})
    },
    remove(id) {
      const index = this.heroes.findIndex((hero) => {
          return hero.id === id
        })
        this.heroes.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
