const router = require("express").Router();
const mongoose = require("mongoose");
const Blog = require("../models/Blog");
const { verifyToken, requireAdmin } = require("../middleware/auth");

const FIELDS = ["title", "excerpt", "content", "imageUrl", "category", "author"];
const pick = (body) =>
  FIELDS.reduce((acc, k) => (body[k] !== undefined ? { ...acc, [k]: body[k] } : acc), {});

const validId = (req, res, next) =>
  mongoose.isValidObjectId(req.params.id)
    ? next()
    : res.status(400).json({ message: "Invalid blog id." });

const handleError = (res, err) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: Object.values(err.errors).map((e) => e.message).join(", ") });
  }
  console.error(err);
  res.status(500).json({ message: "Server error." });
};

// ---- Public ----
router.get("/", async (_req, res) => {
  try {
    res.json(await Blog.find().sort({ createdAt: -1 }));
  } catch (err) {
    handleError(res, err);
  }
});

router.get("/:id", validId, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    blog ? res.json(blog) : res.status(404).json({ message: "Post not found." });
  } catch (err) {
    handleError(res, err);
  }
});

// ---- Admin only ----
router.post("/", verifyToken, requireAdmin, async (req, res) => {
  try {
    res.status(201).json(await Blog.create(pick(req.body)));
  } catch (err) {
    handleError(res, err);
  }
});

router.put("/:id", verifyToken, requireAdmin, validId, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, pick(req.body), {
      new: true,
      runValidators: true,
    });
    blog ? res.json(blog) : res.status(404).json({ message: "Post not found." });
  } catch (err) {
    handleError(res, err);
  }
});

router.delete("/:id", verifyToken, requireAdmin, validId, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    blog ? res.json({ message: "Post deleted." }) : res.status(404).json({ message: "Post not found." });
  } catch (err) {
    handleError(res, err);
  }
});

module.exports = router;
