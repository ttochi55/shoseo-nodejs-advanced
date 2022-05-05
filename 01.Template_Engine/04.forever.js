// const http = require('http');

require('http')
  .createServer((req, res) => {
    if (req.url === '/') {
      // 응답합니다.
      let html = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Forever</title>
</head>
<body>
	<h1>Forever</h1>
</body>
</html>
`;
      res.write(html);
      res.end();
    } else {
      // 오류를 발생합니다.
      error.error.error();
    }
  })
  .listen(3000, () => {
    console.log('Server Running at http://127.0.0.1:3000');
  });
