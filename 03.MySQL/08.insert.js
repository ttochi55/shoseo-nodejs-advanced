const mysql = require('mysql');
const config = require('./config/database');
const connect = mysql.createConnection(config);

connect.connect();

const sql = `insert into song(title, lyrics) values('Dynamite', 'I came to dance-dance')`;

connect.query(sql, (err, fields) => {
  if (err) throw err;
  console.log(fields);
});
connect.end();
