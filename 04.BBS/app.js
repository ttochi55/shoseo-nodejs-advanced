const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');

const app = express();

// Router
const userRouter = require('./userRouter');

// StaticPath
app.use(
  '/jquery',
  express.static(path.join(__dirname, '/node_modules/jquery/dist'))
);
app.use(
  '/popperjs',
  express.static(path.join(__dirname, '/node_modules/@popperjs/core/dist/umd'))
);
app.use(
  '/bootstrap',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist'))
);
app.use(express.static(path.join(__dirname, '/public')));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: '1q2w3e4r5t6y', // keyboard cat
    resave: false,
    saveUninitialized: true,
    store: new FileStore({ logFn: function () {} }),
  })
);

// Routing
app.use('/user', userRouter);

app.get('/', (req, res) => {
  // const view = require('./view/test');
  // const html = view.test();
  // res.send(html);
  res.sendFile(path.join(__dirname, '/view/example.html'));
});

const listener = app.listen(3000, function () {
  const port = listener.address().port;
  console.log(`Listening on port ${port}`);
});
