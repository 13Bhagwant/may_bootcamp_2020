const express = require("express");
const knex = require("../db/client");
const router = express.Router();
router.get("/new", (req, res) => {
  res.render("notes/new");
});
router.post("/", (req, res) => {
  knex("notes")
    .insert(
      {
        title: req.body.title,
        body: req.body.body
      },
      "*" 
    )
    .then(notes => {
      const [note] = notes; 
      res.redirect(`notes/${note.id}`);
    });
});
router.get("/", (req, res) => {
  knex
    .select("*")
    .from("notes")
    .orderBy("createdAt", "DESC")
    .then(notes => {
      res.render("notes/index", { notes: notes });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  knex("notes")
    .where("id", id)
    .first()
    .then(note => {
      if (note) {
        res.render("notes/show", {
          note: note
        });
      } else {
        res.redirect("/posts");
      }
    });
});
router.delete("/:id", (req, res) => {
  knex("notes")
    .where("id", req.params.id)
    .del()
    .then(() => {
      res.redirect("/notes");
    });
});
router.get("/:id/edit", (req, res) => {
  console.log("hello from edit route");
  knex("notes")
    .where("id", req.params.id)
    .first()
    .then(note => {
      res.render("notes/edit", { note: note });
    });
});
router.patch("/:id", (req, res) => {
  const updatedNote = {
    title: req.body.title,
    body: req.body.body
  };
  knex("notes")
    .where("id", req.params.id)
    .update(updatedNote)
    .then(() => {
      res.redirect(`/notes/${req.params.id}`);
    });
});

module.exports = router;