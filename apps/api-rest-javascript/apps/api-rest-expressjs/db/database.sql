CREATE TABLE users (
    user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email_address VARCHAR(255) UNIQUE NOT NULL
);


INSERT INTO users (first_name, last_name, email_address) VALUES
('John', 'Doe', 'johndoe@example.com'),
('Jane', 'Smith', 'janesmith@example.com'),
('Michael', 'Johnson', 'michaeljohnson@example.com');
