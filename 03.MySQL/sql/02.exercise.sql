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