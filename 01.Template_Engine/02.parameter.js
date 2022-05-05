// 모듈을 추출합니다.
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

// 서버를 생성하고 실행합니다.
http
  .createServer((req, res) => {
    // ejsPage.ejs 파일을 읽습니다.
    fs.readFile(__dirname + '/02.ejsPage.ejs', 'utf8', (error, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(
        ejs.render(data, {
          name: 'RintIanTta',
          description: 'Hello ejs with NodeJS ...',
        })
      );
    });
  })
  .listen(3000, () => {
    console.log('Server Running at http://127.0.0.1:3000');
  });
