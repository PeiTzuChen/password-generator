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
  const lowercase = req.body.lowercase;
  const uppercase = req.body.uppercase;
  const number = req.body.number;
  const symbol = req.body.symbol;
  const excludeChar = req.body.exclude.trim();
  const password = generateRandom(
    inputLength,
    lowercase,
    uppercase,
    number,
    symbol,
    excludeChar
  );
  res.render("index", { password, inputLength, lowercase, uppercase, number, symbol, excludeChar });
});

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`);
});
