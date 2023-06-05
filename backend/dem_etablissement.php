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

    $sql = "INSERT INTO demanagment (
                matricule1, name_enseignant1, num_tel1, orig_societe1, fac1, Grade1, date_grade1, specialite1, date_inscrit_fac1, etablis_demande1,
                matricule2, name_enseignant2, num_tel2, orig_societe2, fac2, Grade2, date_grade2, specialite2, date_inscrit_fac2, etablis_demande2, 
                id_en, etat
            ) 
            VALUES (
                '$matricule1', '$name_enseignant1', '$num_tel1', '$orig_societe1', '$fac1', '$Grade1', '$date_grade1', '$specialite1', '$date_inscrit_fac1', '$etablis_demande1',
                '$matricule2', '$name_enseignant2', '$num_tel2', '$orig_societe2', '$fac2', '$Grade2', '$date_grade2', '$specialite2', '$date_inscrit_fac2', '$etablis_demande2',
                '$id_en', '$etat'
            )";

    if ($conn->query($sql) === TRUE) {
        $authdata = [
            'matricule1' => $matricule1,
            'name_enseignant1' => $name_enseignant1,
            'num_tel1' => $num_tel1,
            'orig_societe1' => $orig_societe1,
            'fac1' => $fac1,
            'Grade1' => $Grade1,
            'date_grade1' => $date_grade1,
            'specialite1' => $specialite1,
            'date_inscrit_fac1' => $date_inscrit_fac1,
            'etablis_demande1' => $etablis_demande1,
            'matricule2' => $matricule2,
            'name_enseignant2' => $name_enseignant2,
            'num_tel2' => $num_tel2,
            'orig_societe2' => $orig_societe2,
            'fac2' => $fac2,
            'Grade2' => $Grade2,
            'date_grade2' => $date_grade2,
            'specialite2' => $specialite2,
            'date_inscrit_fac2' => $date_inscrit_fac2,
            'etablis_demande2' => $etablis_demande2,
            'etat' => $etat,
            'id_en' => $id_en,
        ];
        echo json_encode('add with success');
        echo json_encode($authdata);
    } else {
        echo json_encode('add with error');
        echo json_encode($authdata);
    }
}
?>
