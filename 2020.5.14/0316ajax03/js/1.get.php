<?php
	header('content-text:text/html; charset="utf-8"');
	error_reporting(0);
	header("Access-Control-Allow-Origin:*");
	
	//echo  1;
	
	$username = $_GET['username'];
	$age	  = $_GET['age'];

	echo "名字:{$username}, 年龄: {$age}"; 
