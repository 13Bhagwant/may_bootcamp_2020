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

SELECT student_id, title FROM projects WHERE student_id = 2;