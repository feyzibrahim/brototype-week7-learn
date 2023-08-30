const Blog = require("../models/blog");

const getIndexPage = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.render("index", { title: "Home", blogs });
    })
    .catch((err) => console.log(err));
};

const getSingleBlog = (req, res) => {
  const id = req.params.id; // same as above :id

  Blog.findById(id)
    .then((result) => {
      res.render("blog", { blog: result, title: "Blog" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getCreateBlogPage = (req, res) => {
  res.render("create", { title: "Create a Blog" });
};

const blogCreatePost = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blogDelete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getIndexPage,
  getCreateBlogPage,
  getSingleBlog,
  blogCreatePost,
  blogDelete,
};
