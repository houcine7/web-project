ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'hazard';
create database ecomerce ;
use ecomerce;
 create table users(iduser int auto_increment ,username varchar(20),email varchar(100), password varchar(100) ,seller boolean ,primary key(iduser));
 
 insert into users values (3,"abdellah","abdellah@gmail.com","passwordkcwsj", true);
  insert into users values (2,"houcine","houcine@gmail.com","passwordkcwsj", true);
 
 select * from users;
 /*delete from users where iduser between 43 and 60 ; */