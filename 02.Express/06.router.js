const express = require('express');
const util = require('util');
const app = express();

app.use(express.static(__dirname + '/public'));
let shoppingRouter = express.Router();
let customerRouter = express.Router();
app.use('/shopping', shoppingRouter);
app.use('/customer', customerRouter);

app.get('/', (req, res) => {
  res.send('Root Router');
});

shoppingRouter.get('/', (req, res) => {
  res.send('Shopping Router');
});

shoppingRouter.get('/index', (req, res) => {
  res.send('Shopping Router Index');
});

customerRouter.get('/', (req, res) => {
  res.send('Customer Router');
});

customerRouter.get('/index', (req, res) => {
  res.send('Customer Router Index');
});

app.get('*', (req, res) => {
  res.status(404).send('Path not found.');
});

// app.post();

app.listen(3000, () => {
  util.log('Server Running at http://127.0.0.1:3000');
});
