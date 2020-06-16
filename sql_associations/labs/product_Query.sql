-- Using the SQL Lab tool: https://sql-lab.herokuapp.com/
-- Write the following SQL Query: Select all the products that weren't purchased during the last month.

SELECT p.id, p.name FROM products AS p 
WHERE p.id NOT IN (SELECT p.id
FROM products AS p
INNER JOIN line_items AS li ON p.id = li.product_id 
INNER JOIN orders AS o ON li.order_id = o.id  
WHERE o.completed_on > CURRENT_DATE - INTERVAL '1' MONTH)
ORDER BY p.id;