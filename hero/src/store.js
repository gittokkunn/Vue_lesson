const state = {
  heroes: [
    {id: 1, name: 'takeru'},
    {id: 2, name: 'satoshi'},
    {id: 3, name: 'sizuku'},
  ],
  selected_hero: {
    id: '',
    name: '',
  }
}

const actions = {
  addHero(newHero) {
    // heroes の中のheroで一番大きい id に 1 を足した値を取得する
    newHero.id = state.heroes.reduce((id, hero) => {
      return id < hero.id ? hero.id : id
    }, 0) + 1
    state.heroes.push(newHero)
  },
  removeHero(id) {
    const targetId = parseInt(id, 10)
    // heroes の中から id が一致するメモの index を取得する
    const index = state.heroes.findIndex((hero) => {
      return hero.id === targetId
    })
    state.heroes.splice(index, 1)
  },
  selectHero(id) {
    const hero = state.heroes.find((hero) => {
      return hero.id === id
    })
    state.selected_hero = Object.assign({id: hero.id, name:hero.name})
  },
  updateHero(newName) {
    const hero = state.heroes.find((hero) => {
      return hero.id === state.selected_hero.id
    })
    hero.name = newName
  }
}

export default {
  state,
  actions
}
