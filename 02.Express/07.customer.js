const express = require('express');

const customerRouter = express.Router();

customerRouter.get('/', (req, res) => {
  res.send('Customer Router');
});

customerRouter.get('/index', (req, res) => {
  res.send('Customer Router Index');
});

module.exports = customerRouter;
