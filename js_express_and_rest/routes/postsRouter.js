const express = require("express");
const knex = require("../db/connection");

const router = express.Router();

// Name: posts#new, method: GET, path: '/posts/new'
router.get("/new", (request, response) => {
  response.render("posts/new");
});

// Name: posts#create, method: POST, path: '/posts'
router.post("/", (request, response) => {
  const formData = request.body;
  console.log(formData);
  //   const title = params.title;
  //   const content = params.content;
  //   const imageUrl = params.imageUrl;
  const { title, content, imageUrl } = formData;
  knex("posts")
    .insert({
      title,
      content,
      imageUrl,
    })
    .returning("*")
    .then((post) => {
      // if we want to use a terminating method like
      // response.send, response.render, or response.redirect,
      // and we want to do this after inserting something,
      // updating something, reading something, etc from our
      // database, we need to use that terminating method
      // within the callback to '.then'
      // response.send(post);
      response.redirect(`/posts/${post[0].id}`);
    });
});

// Name: posts#index, method: GET, path: '/posts'
router.get("/", (request, response) => {
  knex("posts")
    .orderBy("createdAt", "DESC")
    .limit(10)
    .then((posts) => {
      // response.send(posts);
      response.render("posts/index", { posts: posts });
    });
});

// Name: posts#show, method: GET, path: /posts/:id
router.get("/:id", (request, response) => {
  // In the URL above, all the words prefixed with ':'
  // are called URL params. You can view the values of URL params
  // with the 'request.params' object property. It contains an object
  // where the property name corresponds to the name of the url param
  // and it is associated value
  // 'request.params' is an object with key value pairs created by
  // pattern-matching against 'variables' named in the URL/path
  // route/posts/:id/:name/:job the route then accessed was:
  // /posts/100/Bob/developer
  // request.params = { id: 100, name: 'bob', job: 'developer' }
  //   console.log(request.params);
  const id = request.params.id;

  knex("posts")
    .where("id", id)
    .first()
    .then((post) => {
      console.log(post);
      if (post) {
        // response.send(post);
        response.render("posts/show", { post: post });
      } else {
        response.redirect("/posts");
      }
    });
});

module.exports = router;