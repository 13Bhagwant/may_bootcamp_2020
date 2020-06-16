-- Part 1
-- You have database tables that look like this (this code works on Postgres databases): 

CREATE TABLE users (  id  SERIAL PRIMARY KEY,  email VARCHAR(128) NOT NULL); 

INSERT INTO "users"
    ("id", "email")
VALUES
    ('1', 'al@gmail.com');

CREATE TABLE groups (  id  SERIAL PRIMARY KEY,  group_name VARCHAR(128) NOT NULL); 

INSERT INTO "groups"
    ("id", "group_name")
VALUES
    ('1', 'Kingsmen');

CREATE TABLE user_group_memberships (  id  SERIAL PRIMARY KEY,  user_id INTEGER NOT NULL,  group_id INTEGER 
NOT NULL);

INSERT INTO "user_group_memberships"
    ("id","user_id", "group_id")
VALUES
    ('1', '1','1');


-- Please write a query to determine, given a particular user's email address, what group ids and groups names do they belong to (associate with)? 

-- Part 2
-- Please write an index that would improve the performance of that query.  You can create an index in Postgres using a query like CREATE INDEX index_name ON table_name (column_name, ...)
CREATE INDEX pandas ON users (
    id
)
