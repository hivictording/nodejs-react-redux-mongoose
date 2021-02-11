const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const {checkAuth} = require("./middleware/checkAuth")
const router = require("./routes");
require("./services/passport");
require("./services/mongoose");

const { cookieKey } = require("../config/env");

const app = express();

app.use(express.json());
app.use(
  cookieSession({
    maxAge: 60 * 60 * 1000,
    keys: [cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(router);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from node express server");
});

app.listen(port, () => {
  console.log(`Node Express Server Up and Running on port ${port}`);
});

console.log(process.env.TEST_VAR);
