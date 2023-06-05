<?php
require __DIR__ . '/vendor/autoload.php';
require_once 'vendor\firebase\php-jwt\src\JWT.php';
require_once 'vendor\firebase\php-jwt\src\SignatureInvalidException.php';
require_once 'vendor\firebase\php-jwt\src\BeforeValidException.php';
require_once 'vendor\firebase\php-jwt\src\ExpiredException.php';
require_once 'vendor\firebase\php-jwt\src\JWK.php';

use Firebase\JWT\JWT;

function generateJWT($id, $name, $email, $role) {
    $secretKey = "rh project";
    $issuedAt = time();
    $expirationTime = $issuedAt + 60 * 60;  // JWT expiration time (1 hour)
    $payload = array(
        'id' => $id,
        'name' => $name,
        'email' =>$email,
        'role' => $role,
        'iat' => $issuedAt,
        'exp' => $expirationTime
    );
    $jwt = JWT::encode($payload, $secretKey);
    return $jwt;
}
?>
