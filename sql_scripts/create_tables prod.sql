DROP DATABASE IF EXISTS `webservice`;
CREATE DATABASE IF NOT EXISTS `webservice`;


CREATE TABLE IF NOT EXISTS `webservice`.`customers` (
 `ID` integer(10) NOT NULL,
 `NAME` varchar(255) NOT NULL,
 `FIRST_NAME` varchar(255),
 `LAST_NAME` varchar(255),
 `ACTIVE` integer(1) NOT NULL DEFAULT '1',
 PRIMARY KEY (`ID`)
); 

CREATE TABLE IF NOT EXISTS `webservice`.`workers` (
 `ID` integer(10) NOT NULL AUTO_INCREMENT,
 `NAME` varchar(255) NOT NULL,
 `SURNAME` varchar(255) NOT NULL,
 `POSITION_ID` integer(10) NOT NULL,
 `CODE` integer(6) NOT NULL UNIQUE,
 `ACTIVE` integer(1) NOT NULL DEFAULT '1',
 PRIMARY KEY (`ID`)
 ); 

CREATE TABLE IF NOT EXISTS `webservice`.`positions` (
 `ID` integer(10) NOT NULL,
 `NAME` varchar(255) NOT NULL,
 PRIMARY KEY (`ID`)
); 

CREATE TABLE IF NOT EXISTS `webservice`.`orders` (
 `ID` integer(10) NOT NULL AUTO_INCREMENT,
 `NAME` varchar(255) NOT NULL,
 `COLOR` varchar(255) NOT NULL,
 `CUSTOMER_ID` integer(10) NOT NULL,
 `POSITION_ID` integer(10) NOT NULL DEFAULT '1',
 `EXPRESS` integer(1) NOT NULL DEFAULT '0',
 `DATE` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `LAST_UPDATE` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `PARENT_ID` integer(10),
 `ACTIVE` integer(1) DEFAULT '0',
 'DB_ID' integer(10)
 PRIMARY KEY (`ID`),
 FOREIGN KEY (`CUSTOMER_ID`) REFERENCES `webservice`.`customers` (`ID`),
 FOREIGN KEY (`POSITION_ID`) REFERENCES `webservice`.`positions` (`ID`)
); 

CREATE TABLE IF NOT EXISTS `webservice`.`components` (
 `ID` integer(10) NOT NULL AUTO_INCREMENT,
 `ORDER_ID` integer(10) NOT NULL,
 `WIDTH` integer(10) NOT NULL,
 `HEIGHT` integer(10) NOT NULL,
 `AMOUNT` integer(10) unsigned NOT NULL,
 `MISSING` integer(10) NOT NULL DEFAULT '0',
 `COMMENT` varchar(255),
 `PARENT_ID` integer(10),
 PRIMARY KEY (`ID`),
 FOREIGN KEY (`ORDER_ID`) REFERENCES `webservice`.`orders` (`ID`)
); 

CREATE TABLE IF NOT EXISTS `webservice`.`events` (
 `ID` integer(20) NOT NULL AUTO_INCREMENT,
 `ORDER_ID` integer(20) NOT NULL,
 `WORKER_ID` integer(10) NOT NULL,
 `POSITION_ID` integer(10) NOT NULL,
 `DATE` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `MISSING` int(10) unsigned NOT NULL DEFAULT '0',
 PRIMARY KEY (`ORDER_ID`,`POSITION_ID`),
 KEY `ID` (`ID`),
 CONSTRAINT `FK_ORDER_ID_REF` FOREIGN KEY (`ORDER_ID`) REFERENCES `webservice`.`orders` (`ID`),
 CONSTRAINT `FK_POSITION_ID_REF` FOREIGN KEY (`POSITION_ID`) REFERENCES `webservice`.`positions` (`ID`),
 CONSTRAINT `FK_WORKER_ID_REF` FOREIGN KEY (`WORKER_ID`) REFERENCES `webservice`.`workers` (`ID`)
); 

CREATE TABLE IF NOT EXISTS `webservice`.`synchronization` (
 `ID` integer(20) NOT NULL AUTO_INCREMENT,
 `SYNC_DATE` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `AMOUNT` integer(20) NOT NULL DEFAULT '0',
 PRIMARY KEY (`ID`)
 ); 

