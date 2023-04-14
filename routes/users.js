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

router.post('/login',(req, res) => {
  const email = req.body.email;
  const password = req.body.password;
 getUserWithEmail(email).then(verifyEmail => {
  if (verifyEmail.email === email) {
    getUserWithPassword(password).then(verifyPassword => {
      if (verifyPassword.password === password) {
        res.redirect('/users/home')
      }  
      else {
        res.status(403).send('Error, wrong information provided');
      }
    })
  }
 })
})

router.get('/home', (req, res) => {
  res.render('menu');
}); 

router.get('/login',(req, res) => {
res.render('index')
});

router.get('/order',(req, res) => {
  res.render('thanks')
  });



module.exports = router;
