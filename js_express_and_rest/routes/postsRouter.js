const express = require("express");
const knex = require("../db/connection");

const router = express.Router();

// Name: posts#new, method: GET, path: '/posts/new'
router.get("/new", (request, response) => {
  response.render("posts/new");
});

module.exports = router;