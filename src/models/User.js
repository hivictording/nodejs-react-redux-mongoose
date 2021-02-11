const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  name: String,
  password: String,
});

module.exports = mongoose.model("users", userSchema);
