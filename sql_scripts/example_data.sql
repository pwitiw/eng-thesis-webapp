INSERT INTO `webservice`.`customers` (`NAME`, `FIRST_NAME`, `LAST_NAME`, `ACTIVE`) 
VALUES
('Macierewicz', '', '', '1'),
('Kowalski-kuchnie', '', '', '1'),
('Perfekt', '', '', '1'),
('Kaczynski', '', '', '1'),
('Tusk-meble', '', '', '1'),
('Meblolux', '', '', '1'),
('Mebel-lak', '', '', '1')
;

INSERT INTO `webservice`.`workers` (`NAME`,`SURNAME`,`POSITION_ID`, `CODE`, `ACTIVE`) 
VALUES
('Jan', 'Frezarz', 1, '111', '1'),
('Adam', 'Frezarz', 1, '112', '1'),
('Kamil', 'Czysciciel', 2, '222', '1'),
('Mateusz', 'Czysciciel', 2, '223', '1'),
('Janusz', 'Podkladowiec', 3, '333', '0'),
('Amadeusz', 'Podkladowiec',3, '334', '1'),
('Jan', 'Szlifierz', 4, '444', '1'),
('Adam', 'Szlifierz', 4, '445', '1'),
('Amadeusz', 'Lakiernik',5, '555', '0'),
('Mateusz', 'Lakiernik', 5, '556', '1'),
('Mateusz', 'Polernik', 6, '666', '1'),
('Janusz', 'Polernik', 6, '667', '1'),
('Halina', 'Pakowaczka', 7, '777', '1')
;

INSERT INTO `webservice`.`orders` (`NAME`, `COLOR`, `CUSTOMER_ID`, `POSITION_ID`, `EXPRESS`, `DATE`, `LAST_UPDATE`, `PARENT_ID`, `ACTIVE`) 
VALUES
 ('001 TW', 'RAL1028', (select ID from webservice.customers where name = 'Macierewicz' ), '3', '0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '1'),
 ('002 TW', 'RAL1100', (select ID from webservice.customers where name = 'Kowalski-kuchnie' ), '2', '0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '1'),
 ('003 TW', 'RAL1000', (select ID from webservice.customers where name = 'Perfekt' ), '2', '0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '0'),
 ('004 TW', 'RAL0258', (select ID from webservice.customers where name = 'Perfekt' ), '2', '0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '1'),
 ('005 TW', 'RAL1345', (select ID from webservice.customers where name = 'Kaczynski' ), '1', '0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '1'),
 ('006 TW', 'RAL0145', (select ID from webservice.customers where name = 'Macierewicz' ), '1', '0', CURRENT_TIMESTAMP+400, CURRENT_TIMESTAMP+400, NULL, '1'),
 ('007 TW', 'RAL0013', (select ID from webservice.customers where name = 'Macierewicz' ), '1', '0', CURRENT_TIMESTAMP+500, CURRENT_TIMESTAMP+500, NULL, '1'),
 ('008 TW', 'RAL0147', (select ID from webservice.customers where name = 'Kowalski-kuchnie' ), '1', '0', CURRENT_TIMESTAMP+600, CURRENT_TIMESTAMP+600, NULL, '1'),
 ('009 TW', 'RAL0478', (select ID from webservice.customers where name = 'Kaczynski' ), '1', '0', CURRENT_TIMESTAMP+300, CURRENT_TIMESTAMP+300, NULL, '1'),
 ('010 TW', 'RAL2102', (select ID from webservice.customers where name = 'Mebel-lak' ), '1', '0', CURRENT_TIMESTAMP+400, CURRENT_TIMESTAMP+400, NULL, '1'),
 ('011 TW', 'RAL2589', (select ID from webservice.customers where name = 'Meblolux' ), '1', '0', CURRENT_TIMESTAMP+800, CURRENT_TIMESTAMP+800, NULL, '1'),
 ('012 TW', 'RAL1243', (select ID from webservice.customers where name = 'Macierewicz' ), '1', '0', CURRENT_TIMESTAMP+600, CURRENT_TIMESTAMP+600, NULL, '1'),
 ('013 TW', 'RAL1478', (select ID from webservice.customers where name = 'Meblolux' ), '1', '0', CURRENT_TIMESTAMP+500, CURRENT_TIMESTAMP+500, NULL, '1'),
 ('014 TW', 'RAL2865', (select ID from webservice.customers where name = 'Tusk-meble' ), '1', '0', CURRENT_TIMESTAMP+700, CURRENT_TIMESTAMP+700, NULL, '1'),
 ('015 TW', 'RAL0558', (select ID from webservice.customers where name = 'Tusk-meble' ), '1', '0', CURRENT_TIMESTAMP+500, CURRENT_TIMESTAMP+500, NULL, '1'),
 ('016 TW', 'RAL0120', (select ID from webservice.customers where name = 'Kowalski-kuchnie' ), '1', '0', CURRENT_TIMESTAMP+200, CURRENT_TIMESTAMP+200, NULL, '1')
 ;
 
 INSERT INTO `webservice`.`components` (`ORDER_ID`, `WIDTH`, `HEIGHT`, `AMOUNT`, `MISSING`, `COMMENT`, `PARENT_ID`) 
 VALUES 
 ((select ID from webservice.orders where name = '001 TW' ), '340', '280', '3', '0', '', NULL),
 ((select ID from webservice.orders where name = '001 TW' ), '300', '480', '2', '0', 'FREZ PO SZEROKOSCI', NULL),
 ((select ID from webservice.orders where name = '001 TW' ), '1200', '200', '1', '0', 'FREZ PO DLUGOSCI', NULL),
 ((select ID from webservice.orders where name = '001 TW' ), '340', '280', '5', '0', '', NULL),
 ((select ID from webservice.orders where name = '002 TW' ), '340', '280', '3', '0', '', NULL),
 ((select ID from webservice.orders where name = '002 TW' ), '300', '4180', '4', '0', 'FREZ PO DLUGOSCI', NULL),
 ((select ID from webservice.orders where name = '003 TW' ), '1200', '200', '1', '0', '', NULL),
 ((select ID from webservice.orders where name = '003 TW' ), '340', '280', '2', '0', '', NULL),
 ((select ID from webservice.orders where name = '003 TW' ), '1200', '2100', '1', '0', 'FREZ PO SZEROKOSCI', NULL),
 ((select ID from webservice.orders where name = '004 TW' ), '340', '280', '5', '0', '', NULL),
 ((select ID from webservice.orders where name = '004 TW' ), '1340', '280', '3', '0', '', NULL),
 ((select ID from webservice.orders where name = '004 TW' ), '3100', '4180', '4', '0', '', NULL),
 ((select ID from webservice.orders where name = '004 TW' ), '1200', '2100', '3', '0', '', NULL),
 ((select ID from webservice.orders where name = '004 TW' ), '3140', '280', '5', '0', 'FREZ PO SZEROKOSCI', NULL),
 ((select ID from webservice.orders where name = '005 TW' ), '340', '280', '5', '0', '', NULL),
 ((select ID from webservice.orders where name = '005 TW' ), '1340', '280', '3', '0', '', NULL),
 ((select ID from webservice.orders where name = '005 TW' ), '3100', '4180', '4', '0', '', NULL),
 ((select ID from webservice.orders where name = '005 TW' ), '1200', '2100', '3', '0', '', NULL),
 ((select ID from webservice.orders where name = '006 TW' ), '3140', '280', '5', '0', '', NULL),
 ((select ID from webservice.orders where name = '007 TW' ), '340', '280', '2', '0', '', NULL),
 ((select ID from webservice.orders where name = '007 TW' ), '1200', '2100', '1', '0', '', NULL),
 ((select ID from webservice.orders where name = '007 TW' ), '340', '280', '5', '0', 'FREZ PO DLUGOSCI', NULL),
 ((select ID from webservice.orders where name = '008 TW' ), '1200', '200', '1', '0', '', NULL),
 ((select ID from webservice.orders where name = '008 TW' ), '340', '280', '2', '0', 'FREZ PO SZEROKOSCI', NULL),
 ((select ID from webservice.orders where name = '009 TW' ), '1200', '2100', '1', '0', '', NULL),
 ((select ID from webservice.orders where name = '010 TW' ), '340', '280', '5', '0', '', NULL),
 ((select ID from webservice.orders where name = '010 TW' ), '1340', '280', '3', '0', '', NULL),
 ((select ID from webservice.orders where name = '010 TW' ), '3100', '4180', '4', '0', '', NULL),
 ((select ID from webservice.orders where name = '011 TW' ), '1200', '2100', '3', '0', '', NULL),
 ((select ID from webservice.orders where name = '012 TW' ), '3140', '280', '5', '0', '', NULL),
 ((select ID from webservice.orders where name = '012 TW' ), '340', '280', '5', '0', '', NULL),
 ((select ID from webservice.orders where name = '012 TW' ), '1340', '280', '3', '0', '', NULL),
 ((select ID from webservice.orders where name = '013 TW' ), '340', '280', '5', '0', '', NULL),
 ((select ID from webservice.orders where name = '013 TW' ), '1340', '280', '3', '0', 'FREZ PO DLUGOSCI', NULL),
 ((select ID from webservice.orders where name = '014 TW' ), '3100', '4180', '4', '0', '', NULL),
 ((select ID from webservice.orders where name = '015 TW' ), '1200', '2100', '3', '0', '', NULL),
 ((select ID from webservice.orders where name = '015 TW' ), '3140', '280', '5', '0', '', NULL),
 ((select ID from webservice.orders where name = '016 TW' ), '340', '280', '5', '0', 'FREZ PO DLUGOSCI', NULL),
 ((select ID from webservice.orders where name = '016 TW' ), '1340', '280', '3', '0', '', NULL)
 ;
 
 INSERT INTO `webservice`.`events` (`ORDER_ID`, `WORKER_ID`, `POSITION_ID`, `DATE`, `MISSING`) 
 VALUES 
 ((select ID from webservice.orders where name = '001 TW' ), (select ID from webservice.workers where surname = 'Frezarz' and name = 'Jan' ), (select POSITION_ID from webservice.workers where name = 'Jan' and surname = 'Frezarz' ), CURRENT_TIMESTAMP, '0'),
 ((select ID from webservice.orders where name = '001 TW' ), (select ID from webservice.workers where surname = 'Czysciciel' and name = 'Mateusz' ), (select POSITION_ID from webservice.workers where name = 'Mateusz' and surname = 'Czysciciel' ), CURRENT_TIMESTAMP, '0'),
 ((select ID from webservice.orders where name = '002 TW' ), (select ID from webservice.workers where surname = 'Frezarz' and name = 'Jan' ), (select POSITION_ID from webservice.workers where name = 'Jan' and surname = 'Frezarz' ), CURRENT_TIMESTAMP, '0'),
 ((select ID from webservice.orders where name = '003 TW' ), (select ID from webservice.workers where surname = 'Frezarz' and name = 'Jan' ), (select POSITION_ID from webservice.workers where name = 'Jan' and surname = 'Frezarz' ), CURRENT_TIMESTAMP, '0'),
 ((select ID from webservice.orders where name = '004 TW' ), (select ID from webservice.workers where surname = 'Frezarz' and name = 'Jan' ), (select POSITION_ID from webservice.workers where name = 'Jan' and surname = 'Frezarz' ), CURRENT_TIMESTAMP, '0')
 ;

 -- BISTOLB test data
 INSERT INTO `bistolb`.`tzamowienia` (`NAME`, `COLOR`, `CUSTOMER_ID`, `POSITION_ID`, `EXPRESS`, `DATE`, `LAST_UPDATE`, `PARENT_ID`, `ACTIVE`) 
VALUES
 ('017 TW', 'RAL1111', 1, '2', '0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '1'),
 ('018 TW', 'RAL1210', 2, '1', '0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '1'),
 ('019 TW', 'RAL0000', 3, '1', '0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '0'),
 ('020 TW', 'RAL2158', 4, '1', '0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '1'),
 ('021 TW', 'RAL1344', 5, '1', '0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '1')
 ;
 
INSERT INTO `bistolb`.`telementy` (`ORDER_ID`, `WIDTH`, `HEIGHT`, `AMOUNT`, `MISSING`, `COMMENT`, `PARENT_ID`) 
 VALUES 
 ((select ID from bistolb.tzamowienia where name = '017 TW' ), '340', '280', '3', '0', '', NULL),
 ((select ID from bistolb.tzamowienia where name = '017 TW' ), '300', '480', '2', '0', 'FREZ PO SZEROKOSCI', NULL),
 ((select ID from bistolb.tzamowienia where name = '018 TW' ), '1200', '200', '1', '0', 'FREZ PO DLUGOSCI', NULL),
 ((select ID from bistolb.tzamowienia where name = '018 TW' ), '340', '280', '5', '0', '', NULL),
 ((select ID from bistolb.tzamowienia where name = '018 TW' ), '340', '280', '3', '0', '', NULL),
 ((select ID from bistolb.tzamowienia where name = '019 TW' ), '300', '4180', '4', '0', 'FREZ PO DLUGOSCI', NULL),
 ((select ID from bistolb.tzamowienia where name = '020 TW' ), '1200', '200', '1', '0', '', NULL),
 ((select ID from bistolb.tzamowienia where name = '020 TW' ), '340', '280', '2', '0', '', NULL),
 ((select ID from bistolb.tzamowienia where name = '021 TW' ), '1200', '2100', '3', '0', '', NULL),
 ((select ID from bistolb.tzamowienia where name = '021 TW' ), '3140', '280', '5', '0', '', NULL),
 ((select ID from bistolb.tzamowienia where name = '021 TW' ), '340', '280', '5', '0', 'FREZ PO DLUGOSCI', NULL),
 ((select ID from bistolb.tzamowienia where name = '021 TW' ), '1340', '280', '3', '0', '', NULL)
 ;
 
 
 
 
 
 
 
 
 
 
 
 
 