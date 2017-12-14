<template>
	<div class="orderlist">
		<el-container>
			<main_nav></main_nav>
		<el-main>
			<el-table
		    :data="tableData"
		    border
		    highlight-current-row
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
				
				tableData:[
				{
		          date: '2016-05-02',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1517 弄'
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1519 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }
				],
				tableList:[
				{
					prop:'addtime',
					name:'日期'
				},
				{
					prop:'name',
					name:'栏目'
				},
				{
					prop:'tel',
					name:'电话'
				}
				]
			}
		},
		methods:{
			deleteRow(index,rows){
				 rows.splice(index, 1);
			},
			formatTime (time) {
		        let unixtime = time
		         let unixTimestamp = new Date(unixtime * 1000)
		         let Y = unixTimestamp.getFullYear()
		         let M = ((unixTimestamp.getMonth() + 1) > 10 ? (unixTimestamp.getMonth() + 1) : '0' + (unixTimestamp.getMonth() + 1))
		         let D = (unixTimestamp.getDate() > 10 ? unixTimestamp.getDate() : '0' + unixTimestamp.getDate())
		         let toDay = Y + '-' + M + '-' + D
		         return toDay
		       }
		},
		mounted(){
			$.ajax({
				type:"get",
				url:"http://ceshi.0832pifu.com/test/data.php",
				async:true,
				success:(res)=>{
					let data =JSON.parse(res);
					for (let i = 0;i<data.length;++i) {
						data[i].addtime = this.formatTime(data[i].addtime);
					}
					console.log(data)
					
					console.log(data2);
					this.tableData = data;
				}
			});
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
</style>