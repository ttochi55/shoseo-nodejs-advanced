const express = require('express');

const mysql = require('mysql');
const conf = require('./config/database');

const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

function getConnection() {
  const conn = mysql.createConnection(conf);
  conn.connect((err) => {
    if (err) throw err;
  });
  return conn;
}

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  const conn = getConnection();
  const sql = `select * from song order by _id desc limit 5;`;
  conn.query(sql, (err, rows, fields) => {
    if (err) throw err;
    let html = fs.readFileSync('10.list.html', 'utf8');
    rows.map((row) => {
      html += `<tr>
        <td>${row._id}</td>
        <td>${row.title}</td>
        <td>${row.lyrics}</td>
      </tr>`;
    });
    html += `</table>
    </body>
  </html>`;
    res.send(html);
  });
  conn.end();
});

app.get('/insert', (req, res) => {
  fs.readFile(__dirname + '/10.song.html', 'utf8', (error, data) => {
    res.send(data);
  });
});

app.post('/insert', (req, res) => {
  const title = req.body.title;
  const lyrics = req.body.lyrics;
  const sql = `insert into song(title, lyrics) values(?, ?);`;
  const params = [title, lyrics];
  const conn = getConnection();
  conn.query(sql, params, (err, fields) => {
    if (err) throw err;
    res.redirect('/');
  });
  conn.end();
});

app.get('*', (req, res) => {
  res.status(404).send('Path not found.');
});

app.listen(3000, () => {
  console.log('Server Running at http://127.0.0.1:3000');
});
