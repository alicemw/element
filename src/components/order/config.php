<?php
	header("Access-Control-Allow-Origin: * ");
	header("Content-type: text/html; charset=utf-8"); 
	
	$db = new mysqli('localhost','ceshi_0832pifu','I5FBNAHbI5sFBRztPNAH6Sb','ceshi_0832pifu');
	return $db;
?>