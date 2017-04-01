"use strict";

const OptimusCon = require("../../optimus.con");
const EmploymentStatusModel = OptimusCon.model("EmploymentStatus", require("./schemas/employment-status.schema"));

module.exports = EmploymentStatusModel;
