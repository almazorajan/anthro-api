"use strict";

const OptimusCon = require("../../optimus.con");
const EmploymentStatusModel = OptimusCon.model("EmploymentStatus", require("./employee-status.schema"));

module.exports = EmploymentStatusModel;
