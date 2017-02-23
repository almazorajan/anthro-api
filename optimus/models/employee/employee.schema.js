"use strict";

const OptimusCon = require("../optimus.con");
const EmployeeTemplate = require("./employee.template");
const EmployeeSchema = new OptimusCon.Schema(EmployeeTemplate);

module.exports = EmployeeSchema;