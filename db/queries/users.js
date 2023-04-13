const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

const getUserWithEmail = (email) => {
  return db.query('SELECT * FROM users WHERE users.email = $1;', [email])
  .then(data => {
    return data.rows;
  });
};

const getUserWithPassword = (password) => {
  return db.query('SELECT * FROM users WHERE users.password = $1;', [password])
  .then(data => {
    return data.rows;
  });
};

const removeItemsFromOrder = (item) => {
  return db.query('DELETE FROM orders WHERE items = $1;')
  .then(data => {
    return;
  });
};
const addItemsToOrder = (user_id, item) => {
  return db.query('INSERT INTO orders (items) VALUES ($1, $2);', [user_id, item])
  .then(data => {
    return;
  });
};

const calculateTotalPrice = (item) => {
  return db.query('SELECT SUM(price) FROM menu WHERE name = $1;', [item])
  .then(data => {
    return data.rows;
  });
};
// const calculateTotalPrice = () => {
//   return db.query('SELECT sum(menu.price), FROM orders JOIN menu ON orders.items = menu.name, GROUP BY menu.price;')
//   .then(data => {
//     return data.rows;
//   });
// };

const acceptOrderAndGiveTime = () => {

};

module.exports = { getUsers, getUserWithEmail, getUserWithPassword, addItemsToOrder, removeItemsFromOrder, calculateTotalPrice };
