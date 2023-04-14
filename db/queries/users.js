const db = require('../connection');

const getUsers = (email) => {
  return db.query('SELECT * FROM users WHERE email = $1;', [email])
    .then(data => {
      return data.rows[0];
    });
};

const getUserWithEmail = (email) => {
  return db.query('SELECT * FROM users WHERE users.email = $1 LIMIT 1;', [email])
  .then(data => {
    return data.rows[0];
  });
};

const getUserWithPassword = (password) => {
  return db.query('SELECT * FROM users WHERE users.password = $1 LIMIT 1;', [password])
  .then(data => {
    return data.rows[0];
  });
};


const addItemsToOrder = (user_id, item) => {
  return db.query('INSERT INTO orders (items) VALUES ($1, $2);', [user_id, item])
  .then(data => {
    return;
  });
};


// const calculateTotalPrice = () => {
//   return db.query('SELECT sum(menu.price), FROM orders JOIN menu ON orders.items = menu.name, GROUP BY menu.price;')
//   .then(data => {
//     return data.rows;
//   });
// };

const removeItemFromOrder = (item) => {
  return db.query('DELETE FROM orders WHERE items = 1$;', [item])
  .then(data => {
    return;
  });
};

const calculateTotalPrice = () => {
  return db.query('SELECT sum(menu.price) FROM orders JOIN menu ON orders.items = menu.name, GROUP BY menu.price;',)
  .then(data => {
    return data.rows;
  });
};
const acceptOrderAndGiveTime = () => {

};


module.exports = { getUsers, getUserWithEmail, getUserWithPassword, addItemsToOrder, calculateTotalPrice, removeItemFromOrder };
