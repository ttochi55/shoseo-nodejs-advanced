/* 
 뷰 생성
 WHERE 조건에 일치하지 않으면 입력할 수 없도록 설정하려면 CREATE VIEW로 뷰를 생성할 때, WITH CHECK OPTION을 추가합니다.
 */
CREATE VIEW largecity AS
SELECT
	id,
	`name`,
	citydistrict,
	population
FROM
	city
WHERE
	population >= 1000000 with CHECK OPTION;