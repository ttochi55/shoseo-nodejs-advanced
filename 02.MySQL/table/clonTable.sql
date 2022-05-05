/* 
 테이블 구조와 데이터 복사
 CREATE TABLE IF NOT EXISTS [복사 테이블] SELECT * FROM [원본 테이블];
 */
CREATE TABLE IF NOT EXISTS city_copy
SELECT
	*
FROM
	city;

/* 
 테이블 구조 복사
 CREATE TABLE IF NOT EXISTS [복사 테이블] LIKE [원본 테이블];
 */
CREATE TABLE IF NOT EXISTS city_copy LIKE city;

/* 
 테이블 데이터 복사
 INSERT INTO [복사 테이블] SELECT * FROM [원본 테이블];
 */
INSERT INTO
	city_copy
SELECT
	*
FROM
	city;

/* 
 테이블 데이터 부분 복사
 INSERT INTO [복사 테이블] (컬럼1 [, 컬럼2 ...]) SELECT 컬럼1 [, 컬럼2 ...] FROM [원본 테이블];
 */
INSERT INTO
	city_copy (col1, col2)
SELECT
	col1,
	col2
FROM
	city;