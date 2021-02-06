const {
  googleAuthCientID,
  googleAuthClientSecret,
  mongoDBUrl,
  cookieKey,
} = require("./dev");

if (process.env.NODE_ENV === "production") {
  module.exports = {
    googleAuthClientID: process.env.GOOGLE_AUTH_CLIENT_ID,
    googleAuthClientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
    mongoDBUrl: process.env.MONGODB_URL,
    cookieKey: process.env.COOKIE_KEY,
  };
} else {
  module.exports = {
    googleAuthCientID,
    googleAuthClientSecret,
    mongoDBUrl,
    cookieKey,
  };
}
