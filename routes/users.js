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
})

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

  router.get('/rest',(req, res) => {
    res.render('restaurant')
    });

module.exports = router;
