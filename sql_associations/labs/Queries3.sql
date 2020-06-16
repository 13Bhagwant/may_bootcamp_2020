-- Assignment: [Lab] Queries 3
-- Write the following SQL Queries:

-- Select all the products that have been purchased in the last 48 months.
SELECT p.id, p.name
FROM products AS p
    INNER JOIN line_items AS li ON p.id = li.product_id
    INNER JOIN orders AS o ON li.order_id = o.id
WHERE o.completed_on > CURRENT_DATE - INTERVAL
'48 month'
GROUP BY p.id
ORDER BY p.id;

-- Select the top 10 products in terms of 2017's gross sales.
SELECT products.id, products.name, SUM(line_items.price * line_items.quantity) AS gross_sales_2017
FROM products
    INNER JOIN line_items ON products.id = line_items.product_id
    INNER JOIN orders ON line_items.order_id = orders.id
WHERE orders.completed_on BETWEEN '2017-01-01' AND '2017-12-31'
GROUP BY products.id
ORDER BY gross_sales_2017 DESC
LIMIT 10;


-- Select all the products that weren't purchased during the last 48 months.
SELECT p.id, p.name FROM products AS p 
WHERE p.id NOT IN (SELECT p.id
FROM products AS p
INNER JOIN line_items AS li ON p.id = li.product_id 
INNER JOIN orders AS o ON li.order_id = o.id  
WHERE o.completed_on > CURRENT_DATE - INTERVAL '48' MONTH)
ORDER BY p.id;
