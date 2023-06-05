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

    $type = $data->type;
$mois_annee = $data->mois_annee;
$langue = $data->langue;
$matricule = $data->matricule;
$name = $data->name;
$id_en = $data->id_en;
$grade = $data->grade;
$pieces_jointes = $data->pieces_jointes;

$sql = "INSERT INTO autredemande (type, mois_annee, langue, matricule, name, id_en, grade, pieces_jointes) 
        VALUES ('$type', '$mois_annee', '$langue', '$matricule', '$name', '$id_en', '$grade', '$pieces_jointes')";
        

if ($conn->query($sql) === TRUE) {
    $authdata = [
        'type' => $type,
        'mois_annee' => $mois_annee,
        'langue' => $langue,
        'matricule' => $matricule,
        'name' => $name,
        'id_en' => $id_en,
        'grade' => $grade,
        'pieces_jointes' => $pieces_jointes
    ];
}

        echo json_encode('add with succes');
        echo json_encode($authdata);
    }else{
        echo json_encode('add with error');
    }

?>
