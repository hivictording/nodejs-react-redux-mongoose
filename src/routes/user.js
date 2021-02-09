const express = require("express");
const userRouter = express.Router();

const { User } = require("../models");
const {checkAuth} = require("../middleware/checkAuth")

userRouter
  .get("/", checkAuth, (req, res) => res.send("User Selected"))
  .post("/", checkAuth, (req, res) => {
    new User({ userId: "12345" }).save();
    // res.send("ok");
  })
  .put("/", checkAuth,(req, res) => res.send("User Updated"))
  .delete("/", checkAuth,(req, res) => res.send("User Deleted"));

userRouter.get(
  "/current",
  checkAuth,
  (req, res) => res.send(req.user)
);

userRouter.route("/logout").get(
  (req, res) => {
    console.log('logout')
    req.logout();
    res.redirect("/");
  }
);

module.exports = userRouter;
