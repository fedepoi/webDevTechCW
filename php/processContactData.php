<?php

$servername= "localhost";
$username="root";
$password="";
$dbname="webdevcw";

try{
	$conn=new PDO("mysql:host=$servername;dbname=$dbname",$username,$password);
	
	$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	
	
	
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
if($ads == "yes"){
    $ads=1;
}else{$ads=0;}
$message=$_POST['message'];
$query->execute();
$conn=null;

echo("Many thanks for your message we will get you back soon");
header( "refresh:1 ; url=../html/aboutUs.html" );

?>