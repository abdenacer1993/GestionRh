<?php
require __DIR__ . '/generate-jwt.php';
include './dataBase.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$email = $data->email;
$pwd = $data->pwd;


$sql = "Select id,name,role,email from user where email = '$email' and pwd='$pwd'";
$result = mysqli_query($conn,$sql);

$data = array();

while($row = mysqli_fetch_array($result)){
    $data[] = $row;
}
echo json_encode($data);
//$jwt = generateJWT($id, $name, $email, $role);
//echo json_encode(array("jwt" => $jwt));
?>
