const express = require('express');
const util = require('util');
const app = express();

app.use((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.end('<h1>Hello express</h1>');
  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Express</title>
</head>
<body>
	<h1>Welcome to Express World !</h1>
</body>
</html>
`;
  res.send(html);
  // res.redirect();
});

// app.get();

// app.post();

app.listen(3000, () => {
  console.log('Server Running at http://127.0.0.1:3000');
  util.log('Server Running at http://127.0.0.1:3000');
});
