const admin = require("../firebaseAdmin");

const adminEmails = () =>
  (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

const isAdminUser = (user) => adminEmails().includes((user.email || "").toLowerCase());

// Verifies the Firebase ID token sent as "Authorization: Bearer <token>"
const verifyToken = async (req, res, next) => {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ message: "Please log in to continue." });

  try {
    req.user = await admin.auth().verifyIdToken(token);
    next();
  } catch {
    res.status(401).json({ message: "Your session has expired. Please log in again." });
  }
};

// Must run after verifyToken
const requireAdmin = (req, res, next) => {
  if (!isAdminUser(req.user)) {
    return res.status(403).json({ message: "Admin access only." });
  }
  next();
};

module.exports = { verifyToken, requireAdmin, isAdminUser };
