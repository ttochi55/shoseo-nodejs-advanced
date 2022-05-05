/* 
 테이블 내보내기
 
 내보내기 파일 위치
 C:/ProgramData/MySQL/MySQL Server 8.0/my.ini
 secure-file-priv=
 */
SELECT
	*
FROM
	song INTO OUTFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/song.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';