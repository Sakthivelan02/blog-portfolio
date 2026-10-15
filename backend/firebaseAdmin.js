const admin = require("firebase-admin");
const path = require("path");

try {
  let serviceAccount;

  // Render-la environment variable iruntha atha use pannum
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  } else {
    // Local PC-la serviceAccountKey.json file use pannum
    const keyPath = path.resolve(__dirname, "./serviceAccountKey.json");
    serviceAccount = require(keyPath);
  }

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
} catch (err) {
  console.error("Firebase Admin failed to start.");
  console.error(err.message);
  process.exit(1);
}

module.exports = admin;