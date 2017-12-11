const data = {
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
	                {value:20,
	                	label: {
		                normal: {
		                    formatter: '{d}%',
		                    position: 'center',
		                    show: true,
		                    textStyle: {
		                        fontSize: '35',
		                        fontWeight: 'normal',
		                        color: '#3dd4de'
		                    }
		                }
		            }
	                },
	                {value:80}
	               
	            ]
	        }
	    ],
	    color:['#20a53a','#ccc']
	},
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
export default data;