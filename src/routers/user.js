const express = require("express");

const userRouter = express.Router();

userRouter
  .get("/", (req, res) => res.send("User Selected"))
  .post("/", (req, res) => res.send("User Added"))
  .put("/", (req, res) => res.send("User Updated"))
  .delete("/", (req, res) => res.send("User Deleted"));

module.exports = userRouter;
