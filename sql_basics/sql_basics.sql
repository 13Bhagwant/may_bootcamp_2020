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

-- Readign data
-- This will get all rows from students table
SELECT *
FROM students;

-- To display only first_name, last_name, age columns do:
SELECT first_name, last_name, age
FROM students;
