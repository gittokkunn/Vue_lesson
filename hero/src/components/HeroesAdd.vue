<template>
  <div class="HeroesAdd">
    <span>名前：</span>
    <input v-model="input.name" placeholder="名前を入力">
    <button @click="save">add</button>
  </div>
</template>

<script>
export default {
  name: 'HeroesAdd',
  data() {
    return {
      input: {
        name: ''
      }
    }
  },
  methods: {
    save() {
      // this.input のクローンを生成する
      const data = Object.assign({}, this.input, {name: this.input.name})
      // 'add'イベントを自身にトリガーする
      this.$emit('add', data)
    }
  }
}
</script>
