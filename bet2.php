<?php
session_start();
?>
<html>
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>bet</title>
  </head>
  <body style="background-image:   url('everyone.jpg');      background-repeat: no-repeat;   background-attachment: fixed;  background-size: cover;">
    <div class="card-body" style="margin-top:200px;">
            <h5 class="card-title text-center" style="color:white;">Place your Bet :</h5>
            <form class="form-signin" action=" " method="POST">
              <div class="form-label-group">
                <input type="text" name="bet" class="form-control"  required autofocus>
                
              </div>

              

              
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" name="done" style="margin-top:40px;">SUBMIT</button>
              <hr class="my-4">
              </form>
          </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

<?php
if(isset($_POST['done']))
{
$servername= "localhost";
$username= "root";
$password= "";
$dbname= "vegas";
	
   $bet1=$_POST["bet"];	
   $_SESSION["betupdt"]="$bet1";
$conn= new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error)
{ 
die("connection failed: ".$conn->connect_error);
}
$str=$_SESSION["uid"];
$sql="select vmoney from casino_tbl where userid='$str'";

	 $result=$conn->query($sql);
	 $row=$result->fetch_assoc();
	 $money=$row["vmoney"];
	$money=$money-$bet1;
$sql="UPDATE casino_tbl SET vmoney='$money' where userid='$str'";
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
header("Location: itquiz.html");
}
?>
</body>
</html>