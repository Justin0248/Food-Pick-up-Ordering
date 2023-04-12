const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

const getUserWithEmail = (email) => {
  return db.query('SELECT * FROM users, WHERE users.email = $1;')
  .then(data => {
    return data.rows;
  });
};

const getUserWithPassword = (password) => {
  return db.query('SELECT * FROM users, WHERE users.password = $1;')
  .then(data => {
    return data.rows;
  });
};

const addItemsToOrder = (order, item) => {
  // assuming the order is an array
  order.push(item);
  return order;
};
const calculateTotalPrice = (order) => {

};
const acceptOrderAndGiveTime = () => {

};

module.exports = { getUsers, getUserWithEmail, getUserWithPassword, addItemsToOrder };
