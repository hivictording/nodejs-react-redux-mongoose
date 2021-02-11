const mongoose = require("mongoose");

const { mongoDBUrl } = require("../../config/env");

mongoose.connect(mongoDBUrl,{useNewUrlParser: true, useUnifiedTopology: true});

