CREATE TABLE IF NOT EXISTS Customer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS Expense (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(500) DEFAULT 'Default Name',
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    amount DECIMAL(10, 2),
    type ENUM('income', 'expense'),
    category VARCHAR(255),
    customerid INT,
    FOREIGN KEY (customerid) REFERENCES
);