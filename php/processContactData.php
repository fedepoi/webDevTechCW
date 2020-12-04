<?php

$servername= "localhost";
$username="root";
$password="";
$dbname="webdevcw";

try{
	$conn=new PDO("mysql:host=$servername;dbname=$dbname",$username,$password);
	
	$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	
	echo("connected succesfully");
	
}
catch(PDOException $e){
	echo("connection failed:".$e->getMessage());
}

$query=$conn->prepare("insert into contactdetails (firstName,surname,mail,phoneNum,ads,message) values (?,?,?,?,?,?)");
$query->bindParam(1,$name);
$query->bindParam(2,$surname);
$query->bindParam(3,$mail);
$query->bindParam(4,$phoneNum);
$query->bindParam(5,$ads);
$query->bindParam(6,$message);

$name=$_POST['name'];
$surname=$_POST['surname'];
$mail=$_POST['mail'];
$phoneNum=$_POST['phoneNum'];
$ads=$_POST['ads'];
$message=$_POST['message'];
$query->execute();
$conn=null;

echo("great working");
?>