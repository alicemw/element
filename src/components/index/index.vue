<template>
	<el-container>
	  <el-aside width="200px">
	  	<el-row class="ip">
	  		<el-col><span class="el-icon-location">{{ip}}</span></el-col>
	  	</el-row>
	  </el-aside>
	  <el-main>Main</el-main>
	</el-container>
</template>

<script>
	export default {
		data(){
			
			return {
				'ip':''
			}
		},
		created(){
			this.$http.get('http://ceshi.0832pifu.com/test/test.php').then((res)=>{
				this.ip = res.data.REMOTE_ADDR;
			})
		}
		
	}
</script>

<style language="less">
	.el-header {
		line-height: 60px;
		text-align: left;
		font-size: 28px;
		color: #2C3E50;
		font-weight: bold;
		background: ;
	}
	.el-aside {
	    background-color: #D3DCE6;
	    color: #333;
	    text-align: center;
	    
	  }
	  
	  .el-main {
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
	    line-height: 160px;
	  }
	  
	  body > .el-container {
	    margin-bottom: 40px;
	  }
	  .ip {
	  	height: 40px;
	  	font-size: 18px;
	  	text-align: left;
	  	background: #3c444d;
	  	color: white;
	  	padding: 10px 0 0 10px;
	  }
</style>