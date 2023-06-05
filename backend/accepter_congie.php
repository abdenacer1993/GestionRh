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

    $id = $data->id;
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

    $sql = "UPDATE congie SET 
            name = '$name',
            matricule = '$matricule',
            date_deb = '$date_deb',
            date_fin = '$date_fin',
            id_en = '$id_en',
            etat = 'accepter',
            type = '$type',
            cin = '$cin',
            grade = '$grade',
            poste = '$poste',
            nbrjour = '$nbrjour',
            adresse = '$adresse',
            zipcode = '$zipcode',
            num_tel = '$numtel',
            papier = '$papier'
            WHERE id = '$id'";

    if ($conn->query($sql) === TRUE) {
        $authdata = [
            'id' => $id,
            'name' => $name,
            'matricule' => $matricule,
            'date_deb' => $date_deb,
            'date_fin' => $date_fin,
            'id_en' => $id_en,
            'etat' => 'accepter',
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
        echo json_encode('update with success');
        echo json_encode($authdata);
    } else {
        echo json_encode('update with error');
    }
}
?>
