const express = require("express");
const userRouter = express.Router();

const { User } = require("../models");
const {checkAuth} = require("../middleware/checkAuth")
const {userValidation, userValidationRules} = require("../middleware/userValidator")

userRouter
  .get("/",   async (req, res) => {
    const users = await User.find({})
    res.send(users)
  })
  .post("/", userValidationRules, userValidation, async (req, res) => {
    const user = await User.create({
      userId: req.body.userId,
      name: req.body.name,
      password: req.body.password
    });
    
    res.send(user)
  })
  .put("/", checkAuth,(req, res) => res.send("User Updated"))
  .delete("/", checkAuth,(req, res) => res.send("User Deleted"));

userRouter.get(
  "/current",
  (req, res) => res.send(req.user)
);

userRouter.route("/logout").get(
//   (req, res, next) => {
//     if (!req.user) {
//       return res.redirect("/auth/google");
//     }
//     next()
// },
  (req, res) => {
    req.logout();
    // res.redirect("/");
    res.send(req.user)
  }
);

module.exports = userRouter;
