const mysql = require('mysql');
const path = require('path');
const fs = require('fs');
const dbconf = require('./config/database');
const { exit } = require('process');
const dbconn = mysql.createConnection(dbconf);

const file = path.join(__dirname, 'sql', '03.exercise.sql');

function fileRead(path, cb) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) return cb(err, null);
    cb(null, data);
  });
}

fileRead(file, (err, sql) => {
  if (err) throw err;
  dbconn.connect();
  dbconn.query(sql, (err, rows, fields) => {
    if (err) throw err;
    rows.map((row) => {
      console.log(
        row.continent,
        row.countCountry,
        row.sumContinentGnp,
        row.avgContinentGnp
      );
    });
  });
  dbconn.end();
});
