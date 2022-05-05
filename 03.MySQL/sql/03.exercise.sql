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