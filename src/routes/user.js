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

module.exports = userRouter;
