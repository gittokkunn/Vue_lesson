<template>
  <div id="app">
    <editor-view @add="add"></editor-view>
    <list-view :memos="memos" @remove="remove"></list-view>
  </div>
</template>

<script>
  import EditorView from './components/EditorView'
  import ListView from './components/ListView'

  export default {
   name: 'app',
   data() {
    return {
      memos: [
        {
          id: 1,
          text: 'テスト',
          date: '16-10-28',
          tags: ['タグ１', 'タグ２']
        }
      ]
    }
  },
  computed: {
    nextId() {
      return this.memos.reduce((id, memo) => {
        return id < memo.id ? memo.id : id
      }, 0) +  1
    }
  },
  methods: {
    add(newMemo) {
      newMemo.id = this.nextId
      this.memos.push(newMemo)
    },
    remove(id) {
      const index = this.memos.findIndex((memo) => {
        return memo.id === id
      })
      this.memos.splice(index, 1)
    }
  },
  components: {
    'editor-view': EditorView,
    'list-view': ListView
  }
  }
</script>
