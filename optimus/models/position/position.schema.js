"use strict";

const OptimusCon = require("../../optimus.con");
const PositionTemplate = require("./position.template");
const PositionSchema = new OptimusCon.Schema(PositionTemplate);

module.exports = PositionSchema;