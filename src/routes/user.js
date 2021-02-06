const express = require("express");
const userRouter = express.Router();

const { User } = require("../models");

userRouter
  .get("/", (req, res) => res.send("User Selected"))
  .post("/", (req, res) => {
    new User({ userId: "12345" }).save();
    // res.send("ok");
  })
  .put("/", (req, res) => res.send("User Updated"))
  .delete("/", (req, res) => res.send("User Deleted"));

userRouter.get(
  "/current",
  (req, res, next) => {
    if (!req.user) {
      return res.redirect("/auth/google");
    }

    next();
  },
  (req, res) => res.send(req.user)
);

userRouter.route("/logout").get(
  (req, res, next) => {
    if (!req.user) {
      return res.redirect("/auth/google");
    }

    next();
  },
  (req, res) => {
    req.logout();
    res.redirect("/");
  }
);

module.exports = userRouter;
