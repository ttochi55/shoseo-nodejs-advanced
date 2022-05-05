const cookieParser = require('cookie-parser');
const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database/db.module.user');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (request, response) => {
  // 로그인이 된 상태
  if (request.cookies && request.cookies.isLoggedIn) {
    database.select((results) => {
      const view = require('./view/cookieList');
      const html = view.form(results);
      response.send(html);
    });
  } else {
    response.redirect('/login');
  }
});

app.get('/login', (request, response) => {
  const view = require('./view/userLogin');
  const html = view.form();
  response.send(html);
});

app.post('/login', (request, response) => {
  const uid = request.body.uid;
  const pwd = request.body.pwd;
  const pwdHash = database.generateHash(pwd);
  database.getUserInfo(uid, (results) => {
    const view = require('./view/alertMsg');
    const result = results[0];
    let html, message;

    if (result === undefined) {
      message = `Login 실패: uid ${uid}이/가 없습니다.`;
      html = view.alertMsg(message, '/login');
      response.send(html);
    } else {
      if (result.pwd == pwdHash) {
        response.cookie('isLoggedIn', 1);
        message = 'Login 성공';
        response.redirect('/');
      } else {
        message = 'Login 실패: 패스워드가 다릅니다.';
        html = view.alertMsg(message, '/login');
        response.send(html);
      }
    }
    console.log(message);
  });
});

app.get('/logout', (request, response) => {
  response.clearCookie('isLoggedIn', 0);
  response.redirect('/login');
});

app.get('*', (request, response) => {
  response.status(404).send('Path not found.');
});

app.listen(3000, () => {
  console.log('Server Running at http://127.0.0.1:3000');
});
