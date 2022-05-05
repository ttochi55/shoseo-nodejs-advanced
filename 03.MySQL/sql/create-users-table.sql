CREATE TABLE if NOT EXISTS users (
  uid VARCHAR(10) NOT NULL PRIMARY KEY,
  pwd CHAR(44) NOT NULL,
  `name` VARCHAR(10) NOT NULL,
  regDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  isDeleted INT DEFAULT 0
);

show TABLES;

INSERT INTO
  users
VALUES
  ('admin', 1234, '관리자', CURRENT_TIMESTAMP, 0);

SELECT
  *
FROM
  users