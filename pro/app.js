const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
