<?php
// $conn = ...;

$conn = mysqli_connect("localhost","root","");
mysqli_select_db($conn,"react-back");
// session_start()
//check connection
if(mysqli_connect_errno())
{
  echo "failed to connect to MySQL:". mysqli_connect_error();
}
// $sql =SELECT * FROM ('cate_ivoirien');
$sql= 'SELECT category_id,cattitle,catname,catimage,catsrc FROM cate_ivoirien';
$query = mysqli_query($conn,$sql) or die('Erreur SQL !<br />'.$sql.'<br />'.mysqli_error($conn));
$nb = mysqli_num_rows($query);

// $query = .....
if ($nb == 0) {
	echo 'echec.';
}
else {
	while ($data = mysqli_fetch_array($query)) {
	echo $data['cattitle'];
  echo $data['catname'],$data['cateimage'] ,$data['catsrc'], '">' , stripslashes(htmlentities(trim($date['titre']))) , '</a> [ Message de ' , stripslashes(htmlentities(trim($date['id_expediteur']))) , ' ]<br />';
	}
}

if ($data) {
   return json_encode($data);
}else {
    return json_encode(['error' => 'Une erreur survenue lors du chargement des donnees']);
}
?>

 