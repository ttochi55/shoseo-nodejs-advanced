const express = require('express');
const database = require('./database/db.module');
const crypto = require('crypto');

const app = express();

// 사용자가 입력한 uid와 pwd를 각각 'admin', '1234'로 가정
let uid = 'admin'; // req.body.uid
let pwd = '1234'; // req.body.pwd

// SHA: Secure Hash Algorithm
let hash = crypto.createHash('sha256'); // sha256, sha512
hash.update(pwd);
let pwdHash = hash.digest('base64'); // hex, base64

app.get('/', (request, response) => {
  const options = {
    sql: 'INSERT INTO users(uid, pwd, name) VALUES ?',
    values: ['admin11', pwdHash, '관리자11'],
  };
  database.query(options);
  response.send('success');
});

app.get('*', (request, response) => {
  response.status(404).send('Path not found.');
});

app.listen(3000, () => {
  console.log('Server Running at http://127.0.0.1:3000');
});
