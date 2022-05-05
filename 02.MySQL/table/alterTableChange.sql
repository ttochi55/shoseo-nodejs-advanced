/* 
 컬럼명 변경, 컬럼 자료형 변경
 ALTER TABLE [테이블 명] CHANGE [기존 컬럼명] [새컬럼명] 자료형;
 ALTER TABLE [테이블 명] CHANGE [컬럼명] [컬럼명] 새 자료형;
 */
ALTER TABLE
	address_book CHANGE NO aid INT(8);

ALTER TABLE
	address_book CHANGE aid aid INT(4) UNSIGNED AUTO_INCREMENT;