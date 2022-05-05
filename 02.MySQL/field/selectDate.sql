/* 2017-08-28 17:22:21 */
SELECT
	DATETIME
FROM
	date_table
WHERE
	id = 101;

/* 2017-08-28 */
SELECT
	DATE_FORMAT(DATETIME, '%Y-%m-%d')
FROM
	date_table
WHERE
	id = 101;

/* PM 05:22:21 */
SELECT
	DATE_FORMAT(DATETIME, '%p %h:%i:%s')
FROM
	date_table
WHERE
	id = 103;

/* 2020-10-08 09:58:41 */
SELECT
	NOW();

/* 2020-10-08 */
SELECT
	CURDATE();

/* 09:58:41 */
SELECT
	CURTIME();

/*
 날짜 더하기
 current: 2020-10-08 10:01:16
 result: 2020-12-08 10:01:16
 */
SELECT
	DATE_ADD(NOW(), INTERVAL 2 MONTH);

/*
 날짜 뺴기
 current: 2020-10-08 10:01:42
 result: 2020-10-03 10:01:42
 */
SELECT
	DATE_SUB(NOW(), INTERVAL 5 DAY);

/*
 D-Day
 result: -329
 */
SELECT
	TO_DAYS('2019-11-14') - TO_DAYS(NOW());

/*
 주 구하기
 일요일: 1
 */
SELECT
	DAYOFWEEK(DATETIME)
FROM
	date_table;