DROP DATABASE IF EXISTS `SmartLearnerBD`;
CREATE DATABASE SmartLearnerBD;

USE SmartLearnerBD;

CREATE TABLE `Groups`(
	`Id`		INT AUTO_INCREMENT PRIMARY KEY,
    `GroupName`	VARCHAR(50) NOT NULL
);

CREATE TABLE `Users`(
	`Id` 			INT AUTO_INCREMENT PRIMARY KEY,
	`FirstName` 	VARCHAR(50) NOT NULL DEFAULT "FirstName",
	`SecondName` 	VARCHAR(50) NOT NULL DEFAULT "SecondName",
	`PriorityLevel`	INT 		NOT NULL DEFAULT 2 CHECK(`PriorityLevel` >= 0 AND `PriorityLevel` <= 4),
    `Birthday`		DATETIME,
    `GroupID`		INT,
    FOREIGN KEY (`GroupID`) REFERENCES `Groups`(`Id`) 
);

/*PriorityLevel - 0 - Admin, 1 - Teacher, 2 - Student, 3 - Jast User */

CREATE TABLE `Places`(
	`Id`		INT AUTO_INCREMENT PRIMARY KEY,
    `Name`		VARCHAR(100) NOT NULL,
    `Tariff`	INT NOT NULL DEFAULT 0 CHECK(`Tariff` >= 0 AND `Tariff` <= 4)
); /*`Tariff` : 1 - free, 2-buy 5$, 3 - 20$, 4 - Vip */

CREATE TABLE `Subjects`(
	`Id`		INT AUTO_INCREMENT PRIMARY KEY,
	`Name`		VARCHAR(50) NOT NULL DEFAULT "Name",
	`TeacherId`	INT NOT NULL CHECK((SELECT `PriorityLevel` FROM `Users` WHERE `Id` = `TeacherId`) = 1),/*1 - Teacher*/
    `PlaceId`	INT NOT NULL,
    FOREIGN KEY (`TeacherId`) REFERENCES `Users`(`Id`),
    FOREIGN KEY (`PlaceId`) REFERENCES `Places`(`Id`)    
);

CREATE TABLE `Points`(
	`Id`		INT AUTO_INCREMENT PRIMARY KEY,
	`Value` 	INT NOT NULL DEFAULT 0,
    `UserId`  	INT NOT NULL,
    `SubjectId`	INT NOT NULL,
    FOREIGN KEY (`UserID`) REFERENCES `Users`(`Id`), 
    FOREIGN KEY (`SubjectId`) REFERENCES `Subjects`(`Id`)     
);

CREATE TABLE `News`(
	`Id`		INT AUTO_INCREMENT PRIMARY KEY,
    `Header` 	VARCHAR(100) NOT NULL,
    `Content` 	VARCHAR(500) NOT NULL,
    `CreatorId`	INT,
    FOREIGN KEY (`CreatorId`) REFERENCES `Users`(`Id`)
);

CREATE TABLE `Visitations`(
	`Id`		INT AUTO_INCREMENT PRIMARY KEY,
    `UserId`	INT NOT NULL,
    `SubjectId`	INT NOT NULL,
    FOREIGN KEY (`UserId`) REFERENCES `Users`(`Id`),
    FOREIGN KEY (`SubjectId`) REFERENCES `Subjects`(`Id`)
);

CREATE TABLE `Schedules`(
	`Id`		INT AUTO_INCREMENT PRIMARY KEY,
    `Name`		VARCHAR(100) NOT NULL,
    `Number`	INT NOT NULL,
    `Time`		DATETIME NOT NULL
);

CREATE TABLE `PlaceConnection`(
    `UserId`	INT NOT NULL,
    `PlaceId`	INT NOT NULL,
    FOREIGN KEY (`UserId`) REFERENCES `Users`(`Id`),
    FOREIGN KEY (`PlaceId`) REFERENCES `Places`(`Id`)
);


-- DELETE FROM `Users`;

-- DROP TABLE `Users`;

INSERT INTO `Users` (FirstName,SecondName,PriorityLevel) VALUES('Mykola','Bakun', 0);
INSERT INTO `Users` (FirstName,SecondName,PriorityLevel) VALUES('Dmytro','Peleshko', 1);
INSERT INTO `Users` (FirstName,SecondName,PriorityLevel) VALUES('Ivan','Ivanov', 1);
INSERT INTO `Users` (FirstName,SecondName,PriorityLevel) VALUES('Bogdan','Borysej', 2);
INSERT INTO `Places` (Name,Tariff) VALUES('IT Step University', 4);
INSERT INTO `Places` (Name,Tariff) VALUES('Lviv Politech', 2);
INSERT INTO `Subjects` (Name,TeacherId,PlaceId) VALUES('Programming', 2, 1);
INSERT INTO `Subjects` (Name,TeacherId,PlaceId) VALUES('Computer science', 3, 2);
INSERT INTO `Subjects` (Name,TeacherId,PlaceId) VALUES('C++', 2, 1);