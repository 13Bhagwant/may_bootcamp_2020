const express = require("express");
const knex = require("../db/connection");

const router = express.Router();

// Name: posts#new, method: GET, path: '/posts/new'
router.get("/new", (request, response) => {
  response.render("posts/new");
});

// Name: posts#create, method: POST, path: '/posts'
router.post("/", (request, response) => {
  const params = request.body;
  knex("posts")
    .insert({
      title: params.title,
      content: params.content,
      imageUrl: params.imageUrl,
    })
    .returning("*")
    .then((post) => {
      // if we want to use a terminating method like
      // response.send, response.render, or response.redirect,
      // and we want to do this after inserting something,
      // updating something, reading something, etc from our
      // database, we need to use that terminating method
      // within the callback to '.then'
      response.send(post);
    });
});

module.exports = router;