/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const { 
  getUsers, 
  getUserWithEmail, 
  getUserWithPassword, 
  addItemsToOrder, 
  calculateTotalPrice, 
  removeItemFromOrder } = require('../db/queries/users.js')

const express = require('express');
const router  = express.Router();
const accountSid = "ACf41b276b7ac4b193b6f865325dfc7b97";
const authToken = '1507dfc261b5dbe0acbc57306755f119';
const client = require("twilio")(accountSid, authToken);

let user;

router.post('/login',(req, res) => {
  const email = req.body.email;
  const password = req.body.password;
 getUserWithEmail(email).then(verifyEmail => {
  if (verifyEmail.email === email) {
    getUserWithPassword(password).then(verifyPassword => {
      if (verifyPassword.password === password) {
        res.redirect('/users/home')
        getUsers(email).then(info => {
          user = info;
          return;
        });
      }  
      else {
        res.status(403).send('Error, wrong information provided');
      }
    })
  }
 })
});

router.get('/', (req, res) => {
  client.messages
  .create({ body: "test test", from: "+14344784631", to: "+16047220944" })
    .then(message => console.log(message.sid));
  res.redirect('/');


});

router.post('/order', (req, res) => {
  client.messages
  .create({ body: "An order has come in!", from: "+14344784631", to: "+16047220944" })
    .then(message => console.log(message.sid));
  res.redirect('/thanks');


});

router.get('/home', (req, res) => {
  const name = user.name;
  const phone = user.phone;
  const address = user.street_address;
  const templatevars = {
    name,
    phone,
    address,
  }
  res.render('menu', templatevars);
}); 

router.get('/login',(req, res) => {
res.render('index')
});

router.get('/order',(req, res) => {
  res.render('thanks')
  });



module.exports = router;
