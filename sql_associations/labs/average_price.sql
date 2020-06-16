-- [Exercise] Average Price
-- Using the SQL Lab tool: https://sql-lab.herokuapp.com/
-- Write the following SQL Query: Select the average order total price for the Ergonomic Rubber Gloves product.
SELECT products.name, AVG(line_items.price * line_items.quantity) AS average_price
FROM products
    INNER JOIN line_items ON products.id = line_items.product_id
WHERE products.name = 'Ergonomic Rubber Gloves'
GROUP BY products.name;