const mysql = require('mysql');
const conf = require('./db.module.config');

function connect(database) {
  const conn = mysql.createConnection(database);
  conn.connect((err) => {
    if (err) throw err;
  });
  return conn;
}

function query(sql, params = null, cb = null) {
  const conn = this.connect(conf.world);
  conn.query(sql, params, (err, rows, fields) => {
    if (err) throw err;
    cb(rows);
  });
  conn.end();
}

const sql = `select * from song order by _id desc limit 5;`;

query(sql);
