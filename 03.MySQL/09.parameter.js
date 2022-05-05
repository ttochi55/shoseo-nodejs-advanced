const mysql = require('mysql');
const conf = require('./config/database');
const connInsert = mysql.createConnection(conf);
const connSelect = mysql.createConnection(conf);

let sql = `insert into song(title, lyrics) values(?, ?);`;
let params = ['눈누난나', '그래서 난 눈누난나'];

connInsert.connect();
connInsert.query(sql, params, (err, fields) => {
  if (err) throw err;
  let sql = `select * from song order by _id desc limit 3;`;
  connSelect.connect();
  connSelect.query(sql, (err, rows, fields) => {
    if (err) throw err;
    console.log(rows);
    rows.map((row) => {
      console.log(row._id, row.title, row.lyrics);
    });
  });
  connSelect.end();
});
connInsert.end();
