<template>
  <div class="Detail">
    <h1>{{ sharedState.selected_hero.name }}</h1>
    <p>id: {{ sharedState.selected_hero.id }}</p>
    <p>name: </p>
    <input v-model="new_name">
    <div class="trans-button">
      <button @click="back">go back</button>
      <button @click="update">save</button>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'Detail',
  data() {
    return {
      sharedState: store.state,
      new_name: ''
    }
  },
  methods: {
    back() {
      this.$router.push({name: 'heroes'})
    },
    update() {
      store.actions.updateHero(this.new_name)
      this.$router.push({name: 'heroes'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
