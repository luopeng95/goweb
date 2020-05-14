<?php
	header('content-text:text/html; charset="utf-8"');
	error_reporting(0);
	header("Access-Control-Allow-Origin:*");
	
	//$arr1 = array('lily', 'momo', 'zhangsan');
	
	$arr2 = array('username'=>'lily', 'age'=>32);
	
	//echo 'lily,momo,zhangsan';
	
	echo json_encode($arr2);
