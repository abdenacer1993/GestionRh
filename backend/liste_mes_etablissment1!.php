<?php

require './dataBase.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

if (isset($_GET['id_en'])) {
    $id_en = $_GET['id_en'];

    $sql = "SELECT * FROM demanagment WHERE id_en = '$id_en'";
    $result = mysqli_query($conn, $sql);

    $data = array();

    while ($row = mysqli_fetch_array($result)) {
        $data[] = $row;
    }

    echo json_encode($data);
} else {
    echo json_encode(array('error' => 'id_en parameter is missing'));
}
?>
