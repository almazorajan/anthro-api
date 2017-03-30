"use strict";

const OptimusCon = require("../../optimus.con.js");
const CompanyModel = OptimusCon.model("Company", require("./company.schema"));

module.exports = {
    CompanyModel: CompanyModel,
    GetAll: require("./actions/get-all")(CompanyModel),
    FindOneByCompanyName: require("./actions/find-one-by-company-name")(CompanyModel),
    FindOneByIdAndCompanyName: require("./actions/find-one-by-id-and-company-name")(CompanyModel),
    Add: require("./actions/add")(CompanyModel),
    UpdateById: require("./actions/update-by-id")(CompanyModel),
    DeleteById: require("./actions/delete-by-id")(CompanyModel)
};