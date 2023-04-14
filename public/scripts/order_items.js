const order = [];
let total = 0;
$(document).ready(function() {

const prices = {
    "fries": 3,
    "chicken nuggets": 6,
    "burger combo": 12,
    "chicken nuggets combo": 9,
    "coke": 2,
    "sprite": 2
  };
  
  function addItemToOrder(event) {
    event.preventDefault(); 
    let item = event.target.id;
    order.push(item);
    total += prices[item];
    console.log(total)
    console.log(order)
  }
  
  $('.add').on('click', addItemToOrder);

  let user;
  const express = require('express');
  const router  = express.Router();
  const { 
      getUsers,
      getUserWithEmail,
      getUserWithPassword
  } = require('../../db/queries/users.js')
  const cookieParser = require('cookie-parser');
  router.use(cookieParser());
  
  

router.post('/home', addItemToOrder, getUsers)

router.get('/checkout',(req, res) => {
    const email = req.cookies.email;
    getUsers(email).then(info => {
        user = info;
        const name = user.name;
        const phone = user.phone;
        const address = user.street_address;
        
    const templatevars = {
      name,
      phone,
      address,
      order,
      total
    }
    res.render('checkout', templatevars)
    });
});

});


