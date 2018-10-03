CREATE DATABASE SmartLearnerBD;

USE SmartLearnerBD;

CREATE TABLE `Users`(
	Id 				INT AUTO_INCREMENT PRIMARY KEY,
	FirstName 		VARCHAR(50) NOT NULL DEFAULT "FirstName",
	SecondName 		VARCHAR(50) NOT NULL DEFAULT "SecondName",
	PriorityLevel 	INT 		NOT NULL DEFAULT 2 CHECK(PriorityLevel >= 0 AND PriorityLevel <= 4),
    Birthday		DATETIME,
    GroupID			INT
);

/*CHECK(PriorityLevel >= 0 AND PriorityLevel <= 4)
 0 - Admin, 1 - Techer, 2 - Student, 3 - Jast User */

CREATE TABLE `Points`(
	Id			INT AUTO_INCREMENT PRIMARY KEY,
	Value 		INT NOT NULL DEFAULT 0,
    UserId  	INT NOT NULL,
    SubjectId	INT NOT NULL
);

CREATE TABLE `Subjects`(
	Id			INT AUTO_INCREMENT PRIMARY KEY,
	Name		VARCHAR(50) NOT NULL DEFAULT "Name",
	TeacherId	INT NOT NULL
);

CREATE TABLE `Groups`(
	Id			INT AUTO_INCREMENT PRIMARY KEY,
    GroupName 	VARCHAR(50) NOT NULL
);

CREATE TABLE `News`(
	Id			INT AUTO_INCREMENT PRIMARY KEY,
    Header 		VARCHAR(100) NOT NULL,
    Content 	VARCHAR(500) NOT NULL,
    CreatorId	INT
);

CREATE TABLE `Visitations`(
	Id			INT AUTO_INCREMENT PRIMARY KEY,
    UserId		INT NOT NULL,
    SubjectId 	INT
);

CREATE TABLE `Schedules`(
	Id		INT AUTO_INCREMENT PRIMARY KEY	
);

DELETE FROM `Users`;

DROP TABLE `Users`;

INSERT INTO `Users` (FirstName,SecondName,PriorityLevel) VALUES('Mykola','Bakun', 0);
