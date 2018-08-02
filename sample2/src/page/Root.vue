<template>
  <div>
    <list-view
      :memos="sharedState.memos"
      @remove="remove"
      :count="privateState.count"
      :sort="privateState.sort"
    ></list-view>
    <router-link :to="{name: 'items'}">すべて見る</router-link>
  </div>
</template>

<script>
  import ListView from '../components/ListView'
  export default{
    data() {
      return {
        count: 3,
        sort: 'latest'
      }
    },
    methods: {
      remove(id) {
        store.actions.removeMemo(id)
      }
    },
    components: {
      ListView
    }
  }
</script>
