<?php
require './dataBase.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

// Récupérer les données envoyées depuis Angular
$title = $_POST['title'];
$type = $_POST['type'];
$date_deb = $_POST['date_deb'];
$date_fin = $_POST['date_fin'];
$email = $_POST['email'];
$name_en = $_POST['name_en'];
$id_en = $_POST['id_en'];
$file = $_FILES['file'];

// Vérifier si le titre de la formation existe déjà dans la base de données
$checkSql = "SELECT * FROM `formation` WHERE `title` = '$title'";
$checkResult = mysqli_query($conn, $checkSql);

if (mysqli_num_rows($checkResult) > 0) {
    // La formation existe déjà, renvoyer une réponse d'erreur
    http_response_code(400);
    echo json_encode(array('message' => 'Formation already exists'));
} else {
    // Upload du fichier image
    $filename = $file['name'];
    $tempFilePath = $file['tmp_name'];
    $fileExtension = pathinfo($filename, PATHINFO_EXTENSION);
    $newFilename = uniqid() . "-" . time() . "." . $fileExtension;
    $fileDestination = 'upload/formation/' . $newFilename;

    if (move_uploaded_file($tempFilePath, $fileDestination)) {
        // Insertion des détails de la formation et de l'image dans la base de données
        $sql = "INSERT INTO `formation` (`title`, `type`, `date_deb`, `date_fin`, `email`, `name_en`, `id_en`, `file`) VALUES 
        ('$title', '$type', '$date_deb', '$date_fin', '$email', '$name_en', '$id_en', '$fileDestination')";

        $result = mysqli_query($conn, $sql);

        if ($result) {
            http_response_code(200);
            echo json_encode(array('message' => 'Formation added successfully'));
        } else {
            http_response_code(400);
            echo json_encode(array('message' => 'Error inserting formation'));
        }
    } else {
        http_response_code(400);
        echo json_encode(array('message' => 'Error uploading image file'));
    }
}
?>
