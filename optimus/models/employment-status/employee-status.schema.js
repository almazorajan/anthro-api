"use strict";

const OptimusCon = require("../../optimus.con");
const EmploymentStatusTemplate = require("./employment-status.template");
const EmployeeStatusSchema = new OptimusCon.Schema(EmploymentStatusTemplate);

module.exports = EmployeeStatusSchema;