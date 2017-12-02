<template>
	<div class="login">
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <span>系统{{title}}</span>
		    <el-button @click="changeLogin()" style="float: right; padding: 3px 0" type="text"  ><i class="el-icon-refresh"></i>{{title=="登录"? "注册" : "登录"}}</el-button>
		  </div>
		  <el-form  :model="loginform" :rules="rule1" status-icon ref="loginform"  :label-position="labelPosition" :label-width="labelWidth" class="demo-ruleForm">
			  <el-form-item label="账号" prop="user">
			    <el-input type="text" v-model="loginform.user" placeholder="请输入账号" ></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="pass1">
			    <el-input type="password" v-model="loginform.pass1" placeholder="请输入密码" ></el-input>
			  </el-form-item>
			  
			  <el-form-item label="确认密码" v-show="confirmPass" prop="pass2">
			    <el-input type="password" v-model="loginform.pass2" placeholder="请确认密码" ></el-input>
			  </el-form-item>
			  
			  <el-form-item>
			    <el-button type="primary" @click="submit()">提交</el-button>
			    <el-button type="danger" @click="reset('loginform')">重置</el-button>
			  </el-form-item>
			</el-form>
		</el-card>
	</div>
	
</template>

<script>
export default {
	data(){
		var checkUser = (rule,value,callback)=>{
			if(!value){
				return callback(new Error("账号不能为空！"));
			}else if(value.length>5||value.length<2){
				return callback(new Error("账号必须在2-5个字之间！"));
			}else {
				callback()
			}
		};
		var reg = /^[a-zA-Z0-9]{6,10}$/;//6到10位字母和数字混合
		var checkPass = (rule,value,callback) => {
			if (value === '') {
	          callback(new Error('请输入密码'));
	        } else if(reg.test(value)){
	         	callback()
		    }else{
		    	callback(new Error('6-10位字母，只允许字母和数字！'))
		    }
		};
		 
		 var checkPass2 = (rule, value, callback) => {
		 	
	        if (value === '') {
	          callback(new Error('请再次输入密码'));
	        } else if (value !== this.loginform.pass1) {
	          callback(new Error('两次输入密码不一致!'));
	        } else {
	          callback();
	        }
	      };
		
		
		return {
			labelPosition:'right',
			confirmPass:false,
			labelWidth:'40px',
			title:'登录',
			
			loginform:{
				user:'',
				pass1:'',
				pass2:''
			},
			rule1:{
				user:[
					{validator: checkUser, trigger: 'blur'}
				],
				pass1:[
					{validator: checkPass, trigger: 'blur'}
				],
				pass2:[
					{validator: checkPass2, trigger: 'blur'}
				]
				
			}
		}
	},
	
	methods:{
		changeLogin () {
			this.title =='登录'? this.title = '注册' : this.title = '登录';
			this.confirmPass = !this.confirmPass;
			this.labelWidth == '40px' ? this.labelWidth = '70px': this.labelWidth = '40px';
		},
		submit(){
			 if(this.title == '登录'){
			 	this.loginform.pass2 =this.loginform.pass1;
			 }
		 	this.$refs['loginform'].validate((valid) => {
	          if (valid) {
		           this.$http.get('http://m.0832pifu.com/test/test1.php').then((response) => {
					 	this.$router.replace({ path: 'index' })
					 })
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });

		},
		reset(formName){//ref 绑定表单对象， prop绑定需要清除的表单元素item
			this.$refs[formName].resetFields();
		}
	}
}
</script>

<style lang="less">
.login {
	position: relative;
	width: 100%;
	height: 100%;
	background: url('http://pic1.win4000.com/wallpaper/c/58c11baa3ca7b.jpg');
	background-size: cover;
}
.el-card {
	width: 300px;
	position: absolute;
	top: 300px;
	right: 200px;
	
}
.clearfix span {
	font-size: 20px;
}
</style>