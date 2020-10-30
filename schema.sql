DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VERCHAR (30) NOT NULL,
);

CREATE TABLE role (
id INT PRIMARY KEY,
title VARBINARY (30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARBINARY(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL
);