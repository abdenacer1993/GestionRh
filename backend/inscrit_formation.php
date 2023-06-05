<?php
include_once("dataBase.php");

// Set response content type
header("Content-Type: application/json");

// Allow requests from any origin
header("Access-Control-Allow-Origin: *");

// Allow specified HTTP methods
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

// Allow specified headers
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: text/html; charset=utf-8');

$request_body = file_get_contents("php://input");

if (isset($request_body) && !empty($request_body)) {
    $data = json_decode($request_body);

    // Extract data from the request
    $title = $data->title;
    $type = $data->type;
    $id_formation = $data->id_formation;
    $id_en = $data->id_en;
    $nom_en = $data->nom_en;

    // Prepare the SQL statement
    $sql = "INSERT INTO inscrit_formation (title, type, id_formation, id_en, nom_en) 
            VALUES ('$title', '$type', '$id_formation', '$id_en', '$nom_en')";

    if ($conn->query($sql) === TRUE) {
        $authdata = [
            'title' => $title,
            'type' => $type,
            'id_formation' => $id_formation,
            'id_en' => $id_en,
            'nom_en' => $nom_en
        ];
        echo json_encode('add with success');
        echo json_encode($authdata);
    } else {
        echo json_encode('add with error');
    }
} else {
    echo json_encode(' error');
}

?>
