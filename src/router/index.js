import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  //为了解决各页面之间滚动的影响，对于所有路由导航，简单地让页面滚动到顶部。
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
