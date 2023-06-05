<?php
include_once("dataBase.php");

require './dataBase.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);
$id = $data->id_en;
$matricule1 = $data->matricule1;
$name_enseignant1 = $data->name_enseignant1;
$num_tel1 = $data->num_tel1;
$orig_societe1 = $data->orig_societe1;
$fac1 = $data->fac1;
$Grade1 = $data->Grade1;
$date_grade1 = $data->date_grade1;
$specialite1 = $data->specialite1;
$date_inscrit_fac1 = $data->date_inscrit_fac1;
$etablis_demande1 = $data->etablis_demande1;
$matricule2 = $data->matricule2;
$name_enseignant2 = $data->name_enseignant2;
$num_tel2 = $data->num_tel2;
$orig_societe2 = $data->orig_societe2;
$fac2 = $data->fac2;
$Grade2 = $data->Grade2;
$date_grade2 = $data->date_grade2;
$specialite2 = $data->specialite2;
$date_inscrit_fac2 = $data->date_inscrit_fac2;
$etablis_demande2 = $data->etablis_demande2;
$id_en = $data->id_en;
$etat = $data->etat;

$sql = "UPDATE `demanagment` SET 
            `matricule1` = '$matricule1',
            `name_enseignant1` = '$name_enseignant1',
            `num_tel1` = '$num_tel1',
            `orig_societe1` = '$orig_societe1',
            `fac1` = '$fac1',
            `Grade1` = '$Grade1',
            `date_grade1` = '$date_grade1',
            `specialite1` = '$specialite1',
            `date_inscrit_fac1` = '$date_inscrit_fac1',
            `etablis_demande1` = '$etablis_demande1',
            `matricule2` = '$matricule2',
            `name_enseignant2` = '$name_enseignant2',
            `num_tel2` = '$num_tel2',
            `orig_societe2` = '$orig_societe2',
            `fac2` = '$fac2',
            `Grade2` = '$Grade2',
            `date_grade2` = '$date_grade2',
            `specialite2` = '$specialite2',
            `date_inscrit_fac2` = '$date_inscrit_fac2',
            `etablis_demande2` = '$etablis_demande2',
            `etat` = '$etat'
        WHERE `id_en` = '$id_en'";

if (isset($data)) {
$result = mysqli_query($conn, $sql); 
echo json_encode($id_en);
}

?>
