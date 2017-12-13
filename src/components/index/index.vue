<template>
	<el-container>
	  <main_nav></main_nav>
	  <el-main>
	  	<el-header>
	  		<i class="el-icon-location" style="color: #20A53A;"></i>Position:{{name}}
		    <el-dialog title="收货地址" :visible.sync="dialogVisible">
			  <p>姓名：{{user}}</p>
			  <p>权限：管理员</p>
			  <p>联系方式：18323797262</p>
			</el-dialog>
	  		<el-button @click="dialogVisible = true" style="float: right;margin-top: 10px;"><i class="el-icon-info"></i> 我的信息</el-button>
	  	</el-header>
	  	<el-row style="margin-top:10px; padding: 10px;background: #20A53A;color: white;">
	  		<el-col :span="6"><i class="el-icon-menu"></i>系统:{{os}}</el-col>
	  		<el-col :span="12"><i class="el-icon-search"></i>浏览器:{{broswer}}</el-col>
	  	</el-row>
	  	<el-row>
	  		<el-col>
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
	  			
	  		</el-col>
	  	</el-row>
	  	<el-row>
	  		<el-col>
	  			<el-card class="box-card status">
				  <div slot="header" class="clearfix">
				    <span>实时流量</span>
				    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
				  </div>
				 	<el-row>
				 		<el-col>
				 			
				 			<div id="flow" style="width: 800px;height: 300px;"></div>
				 		</el-col>
				 		
				 	</el-row>
				</el-card>
	  		</el-col>
	  	</el-row>
		
	  </el-main>
	</el-container>
</template>

<script>
import data from './dd.js'
import main_nav from './../nav/main_nav.vue'

	export default {
		components:{
		  	main_nav
		  },
		data(){
			
			return {
				ip:'',
				user:'或缺中',
				os:'获取中',
				broswer:'获取中',
				active:'active',
				dialogVisible:false,
				option:data.option,
				name:this.$route.name,
				list:data.list,
				option2:data.option2
			}
		},
		mounted(){
			let myChart1 = this.$echarts.init(document.getElementById('cpu1'))
			let myChart2 = this.$echarts.init(document.getElementById('cpu2'))
			myChart1.setOption(this.option);
			myChart2.setOption(this.option);
		
			this.changeData();
			this.user = this.$Cookie.get("name");
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
	      		let myChart = this.$echarts.init(document.getElementById('cpu'))
	      		let myChart3 = this.$echarts.init(document.getElementById('flow'))
	      	setInterval(()=>{//动态饼图
	      		let val =Math.floor(Math.random()*100);
	      		let dd =this.option2.xAxis[0].data;
	      		let val2=100-val;
	      		this.option.series[0].data[0].value =val;
	      		this.option.series[0].data[1].value =val2;
					let dd1 =this.option2.series[0].data;
					let dd2 =this.option2.series[1].data;
					
					dd.shift();
					dd.push((new Date()).toLocaleTimeString().replace(/^\D*/,''));
					dd1.shift();
					dd2.shift();
					dd1.push(Math.floor(Math.random()*100));
					dd2.push(Math.floor(Math.random()*100));
					this.option2.xAxis[0].data =dd;
					this.option2.series[0].data =dd1;
					this.option2.series[1].data =dd2;
					myChart3.setOption(this.option2)
	      		
	      			myChart.setOption(this.option);
	      	},2000);
	      
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
	    overflow-x: hidden;
	    
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