/*
 사용자 생성 및 권한 부여
 */
create user 'userID'@'%' identified by 'userpassword';

create user 'hsuser'@'localhost' identified by 'hspass';

grant all privileges on *.* to 'hsuser'@'localhost';

flush privileges;


/*
사용자 조회
*/
SELECT * FROM mysql.user;