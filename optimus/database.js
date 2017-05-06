"use strict";

const mongoose = require("mongoose");
const config = require("./config");

mongoose.Promise = require("bluebird");
mongoose.connect(config);

module.exports = mongoose;