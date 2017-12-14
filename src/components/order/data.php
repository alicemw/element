<?php
	header("Access-Control-Allow-Origin: * ");
	header("Content-type: text/html; charset=utf-8"); 

	$db = new mysqli('localhost','ceshi_0832pifu','I5FBNAHbI5sFBRztPNAH6Sb','ceshi_0832pifu');
	if(mysqli_connect_errno())
	{
	    echo mysqli_connect_error();
	}else{
		$sql = "select * from patient_4 order by id limit 10";
		$result = $db->query($sql);
		if($result){
			
			while($row = $result->fetch_assoc()){
				$rows[]=$row;
			}
			echo json_encode($rows);
		}
		
	}

?>