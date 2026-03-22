-- usuarios.sql
-- Estrutura da tabela de usuários para MariaDB/MySQL

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Exemplo de inserção (remova em produção):
-- INSERT INTO usuarios (username, full_name, phone, email, password) VALUES ('usuario1', 'Nome Completo', '11999999999', 'email@exemplo.com', 'senha_hash');
