const express = require("express");

const router = require("./routes");
require("./services/passport");
require("./services/mongoose");

const app = express();

app.use(router);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from node express server");
});

app.listen(port, () => {
  console.log(`Node Express Server Up and Running on port ${port}`);
});
