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

<<<<<<< HEAD
const addItemsToOrder = (item) => {
  return db.query('INSERT INTO orders (items) VALUES ($1);')
  .then(data => {
    return;
  });
};
const removeItemsFromOrder = (item) => {
  return db.query('DELETE FROM orders WHERE items = $1;')
  .then(data => {
    return;
  });
=======
const addItemsToOrder = (user_id, item) => {
  return db.query('INSERT INTO orders (items) VALUES ($1, $2);', [user_id, item])
};
>>>>>>> 78de1b9f6886f217dc8f8840176e543af89f76f2

const calculateTotalPrice = (item) => {
  return db.query('SELECT SUM(price) FROM menu WHERE name = $1;', [item])
  .then(data => {
    return data.rows;
  });
};
<<<<<<< HEAD
const calculateTotalPrice = () => {
  return db.query('SELECT sum(menu.price), FROM orders JOIN menu ON orders.items = menu.name, GROUP BY menu.price;')
  .then(data => {
    return data.rows;
  });
};
=======

>>>>>>> 78de1b9f6886f217dc8f8840176e543af89f76f2
const acceptOrderAndGiveTime = () => {

};

<<<<<<< HEAD
module.exports = { getUsers, getUserWithEmail, getUserWithPassword, addItemsToOrder, removeItemsFromOrder, calculateTotalPrice };
=======
module.exports = { getUsers, getUserWithEmail, getUserWithPassword, addItemsToOrder, calculateTotalPrice };
>>>>>>> 78de1b9f6886f217dc8f8840176e543af89f76f2
