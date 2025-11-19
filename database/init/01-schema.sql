DROP DATABASE IF EXISTS esp_monitor;
CREATE DATABASE esp_monitor CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE esp_monitor;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin','viewer') DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password, role) VALUES
('Admin', 'admin@example.com',
'$2a$10$Y6sVGe8NQBYtlK8rle1z2ezSlwHeyqDOP0nSrfJbsfeFYLYioZHC6',
'admin');

CREATE TABLE readings (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  device_id VARCHAR(128),
  temperature DECIMAL(5,2),
  humidity DECIMAL(5,2),
  pressure DECIMAL(7,2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
