"use strict";

module.exports = {
    CompanyModel: require("./company.model"),
    GetAll: require("./actions/get-all"),
    FindOneByCompanyName: require("./actions/find-one-by-company-name"),
    FindOneByIdAndCompanyName: require("./actions/find-one-by-id-and-company-name"),
    Add: require("./actions/add"),
    UpdateById: require("./actions/update-by-id"),
    DeleteById: require("./actions/delete-by-id")
};