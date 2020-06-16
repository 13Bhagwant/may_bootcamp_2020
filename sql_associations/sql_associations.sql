-- SQL: Associations

-- Association Types:

-- 1. One to Many

-- We can associate records in a one to many fashion with other records by including a new column that references 
-- the original row's primary key. The row can be in the same table or a different table. We call that new column
-- foreign key. for example if we have table students that stores students' information and we have a seconds table
-- projects that stores information about projects created by students, we can have a column student_id in the projects
-- table to store the id, or reference, the student who created the project. So if a project is creatd by a student 
-- with an id value of 10, or reference, the project row as 10 to reference the student who created project

-- Demo: Find the title of all projects owned by the student with id 2

SELECT student_id, title
FROM projects
WHERE student_id = 2;

-- 2. One to One

-- Implementing one to one association is the same as implementing One to Many. The only difference is that there should be 
-- only one record reference a specific record which can be enforced with code or a constraint

-- 3. Many to Many

-- The most common way to implement many to many association is to have a third table, called the join table,
-- to associate the records together. So if you have a courses table that stores information about courses, 
-- by nature the courses have many students enrolled in

-- Demo: Get all student IDs and scores for the course with an id of 1

SELECT course_id, student_id, score
FROM enrolments
WHERE course_id = 1;

-- J O I N S
-- In many scenarios, especially when we have associations, we would like to execute queries that fetch data from
-- multiples tables, for that we have SQL joins to merge data from multiple tables together

-- Example: if you want to find the data that is associated between two tables you can use 'JOINS'. For example
-- if you want to find all students and their projects you can write the following query using INNER JOIN 

SELECT *
FROM students INNER JOIN projects ON students.id = projects.student_id;

-- CROSS JOIN 
-- Cross join the students table with projects table
SELECT *
FROM students CROSS JOIN projects;


-- INNER JOIN 
-- Exercise: Get all students with their associated projects in the same query.
-- Order by the student's first_name.

SELECT students.id AS student_id,
    first_name,
    title AS project_title,
    student_id AS student_id_in_projects
FROM students
    INNER JOIN projects ON students.id = projects.student_id
ORDER BY students.first_name;


-- Doing multiple joins in a query when we have many to many associations
-- List all the students that are enrolled in the course whose titles contain 'co'

-- so, the association between students and courses is MANY TO MANY through enrolments table

SELECT students.id, students.first_name, courses.title AS course_title, score
FROM students
    INNER JOIN enrolments ON students.id = enrolments.student_id
    INNER JOIN courses ON enrolments.course_id = courses.id
WHERE courses.title
ILIKE '%co%';

-- Exercise:
-- Find all courses that have at least one student whose name 
-- begins with 'Re'. Show the course title, student names and their courses

SELECT courses.title, students.first_name, enrolments.score
FROM students
    INNER JOIN enrolments ON students.id = enrolments.student_id
    INNER JOIN courses ON enrolments.course_id = courses.id
WHERE students.first_name
ILIKE 'Jo%';


-- LEFT JOIN / RIGHT JOIN 
-- List all student and their projects.
-- students with no projects must be included as well.

SELECT first_name, last_name, projects.title AS project_title
FROM students
    LEFT JOIN projects ON students.id = projects.student_id
ORDER BY projects.title DESC;

-- LEFT JOIN exclude the INTERSECTION
-- Select only students that do not have projects
SELECT first_name, last_name, projects.title AS project_title
FROM students
    LEFT JOIN projects ON students.id = projects.student_id
WHERE projects.title IS NULL;


-- JOINS + GROUP BY 
-- List the average score of each course with higher averages on top displaying the course title and the score average

SELECT courses.id, courses.title, ROUND(AVG(enrolments.score), 2) AS average_score
FROM courses
    INNER JOIN enrolments ON courses.id = enrolments.course_id
GROUP BY courses.id
ORDER BY courses.id;

-- SUB - QUERY
-- List all courses with at least 5 enrolled students.

-- Show the number of enrolled students and course title.
-- Order by the number of enrolled students.

SELECT *
FROM
    (SELECT courses.title, COUNT(*) AS student_count
    FROM courses INNER JOIN enrolments ON courses.id = enrolments.course_id
    GROUP BY courses.id
    ORDER BY student_count DESC
) AS student_count
WHERE student_count >= 5;

-- IN operator

-- Below query returns students with IDs matching (1, 2, 3, 4, 1000)
SELECT id, first_name, last_name
FROM students
WHERE id IN (1, 2, 3, 4, 1000);

-- Exercises:
-- Count all students for each course

SELECT courses.title, COUNT(*) AS student_count
FROM courses INNER JOIN enrolments ON courses.id = enrolments.course_id
GROUP BY courses.id
ORDER BY student_count DESC;

-- Count all courses for each student.

SELECT students.first_name, COUNT(*) AS no_of_courses_enrolled
FROM students INNER JOIN enrolments ON students.id = enrolments.student_id
GROUP BY students.id
ORDER BY no_of_courses_enrolled DESC;

-- Implement the following query:

-- Show only courses with an average score lower than 60.

-- Calculate the average score of all courses
-- Display the course title, course id, average score and enrolment count.

SELECT * FROM (
    SELECT courses.id, courses.title, ROUND(AVG(enrolments.score), 2) AS score_average, COUNT(*) AS student_count
    FROM courses 
    INNER JOIN enrolments ON courses.id = enrolments.course_id
    GROUP BY courses.id
    ) AS courses_with_stats
WHERE score_average < 60
ORDER BY score_average DESC;