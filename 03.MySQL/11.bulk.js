const express = require('express');
const database = require('./database/db.module');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) => {
  database.getSongList((results) => {
    const view = require('./view/list');
    const html = view.form(results);
    response.send(html);
  });
});

app.get('/insert', (req, res) => {
  fs.readFile(__dirname + '/10.song.html', 'utf8', (error, results) => {
    res.send(results);
  });
});

app.post('/insert', (request, response) => {
  const { title, lyrics } = request.body;
  const options = {
    values: [{ title: title, lyrics: lyrics }],
  };
  database.insertSong(options, (results) => {
    response.redirect('/');
  });
});

app.get('/delete/:_id', (request, response) => {
  const { _id } = request.params;
  const options = {
    values: [{ _id: _id }],
  };
  database.deleteSong(options, (results) => {
    response.redirect('/');
  });
});

app.get('/update/:_id', (request, response) => {
  const { _id: uid } = request.params;
  database.getSongData(uid, (results) => {
    const view = require('./view/update');
    const html = view.form(results);
    response.send(html);
  });
});

app.post('/update/:_id', (request, response) => {
  const { uid, title, lyrics } = request.body;
  const options = {
    values: [{ _id: uid, title: title, lyrics: lyrics }],
  };
  database.updateSong(options, (results) => {
    response.redirect('/');
  });
});

app.get('*', (request, response) => {
  response.status(404).send('Path not found.');
});

app.listen(3000, () => {
  console.log('Server Running at http://127.0.0.1:3000');
});
