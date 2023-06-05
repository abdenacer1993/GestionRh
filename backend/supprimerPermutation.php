<?php
    require './dataBase.php';

    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

    // Retrieve the ID of the record to be deleted from the request
    $id = $_GET['id'];

    // Construct the SQL query to delete the record based on the provided ID
    $sql = "DELETE FROM demanagment WHERE id = $id";

    // Execute the query
    if (mysqli_query($conn, $sql)) {
        // Deletion was successful
        echo json_encode(array('message' => 'Record deleted successfully'));
    } else {
        // Deletion failed
        echo json_encode(array('message' => 'Failed to delete record'));
    }

    // Close the database connection
    mysqli_close($conn);
?>
