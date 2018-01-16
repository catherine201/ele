import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../pages/home/Home.vue'
import Discover from '../pages/discover/Discover.vue'
import Mine from '../pages/mine/Mine.vue'
import Order from '../pages/order/Order.vue'
import businessDetail from '../pages/home/businessDetail.vue'

export default new Router({
  routes: [
    {
      path: '/home',
      alias:'/',
      component:Home,
      children:[
        {path:'businessDetail/:index',
        component:businessDetail}
      ]
    },
    {
      path:'/discover',
      component:Discover
    },
    {
      path:'/mine',
      component:Mine},
    {
      path:'/order',
      component:Order
    },
    {
      path:'**',
      redirect:'/home'
    }
  ]
})
