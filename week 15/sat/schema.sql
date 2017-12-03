CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
id int not null primary key auto_increment,
author varchar(30) not null,
chirp varchar(255),
time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);