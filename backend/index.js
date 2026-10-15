require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { verifyToken, isAdminUser } = require("./middleware/auth");

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000" }));
app.use(express.json());

app.get("/", (_req, res) => res.json({ status: "Blog Portfolio API is running" }));
app.use("/api/blogs", require("./routes/blogs"));

// The frontend calls this after login to decide whether to show the admin panel
app.get("/api/auth/admin-check", verifyToken, (req, res) => {
  res.json({ isAdmin: isAdminUser(req.user), email: req.user.email });
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
