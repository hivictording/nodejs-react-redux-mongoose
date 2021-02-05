const express = require("express");
const passport = require("passport");

const authRouter = express.Router();

authRouter.route("/google").get(
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

authRouter.route("/google/callback").get(passport.authenticate("google"));

module.exports = authRouter;
