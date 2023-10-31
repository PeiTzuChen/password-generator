const express = require("express");
const app = express();
const port = 3000;
const { engine } = require("express-handlebars");

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
const generateRandom = require("./utils/generateRandom.js");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const inputLength = req.body.length;
  const characterType = req.body.characterType;
  const excludeChar = req.body.exclude.trim();
  const password = generateRandom(inputLength, characterType, excludeChar);
  res.render("index", { password, inputLength, excludeChar, characterType });
});

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`);
});
