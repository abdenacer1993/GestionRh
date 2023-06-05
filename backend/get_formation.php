<?php

require './dataBase.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");

header("Content-type: application/json");

$data = array();

$sql = "SELECT * FROM formation";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $file = $row['file'];
        if (file_exists($file)) {
            $fileData = file_get_contents($file);
            $base64Data = base64_encode($fileData);
            $row['file'] = $base64Data;
        } else {
            $row['file'] = ''; // Set empty string if the file doesn't exist
        }
        $data[] = $row;
    }
}

echo json_encode($data);
?>