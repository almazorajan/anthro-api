"use strict";

const OptimusCon = require("../../optimus.con");
const EmploymentStatusSchema = require("./schemas/employment-status.schema");

EmploymentStatusSchema.methods.Add = require("./methods/Add");
EmploymentStatusSchema.methods.DeleteById = require("./methods/DeleteById");
EmploymentStatusSchema.methods.UpdateById = require("./methods/UpdateById");

EmploymentStatusSchema.statics.FindOneByEmploymentStatus = require("./statics/FindOneByEmploymentStatus");
EmploymentStatusSchema.statics.FindOneByIdAndEmploymentStatus = require("./statics/FindOneByIdAndEmploymentStatus");
EmploymentStatusSchema.statics.GetAll = require("./statics/GetAll");

module.exports = OptimusCon.model("EmploymentStatus", EmploymentStatusSchema);