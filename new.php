include 'login.php'
<html>
<body>
<?php


if(isset($_POST['save']))
{

$servername= "localhost";
$username= "root";
$password= "";
$dbname= "vegas";

    $name1=$_POST["userid"];  
    $password1=$_POST["password"];
	
$conn= new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error)
{ 
die("connection failed: ".$conn->connect_error);
}

$sql="INSERT INTO casino_tbl(userid,password,vmoney) VALUES ('$name1','$password1',1000)";
if($conn->query($sql)===TRUE)
{
	
	echo "<script>
	alert('you have registered successfully');
	</script>";
	if($_POST["userid"]=="a@b")
	{
	header("Location: admingame.html");
	}

else
{
	
	header("Location: games.html");
}

}
else
{
echo "error: ".$sql. "<br>".$conn->error;
}



}

	

?>


<form action="bet.php" method="POST">
Enter your bet: 
<input type="text" name="bet"><br><br>
<button type="submit" name="done">
DONE!
</button>
</form> 
</body>
</html>