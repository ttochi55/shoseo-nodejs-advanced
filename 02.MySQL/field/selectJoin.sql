/*
 Inner Join
 */
select
	gg._id,
	gg.name,
	s.title
from
	girl_group as gg
	inner join song as s on s._id = gg.hit_song_id;

/*
 left outer join === left join
 */
select
	gg._id,
	gg.name,
	s.title
from
	girl_group as gg
	left outer join song as s on s._id = gg.hit_song_id;

/*
 right outer join === right join
 */
select
	s._id,
	s.title,
	gg.name
from
	girl_group as gg
	right join song as s on s._id = gg.hit_song_id;