"use strict";

const OptimusCon = require("../../optimus.con");
const ModuleTemplate = require("./module.template");
const ModuleSchema = new OptimusCon.Schema(ModuleTemplate);

module.exports = ModuleSchema;