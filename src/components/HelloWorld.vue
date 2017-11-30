<template>
	<transition 
		v-on:before-enter="beforenter"
		 v-on:enter="enter"
	  v-on:after-enter="afterEnter"
	  v-on:enter-cancelled="enterCancelled"
	  v-on:before-leave="beforeLeave"
	  v-on:leave="leave"
	  v-on:after-leave="afterLeave"
	  v-on:leave-cancelled="leaveCancelled"
		enter-active-class="animated tada" 
		leave-active-class="animated bounceOutRight"
		>
	  <div class="hello" style="position: relative;">
	    <h1>{{ msg }}</h1>
	    <h2>Essential Links</h2>
	    <ul>
	      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
	      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
	      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
	      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
	      <br>
	      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
	    </ul>
	    <h2>Ecosystem</h2>
	    <ul>
	      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
	      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
	      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
	      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
	    </ul>
	  </div>
	</transition>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	beforenter:function(){
  		
  		console.log(1);
  	},
  	 enter: function (el, done) {
    // ...
    	console.log(2);
  },
  afterEnter: function (el) {
    // ...
    	console.log(3);
  },
  enterCancelled: function (el) {
    // ...
    	console.log(4);
  },
  // --------
  // 离开时
  // --------
  beforeLeave: function (el) {
    // ..
    	console.log(5);
  },
  // 此回调函数是可选项的设置
  // 与 CSS 结合时使用
  leave: function (el, done) {
    // ...
    	console.log(6);
  },
  afterLeave: function (el) {
    // ...
    	console.log(7);
  },
  // leaveCancelled 只用于 v-show 中
  leaveCancelled: function (el) {
    // ...
    	console.log(8);
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.test-enter-active,.test-leave-active {
	transition: all 0.5s;
}
.test-enter,.test-leave-to {
	transform: scale(0);
	transform: translateX(100px);
	opacity: -5;
}
</style>
