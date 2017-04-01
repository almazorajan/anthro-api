"use strict";

const Promise = require("bluebird");
const OptimusCon = require("../../optimus.con.js");
const Result = require("../../classes/result.js");
const PositionModel = OptimusCon.model("Position", require("./schemas/position.schema.js"));

module.exports = PositionModel;