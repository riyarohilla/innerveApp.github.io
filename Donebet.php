include 'login.php'
include 'bet.php'
<html>
<body>
<?php
if(isset($_POST['done']))
{
$servername= "localhost";
$username= "root";
$password= "";
$dbname= "vegas";
 $name1=$_POST["userid"]; 
   $bet1=$_POST["bet"];	
$conn= new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error)
{ 
die("connection failed: ".$conn->connect_error);
}

$sql="select vmoney from casino_tbl where userid='$name1'";

	 $result=$conn->query($sql);
	 $row=$result->fetch_assoc();
	 $money=$row["vmoney"];
	$money=$money-$bet1;
$sql="UPDATE casino_tbl SET vmoney='$money' where userid='$name1'";
if($conn->query($sql)===TRUE)
{
echo "<script>
	alert('your bet is done');
	</script>";

}
else
{
echo "error: ".$sql. "<br>".$conn->error;
}
}
?>
</body>
</html>