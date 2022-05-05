const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const view = require('./view/index');
const template = require('./view/template');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  fs.readdir('data', (error, filelist) => {
    let list = template.listGen(filelist);
    let content = template.HOME_CONTENTS;
    content = content.replace(/\n/g, '<br>');
    let control = template.buttonGen();
    let html = view.index('Web 기술', list, content, control);
    res.send(html);
  });
});

app.get('/id/:id', (req, res) => {
  fs.readdir('data', (error, filelist) => {
    let list = template.listGen(filelist);
    let title = req.params.id;
    let control = template.buttonGen(title);
    let filename = 'data/' + title + '.txt';
    fs.readFile(filename, 'utf8', (error, buffer) => {
      buffer = buffer.replace(/\n/g, '<br>');
      let html = view.index(title, list, buffer, control);
      res.send(html);
    });
  });
});

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

app.get('/create', (req, res) => {
  fs.readdir('data', (error, filelist) => {
    let list = template.listGen(filelist);
    let content = template.createForm();
    let control = template.buttonGen();
    let html = view.index('글 생성', list, content, control);
    res.send(html);
  });
});

app.post('/create', (req, res) => {
  const { body } = req;
  const filepath = __dirname + '/data/' + body.subject + '.txt';
  fs.writeFile(filepath, body.description, (error) => {
    const uri = encodeURI(`/id/${body.subject}`);
    res.redirect(uri);
  });
});

/* -------------------------------------------------------------------------- */
/*                                   Update                                   */
/* -------------------------------------------------------------------------- */

app.get('/update/id/:id', (req, res) => {
  fs.readdir('data', (error, filelist) => {
    let list = template.listGen(filelist);
    let control = template.buttonGen();
    let title = req.params.id;
    let filename = 'data/' + title + '.txt';
    fs.readFile(filename, 'utf8', (error, buffer) => {
      let content = template.updateForm(title, buffer);
      let html = view.index(`${title} 수정`, list, content, control);
      res.send(html);
    });
  });
});

app.post('/update', (req, res) => {
  const { body } = req;
  const filepath = __dirname + '/data/' + body.subject + '.txt';
  fs.writeFile(filepath, body.description, (error) => {
    const uri = encodeURI(`/id/${body.subject}`);
    res.redirect(uri);
  });
});

/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

app.get('/delete/id/:id', (req, res) => {
  fs.readdir('data', (error, filelist) => {
    let list = template.listGen(filelist);
    let content = template.deleteForm(req.params.id);
    let control = template.buttonGen();
    let html = view.index('글 삭제', list, content, control);
    res.send(html);
  });
});

app.post('/delete', (req, res) => {
  const { body } = req;
  const filepath = __dirname + '/data/' + body.subject + '.txt';
  fs.unlink(filepath, (error) => {
    res.redirect('/');
  });
});

app.get('*', (req, res) => {
  res.status(404).send('Path not found.');
});

app.listen(3000, () => {
  console.log('Server Running at http://127.0.0.1:3000');
});
