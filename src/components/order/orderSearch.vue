<template>
	<div class="ordersearch">
		<el-container>
			<main_nav></main_nav>
		<el-main>
			<el-card class="box-card">
			  <div slot="header" class="clearfix" style="text-align: left;">
			    <span style="font-size: 20px;">病人搜索</span>
			    <el-button @click="test" style="float: right; padding: 3px 0;font-size: 18px;" type="text">操作按钮</el-button>
			   	<el-input v-model="input" placeholder="请输入内容"></el-input>
			  </div>
			  <el-row>
			  	<el-col :span='22' :offset="2" >
			  		<label for="" style="margin-right: 10px;font-size: 20px;font-weight: bold;">时间类型:</label>
			  		<el-select v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
			  	</el-col>

			  </el-row>
			  
			  <el-row>
			  	<el-col :span='3' :offset="2" >
			  		<label for="" style="margin-right: 10px;font-size: 20px;font-weight: bold;">时间:</label>
			  	</el-col>
			  	<el-col :span="6">
			  		
			  		<el-date-picker
				      v-model="value7"
				      type="daterange"
				      align="right"
				      unlink-panels
				      range-separator="至"
				      start-placeholder="开始日期"
				      end-placeholder="结束日期"
				      :picker-options="pickerOptions2">
				    </el-date-picker>
			  	</el-col>

			  </el-row>
			   
			</el-card>			
		</el-main>
		</el-container>
		
		 
	</div>
</template>

<script>
	import data from './../index/dd.js'
	import main_nav from '../nav/main_nav'
	export default {
		components:{
			main_nav	
		},
		data(){
			return {
				search:'',
				input:'',
				value7:'',
				tableData:[],
				value:'',
				 options: [{
		          value: 'order_date',
		          label: '预约时间'
		        }, {
		          value: 'addtime',
		          label: '添加时间'
		        }, {
		          value: 'arrivetime',
		          label: '到院时间'
		        }],
		       pickerOptions2: {
		          shortcuts: [{
		            text: '最近一周',
		            onClick(picker) {
		              const end = new Date();
		              const start = new Date();
		              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
		              picker.$emit('pick', [start, end]);
		            }
		          }, {
		            text: '最近一个月',
		            onClick(picker) {
		              const end = new Date();
		              const start = new Date();
		              start.setMonth(start.getMonth() - 1);
		              
		              picker.$emit('pick', [start, end]);
		            }
		          }, {
		            text: '最近三个月',
		            onClick(picker) {
		              const end = new Date();
		              const start = new Date();
		              start.setMonth(start.getMonth() - 3);
		              picker.$emit('pick', [start, end]);
		            }
		          },
		          {
		            text: '最近半年',
		            onClick(picker) {
		              const end = new Date();
		              const start = new Date();
		              start.setMonth(start.getMonth() - 6);
		              picker.$emit('pick', [start, end]);
		            }
		          },{
		            text: '最近一年',
		            onClick(picker) {
		              const end = new Date();
		              const start = new Date();
		              start.setYear(start.getFullYear() - 1);
		              picker.$emit('pick', [start, end]);
		              
		            }
		          }]
		        }
				
			}
		},
		methods:{
			test(){
				alert(this.value7)
			},
			
		    getData(){
		    	$.ajax({
					type:"get",
					url:"http://ceshi.0832pifu.com/test/data.php",
					async:true,
					data: {pagesize:this.currentPage,order:this.order,orderby:this.orderby},
					success:(res)=>{
						let data =JSON.parse(res);
						for (let i = 0;i<data.length;++i) {
							data[i].addtime = this.formatTime(data[i].addtime);
							data[i].order_date = this.formatTime(data[i].order_date);
						}
						this.total = Number(data.pop()[0]);
						
						this.tableData = data;
						
					}
				});
		    }
		},
		mounted(){
		/*	this.getData();*/
		}
		
	}
</script>

<style>
.ordersearch {
	height: 100%;
}
.el-container {
	height: 100%;
}
.el-header {
	text-align: left;
	font-size: 25px;
	font-weight: bold;
}
.el-card__header .el-input {
	width: 200px;
	transform: translateY(-10px);
	float: right;
	margin-right: 15px;
}
</style>