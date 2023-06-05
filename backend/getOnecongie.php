<?php
require './dataBase.php';


header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$id = $_GET['id'];

// Perform the database query
$sql = "SELECT * FROM congie WHERE id = '$id'";
$result = mysqli_query($conn, $sql);

$data = array();

if (mysqli_num_rows($result) > 0) {
    // Fetch the data
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }

    // Return the data as JSON
    echo json_encode($data);
} else {
    // No data found for the given ID
    echo json_encode(array('message' => 'No data found for the given ID'));
}

?>
