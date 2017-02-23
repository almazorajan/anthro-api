"use strict";

const OptimusCon = require("../../optimus.con");
const CompanyTemplate = require("./company.template");
const CompanySchema = new OptimusCon.Schema(CompanyTemplate);

module.exports = CompanySchema;