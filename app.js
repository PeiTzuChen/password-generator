const express = require("express");
const app = express();
const port = 3000;
const { engine } = require("express-handlebars");

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
const generateRandom = require("./js_module/generateRandom.js");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const inputDataArray = req.body;
  // console.log(inputDataArray);
  generateRandom(inputDataArray);
});

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`);
});

//使用post抓checkbox資料與資料長度，傳入module，寫switch case 16個 其中一個不能發生
//需找symbol表
// exclude寫另一個module
