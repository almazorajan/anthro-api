"use strict";

const OptimusCon = require("../../optimus.con");
const AuthenticationModel = OptimusCon.model("Authentication", require("./schemas/authentication.schema"));

module.exports = AuthenticationModel;
