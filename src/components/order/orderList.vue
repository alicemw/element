<template>
	<div class="orderlist">
		<el-container>
			<main_nav></main_nav>
		<el-main>
			<el-table
		    :data="tableData"
		    border
		    style="width: 100%;">
		    <el-table-column
		      type="index"
		      :index="index"
		      align="center">
		    </el-table-column>
		    <el-table-column
		      prop="date"
		      label="日期"
		      width="180"
		      align="center">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="姓名"
		      width="180"
		      align="center">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="地址"
		      align="center">
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
					prop:'date',
					name:'日期'
				},
				{
					prop:'name',
					name:'栏目'
				},
				{
					prop:'address',
					name:'地址'
				},
				]
			}
		}
		
	}
</script>

<style>
</style>