"use strict";

const OptimusCon = require("../../optimus.con.js");
const ModuleModel = OptimusCon.model("Module", require("./schemas/module.schema.js"));

module.exports = ModuleModel;