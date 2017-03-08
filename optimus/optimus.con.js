"use strict";

const mongoose = require("mongoose");
const development = true;
const productionConnection = "mongodb://admin1:admin1@ds011379.mlab.com:11379/heroku_dnm1kfpp";
const developmentConnection = "mongodb://admin1:admin1@ds121190.mlab.com:21190/heroku_sk7s21zx";

mongoose.Promise = require("bluebird");
mongoose.connect(development ? developmentConnection : productionConnection);

module.exports = mongoose;