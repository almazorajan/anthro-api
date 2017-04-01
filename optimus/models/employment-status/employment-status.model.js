"use strict";

const OptimusCon = require("../../optimus.con");
const EmploymentStatusModel = OptimusCon.model("EmploymentStatus", require("./employment-status.schema"));

module.exports = EmploymentStatusModel;
