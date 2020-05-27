CREATE DATABASE pern_chitter;

CREATE TABLE Posts
(
  PostID SERIAL Primary Key,
  UserName varchar(255),
  Post varchar(280)
);

