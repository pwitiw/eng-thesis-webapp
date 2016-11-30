DROP DATABASE IF EXISTS `webservice`;
CREATE DATABASE IF NOT EXISTS `webservice`;


CREATE TABLE IF NOT EXISTS `webservice`.`customers` (
 `ID` integer(10) NOT NULL AUTO_INCREMENT,
 `NAME` varchar(255) NOT NULL,
 `FIRST_NAME` varchar(255),
 `LAST_NAME` varchar(255),
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
 `CUSTOMER_ID` integer(10) NOT NULL,
 `POSITION_ID` integer(10) NOT NULL DEFAULT '1',
 `EXPRESS` integer(1) NOT NULL DEFAULT '0',
 `DATE` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `LAST_UPDATE` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `PARENT_ID` integer(10),
 `ACTIVE` integer(1) DEFAULT '0',
 PRIMARY KEY (`ID`),
 FOREIGN KEY (`CUSTOMER_ID`) REFERENCES `customers` (`ID`),
 FOREIGN KEY (`POSITION_ID`) REFERENCES `positions` (`ID`)
); 

CREATE TABLE IF NOT EXISTS `webservice`.`components` (
 `ID` integer(10) NOT NULL AUTO_INCREMENT,
 `ORDER_ID` integer(10) NOT NULL,
 `WIDTH` integer(10) NOT NULL,
 `HEIGHT` integer(10) NOT NULL,
 `AMOUNT` integer(10) unsigned NOT NULL,
 `COLOR` varchar(255) NOT NULL,
 `MISSING` integer(10) NOT NULL DEFAULT '0',
 `DATE` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `PARENT_ID` integer(10),
 PRIMARY KEY (`ID`),
 FOREIGN KEY (`ORDER_ID`) REFERENCES `orders` (`ID`)
); 

CREATE TABLE IF NOT EXISTS `webservice`.`events` (
 `ID` integer(20) NOT NULL AUTO_INCREMENT,
 `ORDER_ID` integer(20) NOT NULL,
 `WORKER_ID` integer(6) NOT NULL,
 `POSITION_ID` integer(10) NOT NULL,
 `DATE` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `MISSING` int(10) unsigned NOT NULL DEFAULT '0',
 PRIMARY KEY (`ORDER_ID`,`POSITION_ID`),
 KEY `ID` (`ID`),
 CONSTRAINT `FK_ORDER_ID_REF` FOREIGN KEY (`ORDER_ID`) REFERENCES `orders` (`ID`),
 CONSTRAINT `FK_POSITION_ID_REF` FOREIGN KEY (`POSITION_ID`) REFERENCES `positions` (`ID`)
); 



/*BISTOL DATABASE*/
DROP DATABASE IF EXISTS `bistoldb`;
CREATE DATABASE IF NOT EXISTS `bistoldb`;

CREATE TABLE IF NOT EXISTS `bistoldb`.`tklienci` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tfilie_id` int(10) unsigned NOT NULL,
  `nazwa` varchar(45) NOT NULL,
  `adres` varchar(45) DEFAULT NULL,
  `telefon` varchar(20) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `login` varchar(20) DEFAULT NULL,
  `haslo` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tklienci_FKIndex1` (`tfilie_id`)
);
