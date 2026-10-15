const admin = require("firebase-admin");
const path = require("path");

const keyPath = path.resolve(__dirname, process.env.FIREBASE_SERVICE_ACCOUNT_PATH || "./serviceAccountKey.json");

try {
  admin.initializeApp({ credential: admin.credential.cert(require(keyPath)) });
} catch (err) {
  console.error(`Firebase Admin failed to start. Is the key at ${keyPath}?`);
  console.error(err.message);
  process.exit(1);
}

module.exports = admin;
