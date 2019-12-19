CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id: INT NOT NULL AUTO_INCREMENT;
    buger_name: VARCHAR (100);
    devoured: BOOLEAN;
    PRIMARY KEY (id);
);
