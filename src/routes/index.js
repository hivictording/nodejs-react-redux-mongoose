const express = require("express");
const userRouter = require("./user");
const postRouter = require("./post");
const authRouter = require("./auth");

const router = express.Router();

router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/auth", authRouter);

module.exports = router;
