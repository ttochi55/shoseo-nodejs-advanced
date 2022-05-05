/* Single */
DELETE FROM
	city
WHERE
	id = 4082;

/* Plural */
DELETE FROM
	city
WHERE
	id BETWEEN 4082
	AND 4099;