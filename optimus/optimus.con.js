"use strict";

const mongoose = require("mongoose");

mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://admin1:admin1@ds049436.mlab.com:49436/heroku_rcxwb9tv");

module.exports = mongoose;