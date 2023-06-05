<?php
include_once("dataBase.php");

require './dataBase.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request_body = file_get_contents('php://input');
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

        $sql = "UPDATE `congie` SET 
                    `name` = '$name',
                    `matricule` = '$matricule',
                    `date_deb` = '$date_deb',
                    `date_fin` = '$date_fin',
                    `id_en` = '$id_en',
                    `etat` = '$etat',
                    `type` = '$type',
                    `cin` = '$cin',
                    `grade` = '$grade',
                    `poste` = '$poste',
                    `nbrjour` = '$nbrjour',
                    `adresse` = '$adresse',
                    `zipcode` = '$zipcode',
                    `num_tel` = '$numtel',
                    `papier` = '$papier'
                WHERE `id` = '$id'";
if (isset($data)) {
$result = mysqli_query($conn, $sql); 
echo json_encode($id);
}

?>
