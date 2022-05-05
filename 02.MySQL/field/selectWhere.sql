SELECT
	*
FROM
	city
WHERE
	district = 'kyonggi';

/*
 Where AND
 */
SELECT
	*
FROM
	city
WHERE
	countrycode = 'kor'
	AND id = 1860;

/*
 Where OR
 */
SELECT
	*
FROM
	city
WHERE
	countrycode = 'kor'
	OR countrycode = 'jp';

/*
 Where IN
 */
SELECT
	*
FROM
	city
WHERE
	district IN ('Kyongsangbuk', 'Kyongsangnam', 'Taejon')
	/*
	 Where LIKE
	 */
SELECT
	*
FROM
	city
WHERE
	district LIKE 'Chungchong%';