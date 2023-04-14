const express = require('express');
const router  = express.Router();

const accountSid = "ACf41b276b7ac4b193b6f865325dfc7b97";
const authToken = '1507dfc261b5dbe0acbc57306755f119';
const client = require("twilio")(accountSid, authToken);

router.post('/checkout', (req, res) => {
  client.messages
  .create({ body: "You have an order!", from: "+14344784631", to: "+16047220944" })
    .then(message => console.log(message.sid));
  res.redirect('/thanks');


});

router.post('/order', (req, res) => {
  client.messages
  .create({ body: "Your order will be ready in 20 minutes!", from: "+14344784631", to: "+16047220944" })
    .then(message => console.log(message.sid));
  


});

module.exports = router;