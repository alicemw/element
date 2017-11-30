<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
	width: 100%;
	height: 100%;
	position: absolute;
}
body {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	background: url('http://pic1.win4000.com/wallpaper/c/58c11baa3ca7b.jpg');
	background-size: cover;
}
</style>
