/*
 4) 아시아 대륙에서 인구가 가장 많은 도시 10 개를 내림차순으로 보여줄 것 (대륙명, 국가명, 도시명, 인구수)
 */
select
	country.Continent as continent,
	country.Name as country,
	city.Name as city,
	city.Population as population
from
	country
	left join city on country.code = city.CountryCode
where
	continent = 'Asia'
order by
	population DESC
limit
	10;