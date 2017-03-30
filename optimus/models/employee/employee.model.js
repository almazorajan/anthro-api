"use strict";

const OptimusCon = require("../../optimus.con");
const EmployeeModel = OptimusCon.model("Employee", require("./employee.schema"));

module.exports = EmployeeModel;
