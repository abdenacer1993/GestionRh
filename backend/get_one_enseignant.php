<?php
    
    require './dataBase.php';

    header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
    
    $request_body = file_get_contents('php://input');
  
    $data = json_decode($request_body);


    $name = $data->name;
    $data = array();

    if(isset($data)){
        $sql="SELECT * FROM user WHERE name = '$name'";
        $result = mysqli_query($conn,$sql);
        if ($result){
         
           
            while($row = mysqli_fetch_array($result)){
                $data[] = $row;
            }
        
            echo json_encode($data);

            }
    }

  
?>