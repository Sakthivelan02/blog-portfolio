const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"], trim: true, maxlength: 150 },
    excerpt: { type: String, trim: true, maxlength: 300 },
    content: { type: String, required: [true, "Content is required"] },
    imageUrl: { type: String, trim: true },
    category: { type: String, trim: true, default: "General" },
    author: { type: String, trim: true, default: "Sakthivel Arumugam" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
