CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    orders_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,  
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(10) NOT NULL,
    street_address VARCHAR(255),
);

CREATE TABLE menu (
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    price INTEGER
);

CREATE TABLE restaurant (
    orders_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    items TEXT[]
);

