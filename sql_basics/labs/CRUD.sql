-- 1. 
INSERT INTO "students"
    ("first_name", "last_name", "email", "registration_date", "phone_number")
  VALUES
    ('John', 'Smith', 'john@smith.com', '2016-1-1', '778.889.1100');

-- 2. 
SELECT *
FROM students
ORDER BY id DESC
LIMIT 1;

-- 3. 
UPDATE students
    SET age = '50'
    WHERE id = 502;

-- 4.
DELETE FROM students
    WHERE id = 502
    RETURNING *;