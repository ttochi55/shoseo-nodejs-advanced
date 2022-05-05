/* 
 테이블 불러오기
 */
CREATE TABLE IF NOT EXISTS city_copy LIKE city;

CREATE TABLE `songcopy` (
	`_id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(32) NOT NULL COLLATE 'utf8_general_ci',
	`lyrics` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	PRIMARY KEY (`_id`) USING BTREE
) COLLATE = 'utf8_general_ci' ENGINE = InnoDB AUTO_INCREMENT = 117;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/song.csv' INTO TABLE songcopy FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n'