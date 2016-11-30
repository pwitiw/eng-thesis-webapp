INSERT INTO `webservice`.`customers` (`NAME`, `FIRST_NAME`, `LAST_NAME`) 
VALUES
('Macierewicz', '', ''),
('Kowalski-kuchnie', '', ''),
('Perfekt', '', ''),
('Kaczynski', '', ''),
('Tusk-meble', '', ''),
('Meblolux', '', ''),
('Mebel-lak', '', '')
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

INSERT INTO `orders` (`NAME`, `CUSTOMER_ID`, `POSITION_ID`, `EXPRESS`, `DATE`, `LAST_UPDATE`, `PARENT_ID`, `ACTIVE`) 
VALUES
 ('001 TW', (select ID from customers where name = 'Macierewicz' ), '1', '0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '1'),
 ('002 TW', (select ID from customers where name = 'Kowalski-kuchnie' ), '1', '0', CURRENT_TIMESTAMP+100, CURRENT_TIMESTAMP+100, NULL, '1'),
 ('003 TW', (select ID from customers where name = 'Perfekt' ), '1', '0', CURRENT_TIMESTAMP+200, CURRENT_TIMESTAMP+200, NULL, '0'),
 ('004 TW', (select ID from customers where name = 'Perfekt' ), '1', '0', CURRENT_TIMESTAMP-200, CURRENT_TIMESTAMP-200, NULL, '1'),
 ('005 TW', (select ID from customers where name = 'Kaczynski' ), '1', '0', CURRENT_TIMESTAMP+300, CURRENT_TIMESTAMP+300, NULL, '1'),
 ('006 TW', (select ID from customers where name = 'Macierewicz' ), '1', '0', CURRENT_TIMESTAMP+400, CURRENT_TIMESTAMP+400, NULL, '1'),
 ('007 TW', (select ID from customers where name = 'Macierewicz' ), '1', '0', CURRENT_TIMESTAMP+500, CURRENT_TIMESTAMP+500, NULL, '1'),
 ('008 TW', (select ID from customers where name = 'Kowalski-kuchnie' ), '1', '0', CURRENT_TIMESTAMP+600, CURRENT_TIMESTAMP+600, NULL, '1'),
 ('009 TW', (select ID from customers where name = 'Kaczynski' ), '1', '0', CURRENT_TIMESTAMP+300, CURRENT_TIMESTAMP+300, NULL, '1'),
 ('010 TW', (select ID from customers where name = 'Mebel-lak' ), '1', '0', CURRENT_TIMESTAMP+400, CURRENT_TIMESTAMP+400, NULL, '1'),
 ('011 TW', (select ID from customers where name = 'Meblolux' ), '1', '0', CURRENT_TIMESTAMP+51000, CURRENT_TIMESTAMP+51000, NULL, '1'),
 ('012 TW', (select ID from customers where name = 'Macierewicz' ), '1', '0', CURRENT_TIMESTAMP+600, CURRENT_TIMESTAMP+600, NULL, '1'),
 ('013 TW', (select ID from customers where name = 'Meblolux' ), '1', '0', CURRENT_TIMESTAMP+500, CURRENT_TIMESTAMP+500, NULL, '1'),
 ('014 TW', (select ID from customers where name = 'Tusk-meble' ), '1', '0', CURRENT_TIMESTAMP+4200, CURRENT_TIMESTAMP+4200, NULL, '1'),
 ('015 TW', (select ID from customers where name = 'Tusk-meble' ), '1', '0', CURRENT_TIMESTAMP+500, CURRENT_TIMESTAMP+500, NULL, '1'),
 ('016 TW', (select ID from customers where name = 'Kowalski-kuchnie' ), '1', '0', CURRENT_TIMESTAMP+60000, CURRENT_TIMESTAMP+60000, NULL, '1')
 ;
 
 INSERT INTO `components` (`ORDER_ID`, `WIDTH`, `HEIGHT`, `AMOUNT`, `COLOR`, `MISSING`, `DATE`, `PARENT_ID`) 
 VALUES 
 ((select ID from orders where name = '001 TW' ), '340', '280', '3', '', 'RAL1000', CURRENT_TIMESTAMP, NULL),
 ((select ID from orders where name = '001 TW' ), '300', '480', '2', '', 'RAL1000', CURRENT_TIMESTAMP, NULL),
 ((select ID from orders where name = '001 TW' ), '1200', '200', '1', '', 'RAL1000', CURRENT_TIMESTAMP, NULL),
 ((select ID from orders where name = '001 TW' ), '340', '280', '5', '', 'RAL2000', CURRENT_TIMESTAMP, NULL)
 ;