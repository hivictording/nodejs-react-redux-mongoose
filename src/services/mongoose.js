const mongoose = require("mongoose");

const { mongoDBUrl } = require("../../config/env");

mongoose.connect(mongoDBUrl);
