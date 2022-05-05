const express = require('express');
const uRouter = express.Router();

uRouter.get('/register', (req, res) => {
  const view = require('./view/userRegister');
  const html = view.test();
  res.send(html);
});

uRouter.post('/register', (req, res) => {
  const { uid, pwd, pwd2, uname } = req.body;
  res.send(`<h1>uid: ${uid}, pwd: ${pwd}, pwd2: ${pwd2}, uname: ${uname}</h1>`);
});

module.exports = uRouter;
