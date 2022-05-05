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