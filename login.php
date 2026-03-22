<?php
// login.php
header('Content-Type: application/json');

$conn = new mysqli('localhost', 'root', '', 'aliado'); // ajuste usuário/senha/banco se necessário
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Erro de conexão: ' . $conn->connect_error]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$email = $conn->real_escape_string($data['email'] ?? '');
$password = $data['password'] ?? '';

$sql = "SELECT * FROM usuarios WHERE email = '$email' LIMIT 1";
$result = $conn->query($sql);

if ($result && $result->num_rows === 1) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        unset($user['password']); // nunca envie a senha de volta
        echo json_encode(['success' => true, 'user' => $user]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Senha incorreta.']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Usuário não encontrado.']);
}
$conn->close();
?>
