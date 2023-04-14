const express = require('express');
const router  = express.Router();

const accountSid = "ACf41b276b7ac4b193b6f865325dfc7b97";
const authToken = 'e4e564c88b38f023e07c484d11271a13';
const client = require("twilio")(accountSid, authToken);



router.post('/order', (req, res) => {
  client.messages
  // recieving number hidden
  .create({ body: "Your order will be ready in 20 minutes!", from: "+14344784631", to: "" })
    .then(message => console.log(message.sid));
  


});

module.exports = router;