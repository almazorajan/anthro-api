"use strict";

const OptimusCon = require("../../optimus.con");
const EmployeeModel = OptimusCon.model("Employee", require("./schemas/employee.schema"));

module.exports = EmployeeModel;