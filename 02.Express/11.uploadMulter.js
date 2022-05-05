const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');
const moment = require('moment');
const today = moment();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/public/upload/');
    },
    filename: function (req, file, cb) {
      const { comment } = req.body;
      const { mimetype, originalname } = file;
      if (mimetype.indexOf('image') > -1) {
        cb(null, today.format('YYYYMMDD') + '-' + comment + '-' + originalname);
      }
    },
  }),
});

app.post('/', upload.single('image'), (req, res) => {
  console.log('file disk uploaded');
  res.redirect('/');
});

app.get('/', (req, res) => {
  fs.readFile(__dirname + '/10.fileform.html', 'utf8', (error, data) => {
    res.send(data);
  });
});

app.get('*', (req, res) => {
  res.status(404).send('Path not found.');
});

app.listen(3000, () => {
  console.log('Server Running at http://127.0.0.1:3000');
});
