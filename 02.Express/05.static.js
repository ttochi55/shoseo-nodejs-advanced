const express = require('express');
const util = require('util');
const app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  let html = `
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Express</title>
</head>
<body>
	<h1>Static Image</h1>
	<hr>
  <img src="/cat.jpg" alt="고양이" width="260" height="200">
  <img src="/img/dog.jpg" alt="강아지" width="260" height="200">
</body>
</html>
`;
  res.send(html);
});

app.get('*', (req, res) => {
  res.status(404).send('Path not found.');
});

// app.post();

app.listen(3000, () => {
  util.log('Server Running at http://127.0.0.1:3000');
});
