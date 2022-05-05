/*
 5) 전 세계에서 인구가 가장 많은 10 개 도시에서 사용하는 공식언어는 ? (도시명, 인구수, 언어명)
 */
select
	city.Name as name,
	city.Population as population,
	countrylanguage.Language as language
from
	city
	inner join countrylanguage on city.CountryCode = countrylanguage.CountryCode
where
	countrylanguage.IsOfficial = 'T'
order by
	population DESC
limit
	10;