const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  let html = `<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<h1>3초후 로그인 페이지로 이동합니다.</h1>
	<script>setTimeout(() => {window.location.href="/login"}, 3000);</script>
</body>
</html>`;
  res.status(200).send(html);
});

app.get('/login', (req, res) => {
  fs.readFile(__dirname + '/09.loginform.html', 'utf8', (error, data) => {
    res.send(data);
  });
});

app.post('/login', (req, res) => {
  let uid = req.body.uid;
  let pwd = req.body.pwd;
  console.log(uid, pwd);
  if (uid === 'park' && pwd === '1234') {
    res.send(`<h1>Login Success</h1>`);
  } else {
    res.redirect('/login');
  }
});

app.get('*', (req, res) => {
  res.status(404).send('Path not found.');
});

app.listen(3000, () => {
  console.log('Server Running at http://127.0.0.1:3000');
});
