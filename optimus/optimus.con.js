"use strict";

const mongoose = require("mongoose");
const process = require("process");

mongoose.Promise = require("bluebird");
mongoose.connect(process.env.MONGODB_CON ? process.env.MONGODB_CON : "mongodb://localhost:27017/megatron");

module.exports = mongoose;