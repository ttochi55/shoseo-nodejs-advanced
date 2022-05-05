/* 
 테이블 컬럼 추가
 ALTER TABLE [테이블 명] ADD [컬럼명] 자료형;
 맨 앞에 컬럼 추가: ALTER TABLE [테이블 명] ADD [컬럼명] first;
 지정 컬럼 뒤에 컬럼 추가: ALTER TABLE [테이블 명] ADD [컬럼명] after [앞 컬럼명]
 */
ALTER TABLE
	address_table
ADD
	gender CHAR(2) NOT NULL;

ALTER TABLE
	address_table
ADD
	gender first;

ALTER TABLE
	address_table
ADD
	gender
after
	telephone;