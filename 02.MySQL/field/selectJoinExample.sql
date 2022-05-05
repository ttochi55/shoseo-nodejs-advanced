/*
 1) 2009 년도에 데뷔한 걸그룹 정보를 조회 (where debut between '2009-01-01' and '2009-12-31' 이용)
 */
select
	*
from
	girl_group
where
	debut between '2009-01-01'
	and '2009-12-31'
ORDER by
	debut DESC;

/*
 2) 2009 년도에 데뷔한 걸그룹의 히트송은 ? (걸그룹 이름, 데뷔일, 히트송)
 */
select
	g.name as name,
	g.debut as debut,
	s.title as song
from
	girl_group as g
	left join song as s on s._id = g.hit_song_id
where
	debut between '2009-01-01'
	and '2009-12-31'
ORDER by
	debut DESC;

/*
 3) 대륙별로 국가숫자, GNP의 합, 평균 국가별 GNP는 ? 
 */
select
	Continent as continent,
	count(*) as countCountry,
	sum(GNP) as sumContinentGnp,
	avg(GNP) as avgContinentGnp
from
	country
group by
	Continent;

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