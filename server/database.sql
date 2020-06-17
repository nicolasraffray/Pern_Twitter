CREATE DATABASE pern_chitter;

CREATE TABLE Posts
(
  PostID SERIAL Primary Key,
  UserName varchar(255),
  Post varchar(280)
);

CREATE TABLE Users
(
  UserID SERIAL Primary Key,
  Email varchar(255) ,
  UserName varchar(255) ,
  password varchar(255),
  UNIQUE (Email),
  UNIQUE(UserName)
);

ALTER TABLE Posts
DROP COLUMN UserName;

ALTER TABLE Posts
ADD COLUMN UserID int;

ALTER TABLE Posts
ADD CONSTRAINT constraint_fk FOREIGN KEY (UserId) REFERENCES Users
(userid)
ON
DELETE CASCADE;