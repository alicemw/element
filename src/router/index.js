import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
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
    }
  ]
})
