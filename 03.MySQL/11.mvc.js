const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database/db.module');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) => {
  const options = {
    sql: 'SELECT * FROM song ORDER BY _id DESC LIMIT ?;',
    values: [10],
  };
  database.select(options, (results) => {
    const view = require('./view/list');
    const html = view.form(results);
    response.send(html);
  });
});

app.get('/insert', (request, response) => {
  const view = require('./view/insert');
  const html = view.form();
  response.send(html);
});

// app.post('/insert', (request, response) => {
//   const { title, lyrics } = request.body;
//   const data = [
//     {
//       table: 'song',
//       field: ['title', 'lyrics'],
//       value: [`'${title}'`, `'${lyrics}'`],
//     },
//   ];
//   database.insert(data, null, () => {
//     response.redirect('/');
//   });
// });

// app.get('/delete/:_id', (request, response) => {
//   const { _id } = request.params;
//   const data = [
//     {
//       table: 'song',
//       value: [{ _id: `${_id}` }, { _id: `${_id}` }, { _id: `${_id}` }],
//     },
//   ];
//   database.delete(data, null, () => {
//     response.redirect('/');
//   });
// });

// app.get('/update', (request, response) => {
//   const view = require('./view/update');
//   const html = view.form();
//   response.send(html);
// });

// app.get('/update/:_id', (request, response) => {
//   const { _id } = request.params;
//   const data = [
//     {
//       table: 'song',
//       value: [{ _id: Number(_id), title: '12', lyrics: 23 }],
//     },
//   ];
//   database.update(data, null, () => {
//     response.redirect('/');
//   });
// });

app.get('*', (request, response) => {
  response.status(404).send('Path not found.');
});

app.listen(3000, () => {
  console.log('Server Running at http://127.0.0.1:3000');
});
