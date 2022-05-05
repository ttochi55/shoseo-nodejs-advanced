/* 
 컬럼 순서 변경
 맨 앞으로 변경: ALTER TABLE [테이블 명] MODIFY [컬럼명] 자료형 FIRST;
 지정 컬럼 뒤로 변경: ALTER TABLE [테이블 명] MODIFY [컬럼명] 자료형 AFTER [다른 컬럼명];
 */
ALTER TABLE
	address_book
MODIFY
	gender CHAR(2) NOT NULL
AFTER
	name;