<?php
    session_start();
?>
<html>
    <body onclick="location.href='games.html';">
<a ></a>
        <?php
            
$servername= "localhost";
$username= "root";
$password= "";
$dbname= "vegas";
	
 
$conn= new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error)
{ 
die("connection failed: ".$conn->connect_error);
}
  $bett1=$_SESSION["betupdt"];	
$winn=$_SESSION["uid1"];

//echo "winner is-".$winn;

$sql="select vmoney from casino_tbl where userid='$winn'";

	 $result=$conn->query($sql);
	 $row=$result->fetch_assoc();
	 $money=$row["vmoney"];
	$money=$money+2*$bett1;
$sql="UPDATE casino_tbl SET vmoney='$money' where userid='$winn'";
if($conn->query($sql)===TRUE)
{
    echo "<script>
	alert('money updated');
	</script>";

}
else
{
echo "error: ".$sql. "<br>".$conn->error;
}

    ?>
    </body>
</html>