/*
 Group By Having
 */
SELECT
	*
FROM
	city
GROUP BY
	countrycode
HAVING
	COUNT(*) >= 10;

/*
 Group Concat
 */
SELECT
	GROUP_CONCAT(name)
FROM
	city
WHERE
	district;