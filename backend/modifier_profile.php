<?php

require './dataBase.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$id = $data->id;
$name = $data->name;
$email = $data->email;
$pwd = $data->pwd;
$role = $data->role;
$cin = $data->cin;
$date_naissance = $data->date_naissance;
$matricule = $data->matricule;
$situation = $data->situation;
$adresse_postale = $data->adresse_postale;
$grade = $data->grade;
$categorie = $data->categorie;
$certif = $data->certif;
$niveau_educ = $data->niveau_educ;

if (isset($data)) {
    $sql = "UPDATE `user` SET `name` = '$name', `email` = '$email', `pwd` = '$pwd', `role` = '$role', `cin` = '$cin', `date_naissance` = '$date_naissance', `matricule` = '$matricule', `situation` = '$situation', `adresse_postale` = '$adresse_postale', `grade` = '$grade', `categorie` = '$categorie', `certif` = '$certif', `niveau_educ` = '$niveau_educ' WHERE `id` = '$id'";
    $result = mysqli_query($conn, $sql); 
    echo json_encode($id);
}
?>
