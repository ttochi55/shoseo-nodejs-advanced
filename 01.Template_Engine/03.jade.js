// 모듈을 추출합니다.
const http = require('http');
const fs = require('fs');
const jade = require('jade');

// 서버를 생성하고 실행합니다.
http
  .createServer((req, res) => {
    // jadePage.jade 파일을 읽습니다.
    fs.readFile(__dirname + '/03.jadePage.jade', 'utf8', (error, data) => {
      // jade 모듈을 사용합니다.
      let fn = jade.compile(data);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fn());
    });
  })
  .listen(3000, () => {
    console.log('Server Running at http://127.0.0.1:3000');
  });
