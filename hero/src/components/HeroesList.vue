<template>
    <div class="Heroes-List">
      <h1>My Heroes</h1>
      <ul>
        <li v-for="hero in heroes">
          <a @click="select(hero.id)">
            <span class="badge">{{ hero.id }}</span>{{hero.name}}
          </a>
          <button @click="remove(hero.id)">remove</button>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HeroesList',
  props: {
    heroes: Array
  },
  methods: {
    remove(id) {
      this.$emit("remove", id)
    },
    select(id) {
      this.$emit("select", id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
