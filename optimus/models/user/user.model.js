"use strict";

const OptimusCon = require("../../optimus.con.js");
const UserModel = OptimusCon.model("User", require("./schemas/user.schema.js"));

module.exports = UserModel;