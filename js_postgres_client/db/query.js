const knex = require("./connection");

// Select all post whose title ends with the letter e

// const query = knex.select("*").from("posts").where("title", "ilike", "%e");

// console.log(query.toString());

// query.then((result) => {
//   console.log(result);
// });

// select the last 10 posts
knex
  .select("*")
  .from("posts")
  .orderBy("id", "desc")
  .limit(10)
  .then((data) => {
    // If the query is successful, the result from it
    // will be returned as an array of objects where
    // each object corresponds to a row (record) in the table
    // where its keys corrspond to the columns of the table.
    // you can use console.table() to display array of
    // objects as a table
    // console.table(data);
  });

// count the number of posts, find the maxumum id, find the sum of ids from posts table
const myQuery = knex
  .count("* as postCount")
  .max("id as maxId")
  .sum("id as totalOfIds")
  .from("posts");
// or you can type the above query in raw sql:
// knex.raw(
//   `SELECT COUNT(*) AS "postCount", MAX("id") AS "maxId", SUM("id") AS "totalOfIds", from "posts"`
// );
console.log(myQuery.toString());
myQuery.then((data) => {
  console.table(data);
  knex.destroy();
});