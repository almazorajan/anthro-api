"use strict";

const OptimusCon = require("../../optimus.con.js");
const CompanyModel = OptimusCon.model("Company", require("./company.schema"));

module.exports = CompanyModel;