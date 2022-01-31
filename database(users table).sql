ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'hazard';
create database ecomerce ;
use ecomerce;
 create table users(iduser int auto_increment ,username varchar(20),email varchar(100), password varchar(100) ,seller boolean ,primary key(iduser));
 
 insert into users values (3,"abdellah","abdellah@gmail.com","passwordkcwsj", true);
  insert into users values (2,"houcine","houcine@gmail.com","passwordkcwsj", true);
 
 select * from users;
  select * from product;
 /*delete from users where iduser=89;
 delete from users where iduser between 111 and 112 ; */
 
 create table product(idp int Primary key, namep varchar(50) ,oldprice int , newprice int  , discount int , img varchar(100));
 
 insert into product values(3,"t-shirta",5000,3000,70,"/public/imgs/pro3.png");
 show tables ;
 alter table product add column(categorie varchar(50));