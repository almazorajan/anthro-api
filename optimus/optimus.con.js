"use strict";

const mongoose = require("mongoose");
const development = false;
const productionConnection = "mongodb://admin1:admin1@ds049436.mlab.com:49436/heroku_rcxwb9tv";
const developmentConnection = "mongodb://admin1:admin1@ds121190.mlab.com:21190/heroku_sk7s21zx";

mongoose.Promise = require("bluebird");
mongoose.connect(development ? developmentConnection : productionConnection);

module.exports = mongoose;