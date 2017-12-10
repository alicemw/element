<template>
	<el-container>
	  <el-aside width="200px">
	  	<el-row class="ip">
	  		<el-col><span class="el-icon-location">{{ip}}</span></el-col>
	  	</el-row>
	  	
	  		<!--<template v-for="(item,index) in list">
	  			<el-row>
				  		<el-col class="list" :class="{active: item.childshow}" :key="item.id"  @click.native="item.childshow = !item.childshow">
				  			<i :class="item.icon"></i>{{item.name}} 
				  			<span :class="{'el-icon-caret-right':!item.childshow,'el-icon-caret-bottom' : item.childshow}"></span>
				  		</el-col>
	  			</el-row>
		  		<el-row v-show="item.childshow">
		  			<el-col class="list_child" v-for="a in item.children" :key="a.id">
		  				<router-link :to="a.path">
				  				{{a.name}}
		  				</router-link>
		  			</el-col>
	  			</el-row>
	  		</template>-->
	  		<el-row class="tac">
			  <el-col :span="24">
			   
			    <el-menu
			      default-active="1"
			      class="el-menu-vertical-demo"
			      @open="handleOpen"
			      @close="handleClose" v-for="(item,index) in list">
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
	export default {
		data(){
			return {
				ip:'',
				os:'获取中',
				broswer:'获取中',
				active:'active',
				option:{
					 tooltip: {
				        trigger: 'item',
				        formatter: "{a} <br/>{b}: {c} ({d}%)"
				    },
					title:{
						text:'cpu',
						left:"center"
					},
					 
				    
					   
				    series: [
				        {
				            name:'访问来源',
				            type:'pie',
				            radius: ['55%', '65%'],
				            startAngle:90,//设置度数
				            
				            center:['50%','50%'],
				            avoidLabelOverlap: false,
				            label: {
				                normal: {
				                    show: true,
				                    position: 'center'
				                },
				                emphasis: {
				                    show: true,
				                    textStyle: {
				                        fontSize: '30',
				                        fontWeight: 'bold'
				                    }
				                }
				            },
				            labelLine: {
				                normal: {
				                    show: false
				                }
				            },
				            itemStyle:{
				            	normal:{
				            		
				            	}
				            },
				            data:[
				                {value:0.2,name:'20%',label:{normal:{color:'green'}}},
				                {value:0.8}
				               
				            ]
				        }
				    ],
				    color:['#20a53a','#ccc']
				},
				name:this.$route.name,
				list:[
				{name:'首页',icon:'el-icon-date',childshow:true},
				{
					name:'病人预约管理',
					path:'/orderM',
					icon:'el-icon-bell',
					children:[
						{name:'预约登记列表',path:'/orderList'},
						{name:'预约病人搜索',path:'/orderSearch'},
						{name:'重复病人查询',path:'/orderQuery'},
						{name:'客服明细报表',path:'/orderDetail'},
						{name:'月趋势报表',path:'/orderTrend'},
						{name:'自定义图形报表',path:'/orderCustom'},
						{name:'导出病人数据',path:'/orderDataExport'},
						{name:'数据横向对比',path:'/orderComparison'}
					],
					childshow:false
				},
				{
					name:'访客数据统计',
					icon:'el-icon-tickets',
					children:[
						{name:'数据明细（网络）',path:'/vDetail1'},
						{name:'医院项目设置（网络）',path:'/vSetting1'},
						{name:'数据明细（电话）',path:'/vDetail2'},
						{name:'医院项目设置（电话）',path:'/vSetting2'}
					],
					childshow:false
				},
				{
					name:'网站挂号设置',
					icon:'el-icon-edit-outline',
					children:[
						{name:'网站挂号列表',path:'/siteList'},
						{name:'网站挂号设置',path:'/siteSetting'}
					],
					childshow:false
				},{
					name:'数据报表',
					icon:'el-icon-edit',
					children:[
						{name:'总体报表',path:'/oSatement'},
						{name:'性别',path:'/sex'},
						{name:'年龄',path:'/age'},
						{name:'病患类型',path:'/'},
						{name:'媒体来源',path:'/orderList'},
						{name:'来源状态',path:'/orderList'},
						{name:'接待医生',path:'/orderList'},
						{name:'客服',path:'/orderList'}
					],
					childshow:false
				},{
					name:'设置',
					icon:'el-icon-setting',
					children:[
						{name:'医生设置',path:'/patientSetting'},
						{name:'疾病设置',path:'/dieaseSetting'},
						{name:'媒体类型设置',path:'/mediaSetting'},
						{name:'医院科室设置',path:'/sectionSetting'},
						{name:'搜索引擎设置',path:'/searchSetting'}
					],
					childshow:false
				},{
					name:'我的资料',
					icon:'el-icon-time',
					children:[
						{name:'修改我的资料',path:'/editData'},
						{name:'修改密码',path:'/editPass'},
						{name:'选项设置',path:'/choiceSetting'},
					],
					childshow:false
				},{
					name:'系统管理',
					icon:'el-icon-menu',
					children:[
						{name:'菜单管理',path:'/Mtable'},
						{name:'人员管理',path:'/Mperson'},
						{name:'权限管理',path:'/Mauthority'},
						{name:'部门管理',path:'/Mbranch'},
						{name:'通知管理',path:'/Minfo'},
					],
					childshow:false
				},{
					name:"日志记录",
					icon:'el-icon-document',
					children:[
						{name:'操作记录',path:'/operateNote'},
						{name:'登录错误记录',path:'/loginerrorNote'}
					],
					childshow:false
				}
				]
			}
		},
		mounted(){
			let myChart = this.$echarts.init(document.getElementById('cpu'))
			let myChart1 = this.$echarts.init(document.getElementById('cpu1'))
			let myChart2 = this.$echarts.init(document.getElementById('cpu2'))
			function cpuSimulator() {
		 var J = 100,
		  getNow = function() {
		   return new Date().getTime();
		  };
		 !(function() {
		  var I = document.createElement("div"),
		   s = 50,
		   fn = function(l) {
		    l = 1;
		    var now = getNow();
		    var c = 1;
		    while (c < J) {
		     if (now > D + c*s) {
		      l++;
		     }
		     c++;
		    }
		    D = getNow();
		    I.innerHTML = "CPU：" + l/J * 100 + "%";
		   },
		   t = setInterval(fn, 500),
		   D = getNow();
		   I.style.cssText = "width:80px; height:20px; position:fixed !important; _position:absolute; top:10px; right:10px; border:1px solid #406c99; padding:2px; color:#f00;";
		   document.body.appendChild(I);
		   fn();
		 })();
		}
		cpuSimulator();
			
			myChart.setOption(this.option);
			myChart1.setOption(this.option);
			myChart2.setOption(this.option);
			
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