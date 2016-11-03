
"use strict";

const mongoose = require("mongoose");

mongoose.Promise = require("bluebird");
mongoose.connect('mongodb://localhost/megatron');

module.exports = mongoose;