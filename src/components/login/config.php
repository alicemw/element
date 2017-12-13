<?php
header("Access-Control-Allow-Origin: * ");
header("Content-type: text/html; charset=utf-8"); 
	$name =trim($_POST['user']);
	$pass = md5($_POST['pass1']);
	
	$db = new mysqli('localhost','ceshi_0832pifu','I5FBNAHbI5sFBRztPNAH6Sb','ceshi_0832pifu');
	if(mysqli_connect_errno())
	{
	    echo mysqli_connect_error();
	}else{
		if($_POST['type']=='login'){
			login($db,$name,$pass);
		}else {
			register($db, $name, $pass);
		}
		
	}
	function login($db,$name,$pass){
		
		$sql = "select * from user where name = '".$name."'";
		$result = $db->query($sql);
		
		$row = $result->fetch_array();
		if($row){
			if($row[2]==$pass){
				echo '登录成功！';
			}else {
				echo "密码错误！";
			}
		}else{
			echo "用户名不存在！";
		}
	}

	function register($db,$name,$pass){
		
		$sql = "select * from user where name = '".$name."'";
		$result = $db->query($sql);
		
		$row = $result->fetch_array();
		if($row){
			echo "用户已存在！";
		}else {
			$sql = "insert into user(name,pass) values('".$name."','".$pass."')";
			echo $sql;
			
			$result = $db->query($sql);
			if($result){
				echo "注册成功！";
			}else {
				echo "注册失败！";
			}
		}
		
	}

		


?>