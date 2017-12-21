<?php
	header("Access-Control-Allow-Origin: * ");
	header("Content-type: text/html; charset=utf-8"); 
	$pagesize =$_GET['pagesize']*10;
	$pagestart =$pagesize-1*10;
	$order = $_GET['order'] == 'ascending' ? 'asc' : 'desc';
	
	$orderby = $_GET['orderby'];
	$db = new mysqli('localhost','ceshi_0832pifu','I5FBNAHbI5sFBRztPNAH6Sb','ceshi_0832pifu');
	if(mysqli_connect_errno())
	{
	    echo mysqli_connect_error();
	}else{
		$sql = "select * from patient_4 order by ".$orderby." ".$order." limit ".$pagestart." , 10";
		$sql2 = "select count(*) as total from patient_4";
		
		$result = $db->query($sql);
		$result2 =$db->query($sql2);
		$total =$result2->fetch_row();
		if($result){
			
			while($row = $result->fetch_assoc()){
				$rows[]=$row;
			}
			$rows[]=$total;
			echo json_encode($rows);
			
		}
		
	}

?>