<?php
require './dataBase.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

if (isset($data)) {
  $name_enseignant = $data->name_enseignant;
  $id_ensiegnant = $data->id_ensiegnant;
  $role = $data->role;
  $nbr_heureCour = $data->nbr_heureCour;
  $nbr_heureTd = $data->nbr_heureTd;
  $nbr_heureTp = $data->nbr_heureTp;
  $prixtt = $data->prixtt;

  $sql = "INSERT INTO `calculnbrhr` VALUES (NULL, '$name_enseignant', '$id_ensiegnant', '$role', '$nbr_heureCour', '$nbr_heureTd', '$nbr_heureTp', '$prixtt')";
  $result = mysqli_query($conn, $sql);
  
  if ($result) {
    http_response_code(200);
  } else {
    http_response_code(400);
  }
}
?>
