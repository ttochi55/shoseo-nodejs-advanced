/* 
 테이블 생성
 */
CREATE TABLE if NOT EXISTS address_book (
	NO INT UNSIGNED NOT NULL AUTO_INCREMENT,
	NAME VARCHAR(10) NOT NULL,
	tel VARCHAR(14),
	nickname VARCHAR(20) DEFAULT '별명',
	PRIMARY KEY(no)
) AUTO_INCREMENT = 10001;

show TABLES;