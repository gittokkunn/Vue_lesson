import DashBord from './page/DashBord'
import Heroes from './page/Heroes'
import Detail from './page/Detail'
// import Items from './page/Items'
// import EditorView from './components/EditorView'

export default {
  mode: 'history',
  routes: [
    {
      path: '/dashbord', component: DashBord, name: 'dashbord'
    },
    {
      path: '/heroes', component: Heroes, name: 'heroes'
    },
    {
      path: '/detail/:id', components: Detail, name: 'detail'
    }
  ]
}
