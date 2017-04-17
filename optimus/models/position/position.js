"use strict";

const OptimusCon = require("../../optimus.con.js");
const PositionSchema = require("./schemas/position.schema.js");

PositionSchema.methods.Add = require("./methods/Add");
PositionSchema.methods.DeleteById = require("./methods/DeleteById");
PositionSchema.methods.UpdateById = require("./methods/UpdateById");

PositionSchema.statics.CountByModuleId = require("./statics/CountByModuleId");
PositionSchema.statics.FindOneByIdAndPositionName = require("./statics/FindOneByIdAndPositionName");
PositionSchema.statics.FindOneByPositionName = require("./statics/FindOneByPositionName");
PositionSchema.statics.GetAll = require("./statics/GetAll");

module.exports = OptimusCon.model("Position", PositionSchema);