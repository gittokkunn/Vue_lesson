<template>
    <div class="Heroes-Top">
      <h1>Top Heroes</h1>
      <ul>
        <li v-for="hero in heroes">{{ hero.name }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HeroesTop',
  props: {
    heroes: Array
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
