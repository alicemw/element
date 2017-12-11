<template>
	<el-container>
	  <el-aside width="200px">
	  	<el-row class="ip">
	  		<el-col><span class="el-icon-location">{{ip}}</span></el-col>
	  	</el-row>
	  		<el-row class="tac">
			  <el-col :span="24">
			   
			    <el-menu
			      default-active="1"
			      class="el-menu-vertical-demo"
			      @open="handleOpen"
			      @close="handleClose" v-for="(item,index) in list" :key="index">
			      <el-submenu index="index">
			        <template slot="title">
			          <i :class="item.icon"></i>
			          <span>{{item.name}}</span>
			        </template>
			        <template v-for="(aa,index) in item.children">
			        		
				        <el-menu-item-group>
				        	<router-link :to="aa.path">
					          <el-menu-item index="1-index">{{aa.name}}</el-menu-item>
				        	</router-link>
				        </el-menu-item-group>
			        </template>
			        
			      </el-submenu>
			     
			    </el-menu>
			  </el-col>
			</el-row>
	  </el-aside>
	  <el-main>
	  	<el-header>
	  		<i class="el-icon-location" style="color: #20A53A;"></i>Position:{{name}}
	  	</el-header>
	  	<el-row style="margin-top:10px; padding: 10px;background: #20A53A;color: white;">
	  		<el-col :span="6"><i class="el-icon-menu"></i>系统:{{os}}</el-col>
	  		<el-col :span="12"><i class="el-icon-search"></i>浏览器:{{broswer}}</el-col>
	  	</el-row>
	  	<el-card class="box-card status">
		  <div slot="header" class="clearfix">
		    <span>服务器状态</span>
		    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		  </div>
		 	<el-row>
		 		<el-col :span="6">
		 			
		 			<div id="cpu" style="width: 200px;height: 200px;"></div>
		 		</el-col>
		 		<el-col :span="6">
		 			<div id="cpu1" style="width: 200px;height: 200px;"></div>
		 		</el-col>
		 		<el-col :span="6">
		 			<div id="cpu2" style="width: 200px;height: 200px;"></div>
		 		</el-col>
		 	</el-row>
		</el-card>
	  </el-main>
	</el-container>
</template>

<script>
import data from './dd.js';

	export default {
		data(){
			
			return {
				ip:'',
				os:'获取中',
				broswer:'获取中',
				active:'active',
				option:data.option,
				name:this.$route.name,
				list:data.list
			}
		},
		mounted(){
			let myChart = this.$echarts.init(document.getElementById('cpu'))
			let myChart1 = this.$echarts.init(document.getElementById('cpu1'))
			let myChart2 = this.$echarts.init(document.getElementById('cpu2'))
			myChart.setOption(this.option);
			myChart1.setOption(this.option);
			myChart2.setOption(this.option);
			this.changeData();
		},
		created(){
			$.ajax({
				type:"get",
				url:"http://ceshi.0832pifu.com/test/test.php",
				async:true,
				success:(res)=>{
				let	data =JSON.parse(res);
					this.ip = data[2];
					this.os = data[1];
					this.broswer = data[0]
				}
			});
			
			
		},
		methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      changeData(){
	      	setInterval(()=>{//动态饼图
	      		let myChart = this.$echarts.init(document.getElementById('cpu'))
	      		let val =Math.floor(Math.random()*100);
	      		let val2=100-val;
	      		this.option.series[0].data[0].value =val;
	      		this.option.series[0].data[1].value =val2;
	      		console.log(val)
	      		myChart.setOption(this.option);
	      	},3000)
	      }
	    }
		
	}

</script>

<style language="less">
	.el-header {
		line-height: 60px;
		text-align: left;
		font-size: 20px;
		color: rgb(32, 165, 58);
		font-weight: bold;
		box-shadow: 0px 0px 1px 3px #ccc;
	  	background: #FFFFFF;
	}
	.el-aside {
	    background: #2C3E50;
	    color: #333;
	    text-align: center;
	    overflow-y: hidden;
	    
	  }
	  
	  .el-main {
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: left;
	  
	  }
	  
	  body  .el-container {
	  
	    height: 100%;
	    
	  }
	  .ip {
	  	height: 60px;
	  	font-size: 18px;
	  	text-align: left;
	  	background: #3c444d;
	  	color: white;
	  	padding: 0 0 0 10px;
	  	line-height: 60px;
	  }
	  .list {
	  	width: 100%;
	  	background: #333333;
	  	text-align: left;
	  	color: white;
	  	padding-left: 10px;
	  	border-bottom: 1px solid #20a53a;
	  	line-height: 60px;
	  }
	  .list:hover {
	  	border-left: #20a53a 2px solid;
	  }
	  .list i {
	  	padding-right: 5px;
	  }
	  .list_child {
	  	padding-left: 20px;
	  	line-height: 50px;
	  	text-align: left;
	  	background: #3C444D;
	  	border-bottom: 1px solid #20a53a;
	  }
	   a {
	  	color: white;
	  	text-decoration: none;
	  }
	  .active {
	  	border-left: #20a53a 2px solid;
	  }
	  .el-menu li {
	  	text-align: left;
	  }
	  .status {
	  	margin-top: 10px;
	  }
</style>