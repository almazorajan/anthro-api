"use strict";

const OptimusCon = require("../../optimus.con.js");
const CompanyModel = OptimusCon.model("Company", require("./schemas/company.schema"));

module.exports = CompanyModel;