CREATE DATABASE DB_EJ1;
USE DB_EJ1;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    email VARCHAR(50),
    profesion VARCHAR(50)
);

INSERT INTO usuarios (nombre, email, profesion) VALUES
                                                    ('Ana García', 'ana@mail.com', 'Desarrolladora'),
                                                    ('Juan Pérez', 'juan@mail.com', 'Diseñador'),
                                                    ('Maria López', 'maria@mail.com', 'Analista'),
                                                    ('Carlos Ruiz', 'carlos@mail.com', 'Project Manager');