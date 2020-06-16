-- Assignment: [Lab] Queries 2
-- Write the following SQL Queries:

-- 1.Calculate how many items in stock we've ever had for each product (remaining or sold) in the database.
    SELECT p.id, p.name, SUM(remaining_quantity + quantity) AS total_quantity
    FROM products AS p
        INNER JOIN line_items AS li ON p.id = li.product_id
    GROUP BY p.id
    ORDER BY total_quantity DESC;

-- 2.Find the average order total price for all the orders in the system

    SELECT AVG(total_price) AS average_order_total FROM
    (SELECT order_id, SUM(price * quantity) AS total_price
    FROM line_items 
    GROUP BY order_id) AS average;


-- [Note] the price in the line_items table is price per unit and not total price.

