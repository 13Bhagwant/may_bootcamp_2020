const express = require("express");
const logger = require("morgan");
const methodOverride = require("method-override");
const welcomeRouter = require("./routes/welcome");
const notesRouter = require("./routes/notes");
const app = express();
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(
  methodOverride((req, res) => {
    if (req.body && req.body._method) {
      const method = req.body._method;
      return method;
    }
  })
);
app.use("/", welcomeRouter);
app.use("/notes", notesRouter);

const PORT = 4000;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening on http://${ADDRESS}:${PORT}`);
});