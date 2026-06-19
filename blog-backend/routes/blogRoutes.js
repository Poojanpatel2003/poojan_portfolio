const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
router.post("/add-blog", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);

    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.json(blogs);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/delete-blog/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Blog Deleted Successfully"
    });

  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;