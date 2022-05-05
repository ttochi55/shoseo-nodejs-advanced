const express = require('express');
const database = require('./database/db.module');
const crypto = require('crypto');

const app = express();

// SHA: Secure Hash Algorithm
function generateHash(str) {
  let sha256 = crypto.createHash('sha256'); // sha256, sha512
  sha256.update(str);
  return sha256.digest('base64'); // hex, base64
}

// 사용자가 입력한 uid와 pwd를 각각 'admin', '1234'로 가정
let uid = 'admin'; // req.body.uid
let pwd = '1234'; // req.body.pwd
let pwdHash = generateHash(pwd);

app.get('/', (request, response) => {
  const options = {
    sql: `SELECT * FROM users WHERE uid LIKE ?;`,
    values: [uid],
  };
  database.query(options, (results) => {
    const result = results[0];
    if (result === undefined) {
      console.log(`Login 실패: uid ${uid}이/가 없습니다.`);
    } else {
      if (result.pwd === pwdHash) {
        console.log('Login 성공');
      } else {
        console.log('Login 실패: 패스워드가 다릅니다.');
      }
    }
  });
  response.send('success');
});

app.get('*', (request, response) => {
  response.status(404).send('Path not found.');
});

app.listen(3000, () => {
  console.log('Server Running at http://127.0.0.1:3000');
});
