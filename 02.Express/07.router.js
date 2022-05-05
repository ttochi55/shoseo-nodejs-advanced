const express = require('express');
const util = require('util');
const app = express();
const shoppingRouter = require('./07.shopping');
const customerRouter = require('./07.customer');

app.use(express.static(__dirname + '/public'));

app.use('/shopping', shoppingRouter);
app.use('/customer', customerRouter);

app.get('/', (req, res) => {
  res.send('Root Router');
});

app.get('*', (req, res) => {
  res.status(404).send('Path not found.');
});

// app.post();

app.listen(3000, () => {
  util.log('Server Running at http://127.0.0.1:3000');
});
