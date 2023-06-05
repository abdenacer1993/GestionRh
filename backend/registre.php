<?php
require './dataBase.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$name = $data->name;
$email = $data->email;
$pwd = $data->pwd;
$role = $data->role;
$cin = $data ->cin;
$date_naissance = $data->date_naissance;
$matricule = $data ->matricule;
$situation = $data ->situation;
$adresse_postale = $data->adresse_postale;
$grade = $data->grade;
$categorie = $data->categorie;
$certif = $data->certif;
$niveau_educ = $data->niveau_educ;



if (isset($data)) {
    // Check if the email already exists in the database
    $checkSql = "SELECT * FROM `user` WHERE `email` = '$email'";
    $checkResult = mysqli_query($conn, $checkSql);

    if (mysqli_num_rows($checkResult) > 0) {
        // Email already exists, return an error response
        http_response_code(400);
        echo json_encode(array('message' => 'Email already exists'));
    } else {
        // Insert the new user into the database
        $sql = "INSERT INTO `user` VALUES (NULL,'$name','$email','$pwd','$role','$cin','$date_naissance','$matricule','$situation','$adresse_postale','$grade','$categorie','$certif','$niveau_educ' )";
        $result = mysqli_query($conn, $sql);

        if ($result) {
            http_response_code(200);
        } else {
            http_response_code(400);
            echo json_encode(array('message' => 'Error inserting user'));
        }
    }
}
?>
