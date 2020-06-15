-- SQL: Basics

-- To go into psql (postgres) to a specific database type:
-- psql -d <db_name>

-- Comments

-- 👈 Single Line Comment

/*
    Multi-line Comment
*/


-- Creating a Table
/*
CREATE TABLE cars
(
    id BIGSERIAL,
    
        -- [BIG]SERIAL is a special data type unique to PostgreSQL.
        -- It creates a BIGINT that is auto-increment. When inserting
        -- a new row(record), we'll not specify this column ourselves.
        -- We call this 'id' the Primary key. It acts as a unique 
        -- identifier for rows(records)
    
    make VARCHAR(50),
 
        -- The VARCHAR(<char-max>) is a string type with
        -- speciafiable maximum number of characters


    model VARCHAR(255),

    doors INTEGER,

        -- The INTEGER is a number type that can't have decimal 
        -- values. However, it can be negative
    
    description TEXT

        -- The TEXT type is a string that can be of any length
    
);

*/

-- ALWAYS terminate SQL queries with a ';'. This is 
-- NON-NEGOTIABLE. If you forget it, SQL will assume that you
-- are still writing your query.

/*
    To run this or any other sql files, do the following:
    psql -d <db_name> < <path-to-sql-script>

    To run the file from inside 'psql', do the following:
    psql -d <db_name> 👈 this will take us inside a database
    \i <path-to-sql-script>

    SELECT id, first_name, last_name, email
    FROM students
    WHERE first_name LIKE 'Susan';
*/

-- Altering tables
-- Adding a field age (integer)to students table
-- ALTER TABLE students ADD COLUMN age integer;

-- CRUD Operations 

-- Creating rows (or inserting records)
-- inserting a row to students table
/*
INSERT INTO "students"
    ("first_name", "last_name", "email", "phone_number")
VALUES
    ('Alan', 'Jonathan', 'al@gmail.com', '778.889.1100');
*/

-- Inserting another row
/*
INSERT INTO "students"
    ("first_name", "last_name", "email", "phone_number")
VALUES
    ('John', 'Lahm', 'john@codecore.ca', '778.889.0011');
*/

-- Reading data
-- This will get all rows from students table
SELECT *
FROM students;

-- To display only first_name, last_name, age columns do:
SELECT first_name, last_name, age
FROM students;

-- Use WHERE statement to filter your data

-- This will get all fields of the student that has id field = 1;
SELECT *
FROM students
WHERE id = 1;

-- Exercise1: Select all students whose IDs are more than 100
SELECT *
FROM students
WHERE id > 100;

-- Exercise2: Select all students whose age are more than 40
SELECT *
FROM students
WHERE age > 40;

-- Exercise3: Select all students that have been registered in teh last 800 days
SELECT *
FROM students
WHERE registration_date > NOW() - INTERVAL
'800' DAY;

-- Using AND/OR

-- select all students whose IDs more than a 100 and less than 200

SELECT *
FROM students
WHERE id > 100 AND id < 200;

-- if you want to select them inclusive 
SELECT *
FROM students
WHERE id >= 100 AND id <= 200;

-- Select all students whose age are more than 40 OR less than 20
SELECT *
FROM students
WHERE age > 40 OR age < 20;

-- IS NULL / IS NOT NULL

-- select all students whose age is null 
SELECT *
FROM students
WHERE age IS NULL;

-- select all students whose age is not null 
SELECT *
FROM students
WHERE age IS NOT NULL;

-- select all students whose age is null OR less than 20

SELECT *
FROM students
WHERE age IS NULL OR age < 20;

-- Wildcards  (LIKE & ILIKE)

-- Find all students whose first_name starts with 'Jo' (case sensitive)
SELECT id, first_name
FROM students
WHERE first_name LIKE 'Jo%';

-- select all students whose first_names or last_names contain 'nn'
SELECT id, first_name, last_name
FROM students
WHERE first_name
ILIKE '%nn%' OR last_name ILIKE '%nn%';

-- BETWEEN


-- Exercise1: Select all students whose ids between 150 and 200
SELECT *
FROM students
WHERE id BETWEEN 150 AND 200;

-- Exercise2: select all students that have been registered between 810 days ago and 800 days ago
SELECT *
FROM students
WHERE registration_date BETWEEN NOW() - INTERVAL '810'
DAY AND NOW
() - INTERVAL '800' DAY;

-- ORDER BY

-- Find all students whose first_names begin with 'Jo' ordered by their last_name then age

SELECT id, first_name, last_name, age
FROM students
WHERE first_name LIKE 'Jo%'
ORDER BY age DESC, last_name ASC;

-- Abov query will get all the students that their first_name start with 'Jo' then
-- it orders them by age (Descending) finally, it orders two or more students that has
-- the same age by their last_names in an Ascending order

-- Find all students whose ages are more than 30 ordered by their first_names then last_names
SELECT id, first_name, last_name, age
FROM students
WHERE age > 30
ORDER BY first_name, last_name;

-- LIMIT

SELECT id, first_name, last_name, age
FROM students
WHERE age > 30
ORDER BY first_name, last_name
LIMIT 5;

-- NOTE => Limit, limits the result that we get back and it should always be used at the end of the query just before
-- offset if we have offset

-- Exercise Select first 10 students whose first_names start with 'ke' (case insensitive)
SELECT id
, first_name, age
FROM students
WHERE first_name ILIKE 'ke%'
LIMIT 10;

SELECT id, first_name, age
FROM students
WHERE first_name
ILIKE 'ke%'
ORDER BY id DESC;

-- OFFSET
select id, first_name, last_name, age
FROM students
WHERE age > 30
ORDER BY first_name
LIMIT 10
OFFSET
20;

-- The above query skips first 20 rows that we got back and starts after those 20 rows

-- OFFSET combined with LIMIT can be used to implement pagination

-- AGGREGATE FUNCTIONS
-- Use these to do calculations on combination of your data
-- For a full list of functions, checkout:
-- https://www.postgresql.org/docs/9.5/functions-aggregate.html

-- counting all fields inside students table
SELECT COUNT(*) AS occurence
FROM students;

SELECT COUNT(*) AS student_count,
    ROUND(AVG(age), 3) AS average_age,
    SUM(age) AS total_age,
    MIN(age) AS youngest_student,
    MAX(age) AS oldest_student
FROM students;

-- Sometimes we want to do aggregate calculation
-- on groupings of rows in our tables. Use GROUP BY to do that

-- counting all students that has the same first_name and sets a new column
-- named occurence 
SELECT COUNT(*) AS occurence, first_name
FROM students
GROUP BY first_name
ORDER BY occurence DESC;

-- UPDATE A ROW (RECORD)

UPDATE students
    SET first_name = 'UPDATED FIRST NAME'
    WHERE id = 505;

-- if we want to update then return the updated record(row)
UPDATE students
    SET first_name = 'ANOTHER NAME'
    WHERE id = 505
    RETURNING *;

-- DELETE A ROW (RECORD)
DELETE FROM students
    WHERE id = 505
    RETURNING *;