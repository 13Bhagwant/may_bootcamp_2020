-- Assignment: [Demo] Line Items for Products

-- Select all the products that have orders and their orders
-- 1. GET TO KNOW YOUR DATA.
--  a. looking at the schema or enrolled
--  b. query the tables themselves

SELECT products.id, products.name, products.price, orders.id AS order_id
FROM products
    INNER JOIN line_items ON products.id = line_items.product_id
    INNER JOIN orders ON line_items.order_id = orders.id;

-- Select all the products and their orders

-- [Note] the price in the line_items table is price per unit and not total price.

SELECT p.name, l.price, l.quantity, o.id AS order_id
FROM products AS p
    INNER JOIN line_items AS l ON p.id = l.product_id
    INNER JOIN orders AS o ON l.order_id = o.id;