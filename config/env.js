const { googleAuth, mongoDBUrl, cookieKey } = require("./dev");

if (process.env.NODE_ENV === "production") {
  module.exports = {
    googleAuth: process.env.GOOGLE_AUTH,
    mongoDBUrl: process.env.MONGODB_URL,
    cookieKey: process.env.COOKIE_KEY,
  };
} else {
  module.exports = {
    googleAuth,
    mongoDBUrl,
    cookieKey,
  };
}
