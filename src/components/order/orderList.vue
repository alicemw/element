<template>
	<div class="orderlist">
		<el-container>
			<main_nav></main_nav>
		<el-main>
			<el-table
		    :data="tableData"
		    border
		    highlight-current-row
		    @sort-change="test"
		    style="width: 100%;">
		    <el-table-column
		      type="index"
		      align="center">
		    </el-table-column>
		    <template v-for="(item,index) in tableList" >
		    	<el-table-column
			      :prop="item.prop"
			      :label="item.name"
			      sortable
			      align="center">
			    </el-table-column>
		    </template>
		    <el-table-column
		      fixed="right"
		      label="操作"
		      prop="operate"
		      align="center">
		      <template slot-scope="scope">
			      <el-button type="text" ><i class="el-icon-info"></i></el-button>
			      <el-button type="text" ><i class="el-icon-edit"></i></el-button>
			      <el-button type="text"  @click.native="deleteRow(scope.$index, tableData)"><i class="el-icon-delete"></i></el-button>
		      </template>
		    </el-table-column>
		    
		  </el-table>
		  <el-pagination
			  background
			  layout="prev, pager, next,jumper"
			   :current-page="currentPage"
			   @current-change="handleCurrentChange"
			  :total="total">
			</el-pagination>
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
				
				tableData:[],
				tableList:[
				{
					prop:'addtime',
					name:'添加日期'
				},
				{
					prop:'name',
					name:'姓名'
				},
				{
					prop:'tel',
					name:'电话'
				},
				{
					prop:'sex',
					name:'性别'
				},
				{
					prop:'order_date',
					name:'预约日期'
				}
				
				],
				total:0,
				currentPage:1,
				order:'descending',
				orderby:'addtime'

			}
		},
		methods:{
			deleteRow(index,rows){
				 rows.splice(index, 1);
			},
			test(a){
				this.order =a.order;
				this.currentPage =1;
				this.orderby =a.prop;
				
				this.getData()
			},
			formatTime (time) {
		        let unixtime = time
		         let unixTimestamp = new Date(unixtime * 1000)
		         let Y = unixTimestamp.getFullYear()
		         let M = ((unixTimestamp.getMonth() + 1) >= 10 ? (unixTimestamp.getMonth() + 1) : '0' + (unixTimestamp.getMonth() + 1))
		         let D = (unixTimestamp.getDate() >= 10 ? unixTimestamp.getDate() : '0' + unixTimestamp.getDate())
		         let toDay = Y + '-' + M + '-' + D
		         return toDay
		    },
		    handleCurrentChange(val){
		    	this.currentPage =val;
		    	this.getData();
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
			this.getData();
		}
		
	}
</script>

<style>
	.orderlist {
		width: 100%;
		height: 100%;
	}
	.el-container {
		width: 100%;
		height: 100%;
	}
	.el-table_1_column_5 .cell button {
		padding: 0;
		font-size: 22px;
	} 
	.el-pager li.active {
		background: #409eff;
		color: white;
		border-left: none;
	}
	.el-pagination {
		margin-top: 20px;
	}
</style>