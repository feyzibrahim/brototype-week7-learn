const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();

const dbURI =
  "mongodb+srv://faizashrafkk:9QsNb7P1Gbvqg7US@cluster0.r2ftqk9.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log("Listening on PORT 4000");
    });
  })
  .catch((error) => console.log(error));

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // if not added data from the form will be undefined

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.render("index", { title: "Home", blogs });
    })
    .catch((err) => console.log(err));
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a Blog" });
});

app.use((req, res) => {
  res.render("404", { title: "404" });
});
