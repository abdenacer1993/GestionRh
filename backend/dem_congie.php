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




$request_body = file_get_contents("php://input");

if (isset($request_body) && !empty($request_body)) {
    $data = json_decode($request_body);

    $name = $data->name;
    $date_deb = $data->date_deb;
    $date_fin = $data->date_fin;
    $id_en = $data->id_en;
    $etat = $data->etat;
    
    
    $type = $data->type;
    $cin = $data->cin;
    $grade = $data->grade;
    $poste = $data->poste;
    $nbrjour = $data->nbrjour;
    $adresse = $data->adresse;
    $zipcode = $data->zipcode;
    $numtel = $data->num_tel;
    $papier = $data->papier;
    $matricule = $data->matricule;
    
    $sql = "INSERT INTO congie (name,matricule, date_deb, date_fin, id_en, etat, type, cin, grade, poste, nbrjour, adresse, zipcode, num_tel, papier) 
            VALUES ('$name','$matricule', '$date_deb', '$date_fin', '$id_en', '$etat', '$type', '$cin', '$grade', '$poste', '$nbrjour', '$adresse', '$zipcode', '$numtel', '$papier')";

    if ($conn->query($sql) === TRUE) {
        $authdata = [
            'name' => $name,
            'matricule' => $matricule,
            'date_deb' => $date_deb,
            'date_fin' => $date_fin,
            'id_en' => $id_en,
            'etat' => $etat,
            'type' => $type,
            'cin' => $cin,
            'grade' => $grade,
            'poste' => $poste,
            'nbrjour' => $nbrjour,
            'adresse' => $adresse,
            'zipcode' => $zipcode,
            'num_tel' => $numtel,
            'papier' => $papier
        ];
        echo json_encode('add with succes');
        echo json_encode($authdata);
    }else{
        echo json_encode('add with error');
    }
}
?>
