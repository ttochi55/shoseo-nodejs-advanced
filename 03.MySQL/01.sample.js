const mysql = require('mysql');
const dbconf = require('./config/database');
const dbconn = mysql.createConnection(dbconf);

dbconn.connect();

const sql = 'select * from city where population > 9000000';

dbconn.query(sql, (err, rows, fields) => {
  if (err) throw err;
  rows.map((row) => {
    console.log(
      row.ID,
      row.Name,
      row.CountryCode,
      row.District,
      row.Population
    );
  });
});

dbconn.end();
