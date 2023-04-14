$(document).ready(function() {
const order = [];
let total = 0;
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
  }
  
  $('.add').on('click', addItemToOrder);
});

module.exports = { addItemToOrder };