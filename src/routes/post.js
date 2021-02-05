const express = require("express");

const postRouter = express.Router();

// postRouter.get("/", (req, res) => {
//   res.send("Hello from Post Router");
// });

postRouter
  .route("/")
  .get((req, res) => res.send("Getting all the posts"))
  .post((req, res) => res.send("Creating Post....."));

module.exports = postRouter;
