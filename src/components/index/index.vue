<template>
	<el-container>
	  <el-aside width="200px">
	  	<el-row class="ip">
	  		<el-col><span class="el-icon-location">{{ip}}</span></el-col>
	  	</el-row>
	  	
	  		<template v-for="(item,index) in list">
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
	  		</template>
	  	
	  </el-aside>
	  <el-main>Main</el-main>
	</el-container>
</template>

<script>
	export default {
		data(){
			
			return {
				ip:'',
				active:'active',
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
						{name:'数据明细（网络）',path:'/orderList'},
						{name:'医院项目设置（网络）',path:'/orderList'},
						{name:'数据明细（电话）',path:'/orderList'},
						{name:'医院项目设置（电话）',path:'/orderList'}
					],
					childshow:false
				},
				{
					name:'网站挂号设置',
					icon:'el-icon-edit-outline',
					children:[
						{name:'网站挂号列表',path:'/orderList'},
						{name:'网站挂号设置',path:'/orderList'}
					],
					childshow:false
				},{
					name:'数据报表',
					icon:'el-icon-edit',
					children:[
						{name:'总体报表',path:'/orderList'},
						{name:'性别',path:'/orderList'},
						{name:'年龄',path:'/orderList'},
						{name:'病患类型',path:'/orderList'},
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
						{name:'医生设置',path:'/orderList'},
						{name:'疾病设置',path:'/orderList'},
						{name:'媒体类型设置',path:'/orderList'},
						{name:'医院科室设置',path:'/orderList'},
						{name:'搜索引擎设置',path:'/orderList'}
					],
					childshow:false
				},{
					name:'我的资料',
					icon:'el-icon-time',
					children:[
						{name:'修改我的资料',path:'/orderList'},
						{name:'修改密码',path:'/orderList'},
						{name:'选项设置',path:'/orderList'},
					],
					childshow:false
				},{
					name:'系统管理',
					icon:'el-icon-menu',
					children:[
						{name:'菜单管理',path:'/orderList'},
						{name:'人员管理',path:'/orderList'},
						{name:'权限管理',path:'/orderList'},
						{name:'部门管理',path:'/orderList'},
						{name:'通知管理',path:'/orderList'},
					],
					childshow:false
				},{
					name:"日志记录",
					icon:'el-icon-document',
					children:[
						{name:'操作记录',path:'/orderList'},
						{name:'登录错误记录',path:'/orderList'}
					],
					childshow:false
				}
				]
			}
		},
		created(){
			this.$http.get('http://ceshi.0832pifu.com/test/test.php').then((res)=>{
				this.ip = res.data.REMOTE_ADDR;
			})
		},
		methods:{
			test () {
				
			}
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
	    background: #2C3E50;
	    color: #333;
	    text-align: center;
	    
	  }
	  
	  .el-main {
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
	    line-height: 160px;
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
	  .list_child a {
	  	color: white;
	  	text-decoration: none;
	  }
	  .active {
	  	border-left: #20a53a 2px solid;
	  }
		
</style>