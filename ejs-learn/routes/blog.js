const express = require("express");
const Blog = require("../models/blog");
const {
  getIndexPage,
  getCreateBlogPage,
  getSingleBlog,
  blogCreatePost,
  blogDelete,
} = require("../controller/blogController");

const router = express.Router();

router.get("/create", getCreateBlogPage);

router.get("/", getIndexPage);

router.get("/:id", getSingleBlog);

router.post("/", blogCreatePost);

router.delete("/:id", blogDelete);

module.exports = router;
