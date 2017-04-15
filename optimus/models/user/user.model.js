"use strict";

const OptimusCon = require("../../optimus.con.js");

module.exports = OptimusCon.model("User", require("./schemas/user.schema.js"));