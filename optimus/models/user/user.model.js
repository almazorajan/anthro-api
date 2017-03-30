"use strict";

const OptimusCon = require("../../optimus.con.js");
const UserModel = OptimusCon.model("User", require("./user.schema.js"));

module.exports = UserModel;