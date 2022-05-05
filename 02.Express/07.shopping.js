const express = require('express');

const shoppingRouter = express.Router();

shoppingRouter.get('/', (req, res) => {
  res.send('Shopping Router');
});

shoppingRouter.get('/index', (req, res) => {
  res.send('Shopping Router Index');
});

module.exports = shoppingRouter;
