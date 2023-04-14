// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const accountSid = "ACf41b276b7ac4b193b6f865325dfc7b97";
const authToken = '1507dfc261b5dbe0acbc57306755f119';
const client = require("twilio")(accountSid, authToken);

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).



app.get('/restaurant', (req, res) => {
  res.render('restaurant');
});

app.get('/thanks', (req, res) => {
  res.render('thanks');
});

app.get('/menu', (req, res) => {
  res.render('menu');
});

app.get('/checkout', (req, res) => {
  res.render('checkout');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.post('/checkout', (req, res) => {
  client.messages
  .create({ body: "You have an order!", from: "+14344784631", to: "+16047220944" })
    .then(message => console.log(message.sid));
  res.redirect('/thanks');


});

app.post('/order', (req, res) => {
  client.messages
  .create({ body: "Your order will be ready in 20 minutes!", from: "+14344784631", to: "+16047220944" })
    .then(message => console.log(message.sid));
  


});