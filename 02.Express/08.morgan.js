const express = require('express');
const morgan = require('morgan');

const app = express();

// app.use(morgan('combined'));
app.use(morgan(':method' + ':date' + ':remote-addr'));
app.use((req, res) => {
  res.send(`<h1>express basic</h1>`);
});

app.listen(3000, () => {
  console.log('Server Running at http://127.0.0.1:3000');
});
