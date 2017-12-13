<template>
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
</template>

<script>
	
import data from './../index/dd.js';
	
	export default {
		data(){
			
			return {
				ip:'',
				active:'active',
				name:this.$route.name,
				list:data.list
			}
		},
		mounted(){
		

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
	      }
	     
	    }
		
	}

</script>

<style>
	.el-aside {
	    background: #2C3E50;
	    color: #333;
	    text-align: center;
	    overflow-x: hidden;
	    
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