CREATE DATABASE IF NOT EXIST restapi;
USE restapi;
CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO users VALUES
(1, 'Joe', 1000),
(2, 'Henry', 2000),
(3, 'Sam', 2500),
(4, 'Max', 1500);