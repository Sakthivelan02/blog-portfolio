require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { verifyToken, isAdminUser } = require("./middleware/auth");

const app = express();

// Allowed origins for CORS (Local and Vercel deployments)
const allowedOrigins = [
  "http://localhost:3000",
  "https://blog-portfolio-brown.vercel.app",
  "https://blog-portfolio-o1revu2br-sakthi-8293.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

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