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
    $name = $data->name;
    $grade = $data->grade;
    $date_repris = $data->date_repris;
    $type = $data->type;
    $date_deb = $data->date_deb;
    $date_fin = $data->date_fin;
    $cause = $data->cause;
    $id_en = $data->id_en;

    // Prepare the SQL statement
    $sql = "INSERT INTO repris_travail (name, grade, date_repris, type, date_deb, date_fin, cause, id_en) 
            VALUES ('$name', '$grade', '$date_repris', '$type', '$date_deb', '$date_fin', '$cause', '$id_en')";

    if ($conn->query($sql) === TRUE) {
        $authdata = [
            'name' => $name,
            'grade' => $grade,
            'date_repris' => $date_repris,
            'type' => $type,
            'date_deb' => $date_deb,
            'date_fin' => $date_fin,
            'cause' => $cause,
            'id_en' => $id_en
        ];
        echo json_encode('add with success');
        echo json_encode($authdata);
    } else {
        echo json_encode('add with error');
        
    }
} else {
    echo json_encode('add with error');
}


?>
