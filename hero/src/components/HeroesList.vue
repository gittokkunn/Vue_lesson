<template>
    <div class="Heroes-List">
      <ul>
        <li v-for="hero in heroes">
          <a @click="select(hero.id)">
            <span class="badge">{{ hero.id }}: </span>{{hero.name}}
            <button @click.stop="remove(hero.id)">remove</button>
          </a>
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
