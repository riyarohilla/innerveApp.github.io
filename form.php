<?php
session_start();
?>
<html>
<head>
<title></title>
<style>
.topnav {
  overflow: hidden;
  background-color: darkorange;
  margin-top: -20px;
   top: 0;
  position: fixed;
 width: 100%;
}
.topnav a {
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
  
}

.topnav a:hover {
  background-color: #CBA250;
  color: black;
}

.topnav a.active {

  background-color: #CBA250;
  color: black;
}
</style>
</head>
<body>

<!--<div style="background-color:blue text-align:center" class="topnav">
  <a class="active" href="export.html">Home</a>
  <a href="contact.php">Contact</a>  
  <a href="form.php">Signup</a>
  <a href="order.php">Order</a>
  
</div>-->
<form action="" method="post">
<h1 style="margin-top:50px"> LOGIN </h1>
<br>
<br>
<b>NAME</b>
<br>
<input type="text" name="userid"
placeholder="ENTER YOUR NAME" required>
<br>
<br>
<b>PASSWORD</b>
<br>
<input type="password" name="password"
placeholder="ENTER PASSWORD" required>
<br>
<br>
<button type="submit" name="save">
Submit
</button>
</form>



<?php
if(isset($_POST['save']))
{

$servername= "localhost";
$username= "root";
$password= "";
$dbname= "vegas";

    $name1=$_POST["userid"];  
    $password1=$_POST["password"]; 
	$_SESSION["uid"]="$name1";
	
	
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

}
else
{
echo "error: ".$sql. "<br>".$conn->error;
}
if($name1=="codeacasino@gmail.com")
	header("Location: new.php");
else
	header("Location: bet.php");
}
?>


</body>
</html>