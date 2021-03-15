<?php 

$conn = mysqli_connect("localhost","root","");
mysqli_select_db($conn,"react-back");
//check connection
if(mysqli_connect_errno())
{
  echo "failed to connect to MySQL:". mysqli_connect_error();
}

// // Create database
// $sql = "CREATE DATABASE react-back";
// if (mysqli_query($conn, $sql)) {
//   echo "Database created successfully";
// } else {
//   echo "Error creating database: " . mysqli_error($conn);
// }

// mysqli_close($conn);
?>
