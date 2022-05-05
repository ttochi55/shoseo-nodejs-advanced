const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const dm = require('./database/db.module.user');
const um = require('./28.util');
const alert = require('./view/alertMsg');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('1q2w3e4r5t6y'));
app.use(
  session({
    secret: '1q2w3e4r5t6y', // keyboard cat
    resave: false,
    saveUninitialized: true,
    store: new FileStore({ logFn: function () {} }),
  })
);

app.get('/', um.isLoggedIn, (request, response) => {
  // console.log(request.session.uid);
  dm.select((results) => {
    const view = require('./view/rightList');
    const html = view.form(request.session.uname, results);
    response.send(html);
  });
});

app.get('/delete/:uid', um.isLoggedIn, (request, response) => {
  // 로그인이 된 상태
  // 권한 있음
  if (request.params.uid === request.session.uid) {
    dm.deleteUser(request.params.uid, () => {
      response.redirect('/');
    });
  } else {
    // 권한 없음
    const html = alert.alertMsg('삭제 권한이 없습니다.', '/');
    response.send(html);
  }
});

app.get('/update/:uid', um.isLoggedIn, (request, response) => {
  // 권한 있음
  if (request.params.uid === request.session.uid) {
    dm.getUserInfo(request.params.uid, (results) => {
      const view = require('./view/userUpdate');
      const html = view.form(results);
      response.send(html);
    });
  } else {
    // 권한 없음
    const html = alert.alertMsg('수정 권한이 없습니다.', '/');
    response.send(html);
  }
});

app.post('/update', um.isLoggedIn, (request, response) => {
  const { uid, pwd, pwd2 } = request.body;
  if (pwd === pwd2) {
    const pwdHash = um.generateHash(pwd);
    const params = [pwdHash, uid];
    dm.updateUser(params, () => {
      response.redirect('/');
    });
  } else {
    // 패스워드 입력이 잘못된 경우
    const html = alert.alertMsg(
      '패스워드가 일치하지 않습니다.',
      `/update/${uid}`
    );
    response.send(html);
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
  const pwdHash = um.generateHash(pwd);
  dm.getUserInfo(uid, (results) => {
    const result = results[0];
    if (result === undefined) {
      const html = alert.alertMsg(
        `Login 실패: uid ${uid}이/가 없습니다.`,
        '/login'
      );
      response.send(html);
    } else {
      if (result.pwd == pwdHash) {
        request.session.uid = uid;
        request.session.uname = result.uname;
        request.session.save(() => {
          response.redirect('/');
        });
      } else {
        const html = alert.alertMsg(
          'Login 실패: 패스워드가 다릅니다.',
          '/login'
        );
        response.send(html);
      }
    }
  });
});

app.get('/logout', (request, response) => {
  request.session.destroy();
  response.redirect('/login');
});

app.get('*', (request, response) => {
  response.status(404).send('Path not found.');
});

app.listen(3000, () => {
  console.log('Server Running at http://127.0.0.1:3000');
});
