<?php
// cadastro-arquivo.php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$usuario = [
    'username' => $data['username'] ?? '',
    'fullName' => $data['fullName'] ?? '',
    'phone'    => $data['phone'] ?? '',
    'email'    => $data['email'] ?? '',
    'password' => password_hash($data['password'], PASSWORD_DEFAULT)
];

// Salva cada usuário como uma linha JSON no arquivo usuarios.txt
file_put_contents('usuarios.txt', json_encode($usuario) . PHP_EOL, FILE_APPEND);

echo json_encode(['success' => true]);
?>
