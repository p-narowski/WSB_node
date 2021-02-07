const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");
const fromAnoterFile = require("./functions");
const sample = () => {
  return "próba";
};
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.set("view engine", "hbs");
app.use("/js", express.static(path.join(__dirname, "./js")));
app.get("/", function (req, res) {
  res.render("index", {
    pageTitle: "Dzisiejsza lekcja",
    subTitle: fromAnoterFile.title,
    subsubTitle: sample(),
  });
});
app.get("/about", function (req, res) {
  res.send("My site");
});
app.listen(port, (err) => {
  if (err) {
    return console.log("błąd", err);
  }
  console.log("serwer działa na porcie", port);
});
