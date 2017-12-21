import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import index from '@/components/index/index'
import orderList from '@/components/order/orderList'
import orderSearch from '@/components/order/orderSearch'

import helloworld from '@/components/helloworld'
import animate from 'animate.css'

Vue.use(Router)

export default new Router({
	'mode':'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
    	path:'/helloworld',
    	name:'helloworld',
    	component:helloworld
    },{
    	path:'/index',
    	name:'首页',
    	component:index
    },{
    	path:'/orderList',
    	name:'orderList',
    	component:orderList
    },{
    	path:'/orderSearch',
    	name:'orderSearch',
    	component:orderSearch
    }
  ]
})
