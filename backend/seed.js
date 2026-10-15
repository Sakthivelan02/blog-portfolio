// Optional: npm run seed  -> inserts 3 sample posts if the collection is empty
require("dotenv").config();
const mongoose = require("mongoose");
const Blog = require("./models/Blog");

const posts = [
  {
    title: "Building a role-based LMS with PHP and MySQL",
    excerpt: "How I structured Admin, Staff and Student access in Jettomastery.",
    category: "Projects",
    author: "Sakthivel Arumugam",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    content:
      "Jettomastery has three roles: Admin, Staff and Student. Every page checks the session role before it renders anything.\n\nThe database is split into modules for course allocation, MCQ assessments, coding assessments, results and announcements.\n\nThe biggest lesson: validate input on the server, not only in the browser.",
  },
  {
    title: "Responsive e-commerce UIs with Tailwind CSS",
    excerpt: "What I learned building the Greenery Plants Shop across three screen sizes.",
    category: "Frontend",
    author: "Sakthivel Arumugam",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200",
    content:
      "Designing mobile-first made the desktop layout easier, not harder.\n\nTailwind's breakpoint prefixes let me tune product grids for mobile, tablet and desktop without leaving the markup.\n\nI test every page at three widths before calling it done.",
  },
  {
    title: "From LiDAR to the web: what GIS taught me about data",
    excerpt: "Quality checks and clean data matter in maps and in web apps.",
    category: "Career",
    author: "Sakthivel Arumugam",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200",
    content:
      "Working with LiDAR point clouds taught me to treat data quality as a first-class feature.\n\nThe same habit helps in web development: validate inputs, check outputs and fix problems at the source.",
  },
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    if ((await Blog.countDocuments()) > 0) {
      console.log("Blogs already exist - skipping seed.");
    } else {
      await Blog.insertMany(posts);
      console.log("Seeded 3 sample posts.");
    }
  } catch (err) {
    console.error(err.message);
  } finally {
    await mongoose.disconnect();
  }
})();
