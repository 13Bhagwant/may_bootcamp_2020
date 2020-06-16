-- From the students table:

-- 1.Find the number of students named 'Elinore'.
    SELECT COUNT(*) AS occurence, first_name, last_name, id FROM students WHERE first_name='Elinore'
    GROUP BY first_name, id, last_name;
-- 2.List the `first_name`s that occur more than once in students, with the number occurrences of that name.
    SELECT COUNT(first_name) AS occurence , first_name FROM students GROUP BY first_name 
    HAVING COUNT(first_name) > 1 ORDER BY occurence ;
-- 3.Refine the above query to list the 20 most common first_names among students, in order first of how common they are, and alphabetically when names have the same count.
    SELECT COUNT(*) AS occurence , first_name FROM students
    GROUP BY first_name
    HAVING COUNT(first_name) > 1 
    ORDER BY occurence DESC 
    ,first_name
    LIMIT 20;

-- From the products table:

-- 1.Find the most expensive product.
    SELECT * FROM products WHERE price=(SELECT MAX(price) FROM products);

-- 2.Find the cheapest product that is on sale.
    SELECT * FROM products WHERE price >sale_price AND sale_price =(SELECT MIN(sale_price)FROM products)
    ORDER BY sale_price DESC
    LIMIT 1;
-- 3.Find the total value of all inventory in stock (use sale price).
    SELECT ROUND(SUM(remaining_quantity * sale_price)) FROM products;