"use strict";

const Db = require("../../database.js");
const CompanySchema = require("./schemas/company.schema");

CompanySchema.methods.Add = require("./methods/Add");
CompanySchema.methods.DeleteById = require("./methods/DeleteById");
CompanySchema.methods.UpdateById = require("./methods/UpdateById");

CompanySchema.statics.FindOneByCompanyName = require("./statics/FindOneByCompanyName");
CompanySchema.statics.FindOneByIdAndCompanyName = require("./statics/FindOneByIdAndCompanyName");

module.exports = Db.model("Company", CompanySchema);